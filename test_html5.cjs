const fs = require('fs');
const lines = fs.readFileSync('./app.js', 'utf8').split('\n');
for (let i = 690; i < 705; i++) {
  console.log(i + ': ' + lines[i]);
}
