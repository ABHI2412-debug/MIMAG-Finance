const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

const targetStr = `  const links = nav.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
      highlight.style.opacity = "1";
      highlight.style.width = e.target.offsetWidth + "px";
      highlight.style.transform = \`translateX(\${e.target.offsetLeft}px)\`;
    });
  });`;

const replacementStr = `  const links = nav.querySelectorAll(":scope > a, :scope > .nav-item-dropdown");

  links.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
      highlight.style.opacity = "1";
      highlight.style.width = link.offsetWidth + "px";
      highlight.style.transform = \`translateX(\${link.offsetLeft}px)\`;
    });
  });`;

if (appJs.includes(targetStr)) {
  appJs = appJs.replace(targetStr, replacementStr);
  fs.writeFileSync('app.js', appJs);
  console.log('Fixed nav highlight successfully.');
} else {
  // try regex with wildcard spaces
  const regex = /const links = nav\.querySelectorAll\("a"\);[\s\S]*?\}\);[\s\S]*?\}\);/m;
  if (regex.test(appJs)) {
    appJs = appJs.replace(regex, replacementStr);
    fs.writeFileSync('app.js', appJs);
    console.log('Fixed nav highlight successfully using regex.');
  } else {
    console.log('Target string not found!');
  }
}
