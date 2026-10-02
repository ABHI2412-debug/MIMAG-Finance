const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

// 1. Remove .reveal from the main container
appJs = appJs.replace(
  '<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">',
  '<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'
);

// 2. Add .reveal to the title block
appJs = appJs.replace(
  '<div class="mb-12 text-center md:text-left">',
  '<div class="mb-12 text-center md:text-left reveal">'
);

// 3. Add .reveal .reveal-delay-1 to Card 1
appJs = appJs.replace(
  '<div class="md:col-span-2 lg:col-span-1 lg:row-span-2 light-glass-card',
  '<div class="md:col-span-2 lg:col-span-1 lg:row-span-2 light-glass-card reveal reveal-delay-1'
);

// 4. Add .reveal .reveal-delay-2 to Card 2 (Tax Alpha)
appJs = appJs.replace(
  '<div class="light-glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-[#B58E58]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between cursor-default">\n                \n                <h3 class="text-2xl font-serif',
  '<div class="light-glass-card reveal reveal-delay-2 rounded-3xl p-8 relative overflow-hidden group hover:border-[#B58E58]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between cursor-default">\n                \n                <h3 class="text-2xl font-serif'
);

// 5. Add .reveal .reveal-delay-3 to Card 3 (Bespoke Fixed Income)
appJs = appJs.replace(
  '<div class="light-glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-[#B58E58]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between cursor-default">\n                \n                <div class="flex justify-between',
  '<div class="light-glass-card reveal reveal-delay-3 rounded-3xl p-8 relative overflow-hidden group hover:border-[#B58E58]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between cursor-default">\n                \n                <div class="flex justify-between'
);

// 6. Add .reveal .reveal-delay-4 to Card 4 (Institutional Governance)
appJs = appJs.replace(
  '<div class="md:col-span-2 light-glass-card',
  '<div class="md:col-span-2 light-glass-card reveal reveal-delay-4'
);

fs.writeFileSync('app.js', appJs);
console.log("Added reveal animations to Family Office section.");
