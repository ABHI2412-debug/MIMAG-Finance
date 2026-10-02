const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');
let contactHtml = fs.readFileSync('contact.html', 'utf8');

// Extract footer from app.js
const footerStart = appJs.indexOf('<footer class="ftr">');
const footerEnd = appJs.indexOf('</footer>', footerStart) + '</footer>'.length;
const homepageFooter = appJs.substring(footerStart, footerEnd);

// Find where to insert in contact.html
const bodyEndIndex = contactHtml.indexOf('</body>');

if (footerStart !== -1 && bodyEndIndex !== -1) {
  // If contactHtml already has a footer, don't just insert, replace it or skip
  // But wait, it didn't have one in my check. So just insert before </body>
  const newContactHtml = contactHtml.substring(0, bodyEndIndex) + '\n' + homepageFooter + '\n' + contactHtml.substring(bodyEndIndex);
  fs.writeFileSync('contact.html', newContactHtml);
  console.log('Successfully added homepage footer to contact page.');
} else {
  console.log('Error: Could not find footer in app.js or </body> in contact.html.');
}
