const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'stocks.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace py-3 with py-5 in all <td> and <th> elements
html = html.replace(/<td class="py-3 /g, '<td class="py-5 ');
html = html.replace(/<td class="py-3"/g, '<td class="py-5"');

// In the injected script, we also update the className with py-3. Let's fix that too.
html = html.replace(/className = `py-3 text-xs /g, 'className = `py-5 text-xs ');

fs.writeFileSync(filePath, html, 'utf8');
console.log('stocks.html table padding fixed');
