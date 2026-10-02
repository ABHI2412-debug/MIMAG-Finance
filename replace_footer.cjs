const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');
let insightsHtml = fs.readFileSync('insights.html', 'utf8');

// Extract footer from app.js
const footerStart = appJs.indexOf('<footer class="ftr">');
const footerEnd = appJs.indexOf('</footer>', footerStart) + '</footer>'.length;
const homepageFooter = appJs.substring(footerStart, footerEnd);

// Find footer in insights.html
const insightsFooterStart = insightsHtml.indexOf('<footer class="bg-[#0E0E0D]');
const insightsFooterEnd = insightsHtml.indexOf('</footer>', insightsFooterStart) + '</footer>'.length;

if (footerStart !== -1 && insightsFooterStart !== -1) {
  // Replace
  const newInsightsHtml = insightsHtml.substring(0, insightsFooterStart) + homepageFooter + insightsHtml.substring(insightsFooterEnd);
  fs.writeFileSync('insights.html', newInsightsHtml);
  console.log('Successfully replaced insights footer with homepage footer.');
} else {
  console.log('Error: Could not find one of the footers.');
}
