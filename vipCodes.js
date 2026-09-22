// إدارة توليد والتحقق من رموز الوصول الخاصة للمستخدمين المميزين
const activeVipCodes = ['ABO-ELAZ-VIP-999', 'NEXUS-PRO-2026'];

function verifyVipCode(code) {
    return activeVipCodes.includes(code);
}
module.exports = { verifyVipCode };
