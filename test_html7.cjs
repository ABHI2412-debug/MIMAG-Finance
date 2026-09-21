const fs = require('fs');
const fileContent = fs.readFileSync('./app.js', 'utf8');
const start = 8724;
const end = 9410;
console.log(fileContent.substring(start, end));
