const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// 1. Replace body font stack and update typography settings
css = css.replace(
  /font-family: 'Outfit', 'Inter', system-ui, -apple-system, sans-serif;\r?\n\s*font-weight: 400;/,
  "font-family: 'Open Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;\n  font-weight: 300;\n  font-style: normal;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  font-feature-settings: 'ss01', 'cv11';"
);

// 2. Replace all remaining 'Outfit' references (sans-serif sections)
css = css.replace(/font-family: 'Outfit', sans-serif/g, "font-family: 'Open Sans', 'Inter', -apple-system, sans-serif");
css = css.replace(/font-family: 'Outfit'/g, "font-family: 'Open Sans', 'Inter', -apple-system, sans-serif");

// 3. Replace all 'Playfair Display' references with Instrument Serif
css = css.replace(/font-family: 'Playfair Display', Georgia, serif/g, "font-family: 'Instrument Serif', 'Times New Roman', serif");
css = css.replace(/font-family: 'Playfair Display', serif/g, "font-family: 'Instrument Serif', 'Times New Roman', serif");
css = css.replace(/font-family: 'Playfair Display'/g, "font-family: 'Instrument Serif', 'Times New Roman', serif");

// 4. Replace bare Georgia serif (used in testimonial quotes, step numbers, decorative text)
//    but NOT 'Great Vibes' (cursive script accents — keep those)
css = css.replace(/font-family: Georgia, serif/g, "font-family: 'Instrument Serif', 'Times New Roman', serif");

// 5. Replace bare 'Inter' standalone stack (e.g. logo wordmark areas)
css = css.replace(/font-family: 'Inter', sans-serif/g, "font-family: 'Inter', system-ui, sans-serif");

// 6. Add .font-serif utility class if not already present
if (!css.includes('.font-serif {')) {
  css += `\n/* Serif utility class */\n.font-serif {\n  font-family: 'Instrument Serif', 'Times New Roman', serif;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n}\n`;
}

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Done! Font families updated in styles.css');
