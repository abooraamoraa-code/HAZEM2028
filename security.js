// طبقة الحماية والتشفير الإضافية للنظام السيبراني
const helmet = require('helmet');

function applyAdvancedSecurity(app) {
    app.use(helmet.hidePoweredBy());
    app.use(helmet.noSniff());
    app.use(helmet.xssFilter());
}

module.exports = { applyAdvancedSecurity };
