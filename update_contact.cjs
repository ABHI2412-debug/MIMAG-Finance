const fs = require('fs');
let css = fs.readFileSync('contact.css', 'utf8');

// 1. Darken the background a little by adding a semi-transparent black gradient to .hero-bg
css = css.replace(
  /background:\s*url\("\.\/images\/mimag-contact-hero-4k\.jpg"\)\s*center center \/ cover no-repeat;/,
  'background:\n    linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.18)),\n    url("./images/mimag-contact-hero-4k.jpg")\n    center center / cover no-repeat;'
);

// 2. Make contact items more visible (glass cards)
css = css.replace(
  /\.contact-item \{\s*min-height: 104px;\s*display: grid;\s*grid-template-columns: 58px 1fr 30px;\s*align-items: center;\s*border-top: 1px solid var\(--line\);\s*\}/,
  `.contact-item {
  min-height: 94px;
  display: grid;
  grid-template-columns: 58px 1fr 30px;
  align-items: center;
  background: var(--white-glass);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(168, 120, 66, 0.2);
  border-radius: 14px;
  padding: 16px 20px 16px 16px;
  margin-bottom: 16px;
  box-shadow: 0 12px 35px rgba(50, 35, 20, 0.08);
}`
);

// Remove the border-bottom from the last contact-item since they are now distinct cards
css = css.replace(
  /\.contact-item:last-of-type \{ border-bottom: 1px solid var\(--line\); \}/,
  `.contact-item:last-of-type { margin-bottom: 0; }`
);

// 3. Make socials more visible
css = css.replace(
  /\.socials \{ margin-top: 45px; \}/,
  `.socials { 
  margin-top: 16px;
  background: var(--white-glass);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(168, 120, 66, 0.2);
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 12px 35px rgba(50, 35, 20, 0.08);
}`
);

fs.writeFileSync('contact.css', css);
console.log('Updated contact.css to make components more visible and darken background.');
