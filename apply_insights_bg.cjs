const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

// The current style string in app.js:
// style="background-color: #F8F6F0; color: #1A1A1A; padding: 80px 0; font-family: 'Inter', sans-serif;"

appJs = appJs.replace(
  'style="background-color: #F8F6F0; color: #1A1A1A; padding: 80px 0; font-family: \'Inter\', sans-serif;"',
  'style="background: radial-gradient(circle at 50% 0%, #FAF5EE 0%, #F1E9DE 50%, #E8DFCFA0 100%); color: #1A1A1A; padding: 80px 0; font-family: \'Inter\', sans-serif; position: relative;"'
);

fs.writeFileSync('app.js', appJs);
console.log("Applied luxury-radial-bg to Family Office section.");
