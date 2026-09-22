const mongoose = require('mongoose');

const adSettingsSchema = new mongoose.Schema({
    zoneName: { type: String, required: true },
    adCode: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AdSettings', adSettingsSchema);
