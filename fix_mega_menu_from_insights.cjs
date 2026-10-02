const fs = require('fs');
const path = require('path');

const dir = 'd:\\MIMAG-Finance';

const insightsHtml = fs.readFileSync(path.join(dir, 'insights.html'), 'utf8');

const megaMenuMatch = insightsHtml.match(/(<!-- Invisible hover bridge -->[\s\S]*?<!-- Dropdown Panel -->[\s\S]*?<div class="absolute top-\[calc\(100%\+12px\)\].*?>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/);

if (!megaMenuMatch) {
    console.log("Could not extract mega menu from insights.html");
    process.exit(1);
}

const megaMenuHTML = megaMenuMatch[1];
console.log("Extracted mega menu HTML, length:", megaMenuHTML.length);

const filesToUpdate = ['about.html', 'mutual-funds.html'];

for (const file of filesToUpdate) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    
    // Find the placeholder block to replace
    const placeholderRegex = /<div class="absolute top-\[calc\(100%\+12px\)\].*?>\s*<div class="bg-\[#121212\]\/95[^>]*?>\s*<p class="text-white\/60">Core Investments & Advisory menus go here\.<\/p>\s*<\/div>\s*<\/div>/;
    
    if (placeholderRegex.test(content)) {
        content = content.replace(placeholderRegex, megaMenuHTML);
        fs.writeFileSync(p, content);
        console.log(`Updated ${file}`);
    } else {
        console.log(`Placeholder not found in ${file}`);
    }
}
