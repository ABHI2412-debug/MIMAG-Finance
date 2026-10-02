const fs = require('fs');

function update(file) {
  if(!fs.existsSync('d:\\MIMAG-Finance\\' + file)) return;
  let content = fs.readFileSync('d:\\MIMAG-Finance\\' + file, 'utf8');
  content = content.replace(/"Playfair Display",\s*serif/g, "'Instrument Serif', 'Times New Roman', serif");
  content = content.replace(/'Playfair Display',\s*serif/g, "'Instrument Serif', 'Times New Roman', serif");
  content = content.replace(/"DM Sans",\s*sans-serif/g, "inherit");
  content = content.replace(/'DM Sans',\s*sans-serif/g, "inherit");
  content = content.replace(/Playfair Display/g, "Instrument Serif");
  fs.writeFileSync('d:\\MIMAG-Finance\\' + file, content);
}

['insurance.css', 'contact.css', 'app.js'].forEach(update);
console.log('updated css files');
