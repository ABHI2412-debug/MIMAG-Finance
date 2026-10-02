const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('Invest') || line.includes('x:') || line.includes('y:') || line.includes('top:') || line.includes('left:')) {
    if (line.length < 200) {
      console.log(`${index + 1}: ${line}`);
    }
  }
});
