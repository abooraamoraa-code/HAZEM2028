// نظام جلب المباريات الحقيقية عبر football-data.org - إدارة وتطوير أبو العز العمري
const https = require('https');

async function fetchRealLiveMatches() {
    return new Promise((resolve, reject) => {
        // مفتاح الـ API الحقيقي الخاص بك بعد تنظيف المسافة الزائدة
        const apiKey = '0dbe679c14754626bf53612cebf94ab6';

        const options = {
            hostname: 'api.football-data.org',
            path: '/v4/matches?status=SCHEDULED,LIVE',
            headers: { 
                'X-Auth-Token': apiKey 
            }
        };

        https.get(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    if (parsedData.matches) {
                        // تنسيق المباريات الحقيقية لعرضها في الموقع
                        const formattedMatches = parsedData.matches.map(match => ({
                            id: match.id,
                            homeTeam: match.homeTeam.name,
                            awayTeam: match.awayTeam.name,
                            tournament: match.competition.name,
                            matchTime: match.utcDate,
                            status: match.status,
                            streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                        }));
                        resolve(formattedMatches);
                    } else {
                        resolve([]); 
                    }
                } catch (e) {
                    reject(e);
                }
            });

        }).on('error', (err) => {
            reject(err);
        });
    });
}

module.exports = { fetchRealLiveMatches };
