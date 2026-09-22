// تفعيل وضع الصيانة المؤقت للسيرفر عند إجراء تحديثات جذرية
const isMaintenance = false;

function checkMaintenance(req, res, next) {
    if (isMaintenance) {
        return res.send('<h1 style="text-align:center; padding-top:100px; font-family:Tahoma;">🛠️ المنظومة في حالة تحديث صيانة دورية عاجلة. عودوا قريباً!</h1>');
    }
    next();
}
module.exports = { checkMaintenance };
