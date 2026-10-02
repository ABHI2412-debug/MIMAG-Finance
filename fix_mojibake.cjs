const fs = require('fs');

function fixCSS(filePath) {
  try {
    let css = fs.readFileSync(filePath, 'utf8');
    css = css.replace(/content:\s*'âœ“'/g, "content: '\\2713'");
    fs.writeFileSync(filePath, css, 'utf8');
    console.log('Fixed ' + filePath);
  } catch (e) {
    console.error('Error with ' + filePath, e);
  }
}

fixCSS('styles.css');
fixCSS('dist/styles.css');
