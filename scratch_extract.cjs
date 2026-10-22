const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

const apps = [
  { id: 'welvors', pkg: 'com.infynod.welvors' },
  { id: 'simplify-vms', pkg: 'com.simplifyvmsapp.mobile' },
  { id: 'baap-crm', pkg: 'com.baap.crm.app' },
  { id: 'school-book', pkg: 'com.school.book.app' },
  { id: 'officebook-hrms', pkg: 'com.baapcompany.officebook.hrms' },
  { id: 'strawberry-ems', pkg: 'com.strawberry.ems' },
  { id: 'goyant', pkg: 'com.goyant.travel' },
  { id: 'goyant-business', pkg: 'com.goyant.business.app' },
  { id: 'treecoin', pkg: 'com.treecoin.app' },
  { id: 'janhit', pkg: 'com.government.janhit' },
  { id: 'rm-drip-dealer', pkg: 'com.rmdrip.dealer' }
];

async function run() {
  const result = {};

  for (const app of apps) {
    console.log('Fetching', app.id, app.pkg);
    const html = await fetchUrl(`https://play.google.com/store/apps/details?id=${app.pkg}&hl=en`);
    
    // Look for googleusercontent URLs
    // App icon usually has s0-br30 or =s48 or =s96 or =w240-h480
    const matches = html.match(/https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_\-=]+/g) || [];
    const unique = Array.from(new Set(matches));

    // Distinguish icon and screenshots
    // In Google Play HTML, the first image is usually the icon (with =s... or s0-br30)
    // Screenshots are usually =w...-h... or =w720-h1280 or =w526-h296
    result[app.id] = {
      pkg: app.pkg,
      rawImages: unique.slice(0, 10)
    };
  }

  fs.writeFileSync('C:/Users/Admin/Desktop/vaibhav-portfolio/src/data/playAssets.json', JSON.stringify(result, null, 2));
  console.log('Saved playAssets.json successfully!');
}

run();
