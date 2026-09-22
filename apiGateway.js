// توحيد وتنظيم مسارات الـ API الخاصة بالمباريات والقنوات
function routeExternalStreamData(data) {
    return { status: 'Success', source: 'Direct Stream API', data };
}
module.exports = { routeExternalStreamData };
