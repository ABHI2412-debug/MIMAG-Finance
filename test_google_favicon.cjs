const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.ril.com&size=128';

https.get(url, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream(path.join(__dirname, 'public', 'images', 'ril.png'));
    res.pipe(file);
    file.on('finish', () => console.log('Downloaded ril.png'));
  } else {
    console.log('Failed', res.statusCode);
  }
});
