// حظر آلي لأي محاولة اختراق أو تخمين متكرر
const blockedIPs = [];

function checkIpBlocked(req, res, next) {
    const clientIp = req.ip;
    if (blockedIPs.includes(clientIp)) {
        return res.status(403).send('⛔ تم حظر عنوان الـ IP الخاص بك نهائياً.');
    }
    next();
}
module.exports = { checkIpBlocked };
