import fs from 'fs';
import path from 'path';

const fileContent = fs.readFileSync('./app.js', 'utf8');

let match = fileContent.match(/document\.querySelector\("#app"\)\.innerHTML\s*=\s*([\s\S]*?);/);
if (match) {
  console.log(match[1]);
}
