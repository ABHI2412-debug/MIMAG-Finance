const fs = require('fs');

const googleFontsLink = `<link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />`;

const correctFontFamilyConfig = `fontFamily: {
            sans: ['"Open Sans"', 'sans-serif'],
            serif: ['"Instrument Serif"', 'serif'],
            display: ['"Inter"', 'sans-serif'],
          },`;

function updateHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace old tailwind fontFamily config
  content = content.replace(/fontFamily:\s*\{[\s\S]*?\},/, correctFontFamilyConfig);

  // For insights.html, replace the google fonts link
  if (filePath.includes('insights.html')) {
    content = content.replace(
      /<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">[\s\S]*?display=swap" rel="stylesheet">/,
      googleFontsLink
    );
  }

  fs.writeFileSync(filePath, content);
}

// Update index.html and insights.html
updateHtmlFile('index.html');
updateHtmlFile('insights.html');

// Also update app.js to use Open Sans instead of Inter for the family office section
let appJs = fs.readFileSync('app.js', 'utf8');
appJs = appJs.replace(/font-family:\s*'Inter',\s*sans-serif;/g, "font-family: 'Open Sans', sans-serif;");
fs.writeFileSync('app.js', appJs);

console.log('Fonts updated successfully across the site.');
