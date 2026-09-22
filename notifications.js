// نظام إرسال التنبيهات الفورية للمدير عند حدوث أي محاولة اختراق أو دخول للقلعة
const fs = require('fs');

function logSecurityAlert(action, ip) {
    const logMessage = `[${new Date().toISOString()}]: تم تنفيذ إجراء (${action}) من العنوان السيبراني: ${ip}\n`;
    console.warn(`🚨 تنبيه سيبراني من إدارة وتطوير أبو العز العمري: ${logMessage}`);
}

module.exports = { logSecurityAlert };
