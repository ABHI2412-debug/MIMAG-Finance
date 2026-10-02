const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://icons.duckduckgo.com/ip3/tcs.com.ico';
const dest = path.join(__dirname, 'public', 'images', 'tcs.png'); // DuckDuckGo often returns PNGs even with .ico extension

https.get(url, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => console.log('Downloaded tcs.png from DuckDuckGo'));
  } else {
    console.log('Failed', res.statusCode);
  }
});
