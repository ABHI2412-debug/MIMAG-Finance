const fs = require('fs');
const path = require('path');

const dir = 'd:\\MIMAG-Finance';

const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

// Extract the mega menu HTML from index.html
// From `<!-- Invisible hover bridge -->` to `<!-- Column 2: Protection & Advisory -->`... actually to the end of the Dropdown Panel
const megaMenuMatch = indexHtml.match(/(<!-- Invisible hover bridge -->[\s\S]*?<!-- Dropdown Panel -->[\s\S]*?<div class="absolute top-\[calc\(100%\+12px\)\].*?>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/);

if (!megaMenuMatch) {
    console.log("Could not extract mega menu from index.html");
    process.exit(1);
}

const megaMenuHTML = megaMenuMatch[1];
console.log("Extracted mega menu HTML, length:", megaMenuHTML.length);

const filesToUpdate = ['about.html', 'mutual-funds.html'];

for (const file of filesToUpdate) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    
    // Find the placeholder block to replace
    // This is basically from `<div class="absolute top-[calc(100%+12px)]` up to `Core Investments & Advisory menus go here.` and closing divs
    const placeholderRegex = /<div class="absolute top-\[calc\(100%\+12px\)\].*?>\s*<div class="bg-\[#121212\]\/95[^>]*?>\s*<p class="text-white\/60">Core Investments & Advisory menus go here\.<\/p>\s*<\/div>\s*<\/div>/;
    
    if (placeholderRegex.test(content)) {
        // Replace it with the invisible hover bridge + megaMenu HTML
        content = content.replace(placeholderRegex, megaMenuHTML);
        fs.writeFileSync(p, content);
        console.log(`Updated ${file}`);
    } else {
        console.log(`Placeholder not found in ${file}`);
    }
}
