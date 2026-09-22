const express = require('express');
const router = express.Router();
const User = require('./User');
const AdSettings = require('./AdSettings');
const { generateAdminToken, verifyMasterAdmin } = require('./auth');
const bcrypt = require('bcryptjs');

router.post('/login-nexus', async (req, res) => {
    try {
        const { username, password } = req.body;
        let admin = await User.findOne({ username, role: 'master_admin' });
        
        if (!admin) {
            return res.status(401).json({ error: "❌ بيانات الدخول غير صحيحة." });
        }

        const isMatch = await bcrypt.compare(password, admin.passwordHash);
        if (!isMatch) {
            return res.status(401).json({ error: "❌ كلمة المرور غير صحيحة." });
        }

        const token = generateAdminToken(admin);
        res.cookie('admin_auth_token', token, { httpOnly: true, secure: true, maxAge: 7200000 });
        res.json({ success: true, message: "🛡️ تم تسجيل الدخول للقلعة بنجاح!", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/ads/update', verifyMasterAdmin, async (req, res) => {
    try {
        const { zoneName, adCode, isActive } = req.body;
        let ad = await AdSettings.findOneAndUpdate(
            { zoneName },
            { adCode, isActive, updatedAt: Date.now() },
            { upsert: true, new: true }
        );
        res.json({ success: true, message: "🚀 تم تحديث إعلانات Adsterra بنجاح!", ad });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
