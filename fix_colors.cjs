const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

// Replace invalid CSS variables with actual hex codes
appJs = appJs.replace(
  'background-color: var(--finCreamBg);',
  'background-color: #FAF8F5;'
);

appJs = appJs.replace(
  'color: var(--finTextDark); padding: 80px 0;',
  'color: #1D1B16; padding: 80px 0;'
);

appJs = appJs.replace(
  'style="color: var(--finTextDark);"',
  'style="color: #1D1B16;"'
);

appJs = appJs.replace(
  'style="color: var(--finTextMuted);"',
  'style="color: #68645C;"'
);

fs.writeFileSync('app.js', appJs);
console.log("Fixed invalid CSS variables with hex codes.");
