const fs = require('fs');
let html = fs.readFileSync('insights.html', 'utf8');

// Fix typo
html = html.replace('</header>eader>', '</header>');

// Move ticker inside main
const tickerRegex = /(<div class="relative z-20 -mb-10 pt-4 px-4 sm:px-6 lg:px-8">[\s\S]*?)(<main class="luxury-radial-bg pt-20 pb-24 border-t border-\[#3A3529\]\/20 text-\[#2B2823\]\">)/;
html = html.replace(tickerRegex, '$2\n  $1');

fs.writeFileSync('insights.html', html);
console.log('Fixed insights.html');
