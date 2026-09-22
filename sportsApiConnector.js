// نظام جلب المباريات والجداول الرياضية الحية عبر الـ API - إدارة وتطوير أبو العز العمري
const https = https || require('https');

// دالة لجلب جدول مباريات اليوم (مثل الكلاسيكو والدوريات الكبرى) آلياً
async function fetchLiveMatchesFromAPI() {
    // يمكنك ربط هذا الرابط بأي API رياضي شهير مثل API-Football أو Football-Data.org
    return [
        {
            id: "el-clasico-2026",
            homeTeam: "برشلونة",
            awayTeam: "ريال مدريد",
            tournament: "الدوري الإسباني - الكلاسيكو",
            matchTime: "2026-10-25T21:00:00Z",
            status: "LIVE_OR_UPCOMING",
            streamEndpoint: "/api/stream/satellite-feed/el-clasico"
        },
        {
            id: "ucl-match-1",
            homeTeam: "ليفربول",
            awayTeam: "مانشستر سيتي",
            tournament: "دوري أبطال أوروبا",
            matchTime: "2026-10-24T22:00:00Z",
            status: "SCHEDULED",
            streamEndpoint: "/api/stream/satellite-feed/ucl-1"
        }
    ];
}

module.exports = { fetchLiveMatchesFromAPI };
