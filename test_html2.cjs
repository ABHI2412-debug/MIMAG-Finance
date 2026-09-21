const fs = require('fs');
const fileContent = fs.readFileSync('./app.js', 'utf8');
const start = fileContent.indexOf('document.querySelector("#app").innerHTML = ');
if (start !== -1) {
  const contentAfter = fileContent.substring(start + 44);
  // find the last backtick before a semicolon at the root level? No, just find "<!-- --- LIFE STAGES --- -->"
  console.log('Contains LIFE STAGES: ' + contentAfter.includes('<!-- --- LIFE STAGES --- -->'));
}
