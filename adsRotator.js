// تبديل وتدوير إعلانات Adsterra تلقائياً لزيادة الأرباح والعوائد المالية
const adZones = ['Banner_Top', 'Banner_Footer', 'Popunder_Global'];

function getNextAdZone(current) {
    const nextIndex = (adZones.indexOf(current) + 1) % adZones.length;
    return adZones[nextIndex];
}
module.exports = { getNextAdZone };
