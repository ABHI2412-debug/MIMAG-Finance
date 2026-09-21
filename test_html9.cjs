const fs = require('fs');
const fileContent = fs.readFileSync('./app.js', 'utf8');
let s = '';
for (let i = 9400; i < 9410; i++) {
  s += i + ': ' + fileContent[i] + ' (' + fileContent.charCodeAt(i) + ')\n';
}
console.log(s);
