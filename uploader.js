// نظام معالجة وتشفير الملفات المرفوعة الكبرى
const crypto = require('crypto');

function generateSecureFileKey(originalName) {
    const hash = crypto.createHash('sha256').update(originalName + Date.now().toString()).digest('hex');
    return `SECURE_KEY_${hash.substring(0, 16).toUpperCase()}`;
}

module.exports = { generateSecureFileKey };
