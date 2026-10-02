const fs = require('fs');

const mfContent = fs.readFileSync('d:/MIMAG-Finance/mutual-funds.html', 'utf8');
const headerMatch = mfContent.match(/<header[\s\S]*?<\/header>/);
let headerHTML = headerMatch ? headerMatch[0] : '';
headerHTML = headerHTML.replace(/href="about\.html"([^>]*>About Us<\/a>)/g, 'href="about.html"$1');

let aboutContent = fs.readFileSync('d:/MIMAG-Finance/about.html', 'utf8');
aboutContent = aboutContent.replace(/\$\{updatedHeaderHTML\}/g, headerHTML);

fs.writeFileSync('d:/MIMAG-Finance/about.html', aboutContent);
