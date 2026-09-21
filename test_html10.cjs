const fs = require('fs');
const lines = fs.readFileSync('./app.js', 'utf8').split('\n');
for (let i = 40; i < 90; i++) {
  console.log(i + ': ' + lines[i]);
}
