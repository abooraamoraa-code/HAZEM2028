/* =========================================================
   المحرك الرئيسي لربط المباريات تلقائياً - إدارة وتطوير أبو العز العمري
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // تهيئة مشغل الفيديو Video.js
    const player = videojs('liveTVPlayer');

    // دالة لتحديث وتشغيل القناة أو المباراة فورياً
    window.playStream = function(streamUrl, matchTitle, leagueName) {
        document.getElementById('nowPlayingTitle').innerText = matchTitle;
        document.getElementById('nowPlayingLeague').innerText = leagueName;

        player.src({
            src: streamUrl,
            type: streamUrl.includes('.m3u8') ? 'application/x-mpegURL' : 'video/mp4'
        });

        player.play();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // جلب جدول المباريات آلياً من الـ API الذكي
    async function loadAutomatedMatches() {
        try {
            // محاكاة الاتصال التلقائي بملف sportsApiConnector
            const sampleMatches = [
                {
                    title: "برشلونة × ريال مدريد",
                    league: "الدوري الإسباني - الكلاسيكو الفضائي",
                    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                },
                {
                    title: "ليفربول × مانشستر سيتي",
                    league: "الدوري الإنجليزي الممتاز",
                    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                },
                {
                    title: "قناة بي إن سبورت 1 (HD)",
                    league: "بث قمر صناعي مباشر 24/7",
                    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                }
            ];

            const gridContainer = document.getElementById('matchesGrid');
            if (!gridContainer) return;

            gridContainer.innerHTML = ''; // تفريغ القائمة لإدراج البيانات الحية

            sampleMatches.forEach(match => {
                const cardHTML = `
                    <div class="match-card">
                        <div class="match-details">
                            <h4>${match.title}</h4>
                            <p>${match.league}</p>
                        </div>
                        <button class="btn-play" onclick="playStream('${match.url}', '${match.title}', '${match.league}')">
                            شاهد الآن
                        </button>
                    </div>
                `;
                gridContainer.innerHTML += cardHTML;
            });
        } catch (error) {
            console.error("خطأ في جلب بيانات المباريات الآلية:", error);
        }
    }

    // تشغيل الجلب الآلي عند فتح الصفحة
    loadAutomatedMatches();
});
