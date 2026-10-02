const fs = require('fs');
const path = require('path');

const dir = 'd:\\MIMAG-Finance';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.cjs')) {
    const filePath = path.join(dir, file);
    if (!fs.statSync(filePath).isFile()) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace href="contact.html" with href="contact.html" globally
    content = content.replace(/href="contact.html"/g, 'href="contact.html"');
    
    // Also replace href="contact.html" with href="contact.html" globally just in case
    content = content.replace(/href="index\.html#contact"/g, 'href="contact.html"');
    
    fs.writeFileSync(filePath, content);
  }
});
console.log('Replaced all #contact links');
