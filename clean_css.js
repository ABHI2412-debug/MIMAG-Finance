const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');
css = css.replace(/\/\* â•[\s\S]*?\*\//g, '/* SECTION */');
css = css.replace(/\/\* ═[\s\S]*?\*\//g, '/* SECTION */');
fs.writeFileSync('styles.css', css, 'utf8');
console.log('Cleaned styles.css comments');
