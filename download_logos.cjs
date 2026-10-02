const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = {
  'ril.png': 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/120px-Reliance_Industries_Logo.svg.png',
  'tcs.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/200px-Tata_Consultancy_Services_Logo.svg.png',
  'hdfc.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/200px-HDFC_Bank_Logo.svg.png',
  'icici.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/200px-ICICI_Bank_Logo.svg.png',
  'infy.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png',
  'sbin.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/200px-SBI-logo.svg.png',
  'airtel.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Airtel_logo.svg/200px-Airtel_logo.svg.png',
  'itc.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/200px-ITC_Limited_Logo.svg.png'
};

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download() {
  for (const [filename, url] of Object.entries(urls)) {
    const dest = path.join(dir, filename);
    await new Promise((resolve) => {
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
