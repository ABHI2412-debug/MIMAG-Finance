const https = require('https');
const fs = require('fs');
const path = require('path');

const domains = {
  'ril.png': 'ril.com',
  'tcs.png': 'tcs.com',
  'hdfc.png': 'hdfcbank.com',
  'icici.png': 'icicibank.com',
  'infy.png': 'infosys.com',
  'sbin.png': 'onlinesbi.sbi',
  'airtel.png': 'airtel.in',
  'itc.png': 'itcportal.com'
};

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download() {
  for (const [filename, domain] of Object.entries(domains)) {
    const url = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`;
    const dest = path.join(dir, filename);
    await new Promise((resolve) => {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(dest);
          res.pipe(file);
          file.on('finish', () => { file.close(); console.log(`Downloaded ${filename}`); resolve(); });
        } else {
          console.log(`Failed ${filename}: ${res.statusCode}`);
          resolve();
        }
      });
    });
  }
}
download();
