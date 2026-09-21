const fs = require('fs');
const lines = fs.readFileSync('./app.js', 'utf8').split('\n');
for (let i = 240; i < 250; i++) {
  console.log(i + ': ' + lines[i]);
}
