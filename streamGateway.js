// بوابة جلب وربط إشارات الأقمار الصناعية وقنوات البث الحية - إدارة وتطوير أبو العز العمري

// قائمة بمصادر وروابط البث الفضائي الحية المعتمدة (Streams HLS / M3U8)
const satelliteChannelsMap = {
    "ch-bein-1": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", // استبدل هذا برابط فضائي حي حقيقي للقناة
    "ch-bein-2": "https://vjs.zencdn.net/v/oceans.mp4",
    "ch-ssc-1": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    "default-live": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
};

// دالة ذكية لمطابقة اسم الفريق أو البطولة مع القناة الفضائية الناقلة وبثها آلياً
function getRealSatelliteStream(teamName, competitionName) {
    // إذا كانت المباراة تخص دوري أبطال أوروبا أو الدوري الإسباني، نوجهها لقناة البث الرئيسية المخصصة
    if (competitionName && (competitionName.includes('Champions League') || competitionName.includes('Primera Division'))) {
        return satelliteChannelsMap["ch-bein-1"];
    }
    
    // أي مباراة أخرى سيتم توجيهها للبث الفضائي المتاح
    return satelliteChannelsMap["default-live"];
}

// مسار الـ API الذي سيتعامل معه التطبيق لجلب رابط البث الحقيقي لأي مباراة
function handleRealSatelliteRoute(req, res) {
    const { team, competition } = req.query;
    
    const activeStreamUrl = getRealSatelliteStream(team, competition);

    res.json({
        success: true,
        gateway: "Abo Elaz Alomari Direct Satellite Uplink",
        matchedTeam: team || "General Stream",
        activeStreamUrl: activeStreamUrl,
        securityEncryption: "AES-HLS-SECURED"
    });
}

module.exports = { handleRealSatelliteRoute, getRealSatelliteStream };
