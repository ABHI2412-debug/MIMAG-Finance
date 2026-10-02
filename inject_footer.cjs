const fs = require('fs');

const appJsLines = fs.readFileSync('d:\\MIMAG-Finance\\app.js', 'utf8').split(/\r?\n/);
let footerStart = -1, footerEnd = -1;
for (let i = 0; i < appJsLines.length; i++) {
  if (appJsLines[i].includes('<footer class="ftr">')) footerStart = i;
  if (appJsLines[i].includes('</footer>') && footerStart !== -1) { footerEnd = i; break; }
}

if (footerStart === -1 || footerEnd === -1) {
  console.log("Could not find footer in app.js");
  process.exit(1);
}

const footerHtml = appJsLines.slice(footerStart, footerEnd + 1).join('\n');

const htmlFiles = fs.readdirSync('d:\\MIMAG-Finance').filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of htmlFiles) {
  let content = fs.readFileSync('d:\\MIMAG-Finance\\' + file, 'utf8');
  
  if (content.includes('<footer')) {
    content = content.replace(/<footer[\s\S]*?<\/footer>/, footerHtml);
  } else {
    content = content.replace('</body>', '\n' + footerHtml + '\n</body>');
  }
  
  fs.writeFileSync('d:\\MIMAG-Finance\\' + file, content);
  console.log('Updated', file);
}
