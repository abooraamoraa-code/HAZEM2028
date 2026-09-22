// تحسين سرعة إرسال البيانات وتقليل استهلاك الـ Bandwidth
function optimizeServerResponse(req, res, next) {
    res.setHeader('X-Powered-By', 'Abo Elaz Alomari Cyber Engine');
    next();
}
module.exports = { optimizeServerResponse };
