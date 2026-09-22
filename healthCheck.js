// نظام فحص نبضات السيرفر وقاعدة البيانات لضمان عدم النوم نهائياً
const mongoose = require('mongoose');

function checkSystemHealth(req, res) {
    const dbState = mongoose.connection.readyState;
    const statusMap = {
        0: '❌ متقطع / منفصل',
        1: '🟢 متصل وقيد العمل بكفاءة تامة',
        2: '🟡 جاري الاتصال...',
        3: '🟠 جاري قطع الاتصال'
    };

    res.json({
        system: "إدارة وتطوير أبو العز العمري - Core Engine",
        status: "يعمل بأقصى طاقة",
        databaseStatus: statusMap[dbState] || 'مجهول',
        uptime: process.uptime(),
        timestamp: new Date()
    });
}

module.exports = { checkSystemHealth };
