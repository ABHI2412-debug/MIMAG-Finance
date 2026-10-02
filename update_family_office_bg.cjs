const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

// Change Section Background & Text Color
appJs = appJs.replace(
  '<section class="sec" style="background-color: var(--obsidian); color: var(--champagne); padding: 80px 0; font-family: \'Inter\', sans-serif;">',
  '<section class="sec" style="background-color: var(--finCreamBg); color: var(--finTextDark); padding: 80px 0; font-family: \'Inter\', sans-serif;">'
);

// Change H1 Color
appJs = appJs.replace(
  '<h1 class="text-4xl md:text-5xl font-serif font-medium text-champagne mb-4" style="color: #FAF8F5;">',
  '<h1 class="text-4xl md:text-5xl font-serif font-medium mb-4" style="color: var(--finTextDark);">'
);

// Change Description Paragraph Color
appJs = appJs.replace(
  '<p class="text-champagneMuted max-w-2xl text-sm md:text-base leading-relaxed" style="color: #D1CCC3;">',
  '<p class="max-w-2xl text-sm md:text-base leading-relaxed" style="color: var(--finTextMuted);">'
);

// Fix H3 colors in the cards to be light so they are visible on the dark glass cards
appJs = appJs.replace(
  '<h3 class="text-3xl lg:text-4xl font-serif font-medium mb-4 leading-tight group-hover:text-amber transition-colors duration-300">',
  '<h3 class="text-3xl lg:text-4xl font-serif font-medium mb-4 leading-tight group-hover:text-amber transition-colors duration-300" style="color: #FAF8F5;">'
);

appJs = appJs.replace(
  '<h3 class="text-2xl font-serif font-medium mb-6">Tax Alpha &<br>Harvesting</h3>',
  '<h3 class="text-2xl font-serif font-medium mb-6" style="color: #FAF8F5;">Tax Alpha &<br>Harvesting</h3>'
);

appJs = appJs.replace(
  '<h3 class="text-2xl font-serif font-medium">Bespoke<br>Fixed Income</h3>',
  '<h3 class="text-2xl font-serif font-medium" style="color: #FAF8F5;">Bespoke<br>Fixed Income</h3>'
);

appJs = appJs.replace(
  '<h3 class="text-2xl lg:text-3xl font-serif font-medium mb-3">Institutional Governance</h3>',
  '<h3 class="text-2xl lg:text-3xl font-serif font-medium mb-3" style="color: #FAF8F5;">Institutional Governance</h3>'
);

fs.writeFileSync('app.js', appJs);
console.log("Updated Family Office background and fixed text colors.");
