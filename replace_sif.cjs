const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace in the "Core Investments" dropdown
  content = content.replace(
    /<span class="block text-sm font-semibold text-gray-200 group-hover\/item:text-\[#E5A93C\] transition-colors" style="margin-bottom:4px;">SIP<\/span>/g,
    '<span class="block text-sm font-semibold text-gray-200 group-hover/item:text-[#E5A93C] transition-colors" style="margin-bottom:4px;">SIF</span>'
  );

  // Replace in the "Track Prices" dropdown
  content = content.replace(
    /<a href="mutual-funds\.html" class="px-4 py-3 rounded-lg hover:bg-white\/5 text-sm font-semibold text-gray-200 hover:text-\[#E5A93C\] transition-colors" style="text-decoration:none;">SIP<\/a>/g,
    '<a href="mutual-funds.html" class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-semibold text-gray-200 hover:text-[#E5A93C] transition-colors" style="text-decoration:none;">SIF</a>'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
});
