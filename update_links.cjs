const fs = require('fs');
const path = require('path');

const dir = 'd:\\MIMAG-Finance';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.html') || file === 'app.js') {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace href="contact.html" with href="contact.html"
    content = content.replace(/href="index\.html#contact"/g, 'href="contact.html"');
    
    // Replace href="contact.html" with href="contact.html" ONLY for the "Book a Consultation" button in app.js
    if (file === 'app.js') {
      content = content.replace(/href="contact.html"(>Book a Consultation)/g, 'href="contact.html"$1');
    }
    
    fs.writeFileSync(filePath, content);
  }
});
console.log('Replaced links');
