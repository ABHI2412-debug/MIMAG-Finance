const fs = require('fs');
const htmlFiles = fs.readdirSync('d:\\MIMAG-Finance').filter(f => f.endsWith('.html'));

for (const file of htmlFiles) {
  let content = fs.readFileSync('d:\\MIMAG-Finance\\' + file, 'utf8');
  
  // Remove link tags containing fonts.googleapis.com or fonts.gstatic.com
  content = content.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/g, '');
  content = content.replace(/<link[^>]*fonts\.gstatic\.com[^>]*>/g, '');
  
  fs.writeFileSync('d:\\MIMAG-Finance\\' + file, content);
}
console.log('Removed old font links from HTML files');
