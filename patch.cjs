const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const target = `// Mobile nav
document.querySelector("#menuBtn").addEventListener("click", () => {
  document.querySelector("#mainNav").classList.toggle("open");
});

// Newsletter`;

const repl = `// Mobile nav
document.querySelector("#menuBtn").addEventListener("click", () => {
  document.querySelector("#mainNav").classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("#mainNav").classList.remove("open");
  });
});

// Newsletter`;

if(code.includes(target)) {
    code = code.replace(target, repl);
    fs.writeFileSync('app.js', code);
    console.log("Success");
} else {
    console.log("Target not found!");
}
