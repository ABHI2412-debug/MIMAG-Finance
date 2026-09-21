const fs = require('fs');
const fileContent = fs.readFileSync('./app.js', 'utf8');
const start = fileContent.indexOf('document.querySelector("#app").innerHTML = ');
const nextEnd = fileContent.indexOf(';', start);
console.log('innerHTML start at ' + start);
console.log('first ;' + ' is at ' + nextEnd);
