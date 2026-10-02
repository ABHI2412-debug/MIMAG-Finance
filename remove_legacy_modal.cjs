const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');
content = content.replace(/window\.openServiceModal = function \(index\) \{[\s\S]*?classList\.add\('active'\);\n\};/g, '// Removed legacy openServiceModal');
fs.writeFileSync('app.js', content);
console.log('Replaced successfully');
