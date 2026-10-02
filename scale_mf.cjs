const fs = require('fs');
const path = require('path');

let content = fs.readFileSync(path.join('d:/MIMAG-Finance', 'mutual-funds.html'), 'utf8');

// Scale up the container
content = content.replace(/max-w-\[1200px\]/g, 'container');

// Text sizing
content = content.replace(/text-\[10px\]/g, 'text-xs');
content = content.replace(/text-\[11px\]/g, 'text-sm');
content = content.replace(/text-\[12px\]/g, 'text-base');
content = content.replace(/text-\[13px\]/g, 'text-base lg:text-lg');
content = content.replace(/text-\[15px\]/g, 'text-lg lg:text-xl');
content = content.replace(/text-\[32px\]/g, 'text-4xl');
content = content.replace(/text-\[40px\] lg:text-\[48px\]/g, 'text-5xl lg:text-6xl');
content = content.replace(/text-\[44px\] lg:text-\[54px\]/g, 'text-5xl lg:text-7xl');
content = content.replace(/text-\[6px\]/g, 'text-[8px]');
content = content.replace(/text-\[7px\]/g, 'text-[9px]');
content = content.replace(/text-\[8px\]/g, 'text-[10px]');
content = content.replace(/text-\[9px\]/g, 'text-[11px]');

// Spacing & padding
content = content.replace(/p-6/g, 'p-8');
content = content.replace(/gap-4/g, 'gap-6');
content = content.replace(/gap-5/g, 'gap-8');
content = content.replace(/gap-3/g, 'gap-4');
content = content.replace(/w-12 h-12/g, 'w-16 h-16');
content = content.replace(/w-5 h-5/g, 'w-7 h-7');
content = content.replace(/w-8 h-8/g, 'w-12 h-12');
content = content.replace(/w-3\.5 h-3\.5/g, 'w-5 h-5');
content = content.replace(/w-10 h-10/g, 'w-14 h-14');
content = content.replace(/w-3 h-3/g, 'w-4 h-4');

content = content.replace(/mb-0\.5/g, 'mb-1');
content = content.replace(/mt-0\.5/g, 'mt-1');

content = content.replace(/py-2\.5/g, 'py-3.5');
content = content.replace(/px-5/g, 'px-8');

// Element heights
content = content.replace(/h-\[180px\]/g, 'h-[260px]');
content = content.replace(/h-8/g, 'h-12');
content = content.replace(/h-6/g, 'h-10');

// Rounding
content = content.replace(/rounded-\[20px\]/g, 'rounded-3xl');
content = content.replace(/rounded-\[10px\]/g, 'rounded-xl');

// Some specific tweaks
content = content.replace(/text-3xl font-bold text-\[#0a1930\]/g, 'text-5xl font-bold text-[#0a1930]');

fs.writeFileSync(path.join('d:/MIMAG-Finance', 'mutual-funds.html'), content, 'utf8');
