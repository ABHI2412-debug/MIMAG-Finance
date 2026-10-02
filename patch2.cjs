const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const regex = /\/\/ Mobile nav[\s\S]*?document\.querySelector\("#mainNav"\)\.classList\.toggle\("open"\);\s*\}\);/g;

const repl = `// Mobile nav
document.querySelector("#menuBtn").addEventListener("click", () => {
  document.querySelector("#mainNav").classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("#mainNav").classList.remove("open");
  });
});`;

if(code.match(regex)) {
    code = code.replace(regex, repl);
    fs.writeFileSync('app.js', code);
    console.log("Success");
} else {
    console.log("Target not found!");
}
