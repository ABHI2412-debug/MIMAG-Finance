const fs = require('fs');
const lines = fs.readFileSync('./app.js', 'utf8').split('\n');
console.log('Line ' + lines.findIndex(l => l.includes('innerHTML = ')) + ': innerHTML start');
console.log('Line ' + lines.findIndex(l => l.includes('<!-- --- LIFE STAGES --- -->')) + ': LIFE STAGES comment');
