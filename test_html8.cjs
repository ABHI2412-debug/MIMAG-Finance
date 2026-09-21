const fs = require('fs');
const fileContent = fs.readFileSync('./app.js', 'utf8');
console.log('Char at 9406: ' + fileContent[9406]);
console.log('Char at 9407: ' + fileContent[9407]);
