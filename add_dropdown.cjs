const fs = require('fs');

const dropdownHTML = `<div class="nav-item-dropdown">
  <a href="javascript:void(0)" class="dropdown-trigger">Our Services <span style="font-size:10px">▼</span></a>
  <div class="dropdown-menu">
    <a href="index.html#services" style="padding-top: 16px;">Overview</a>
    <a href="#">Mutual Funds</a>
    <a href="#">Insurance</a>
    <a href="#">PMS & AIF</a>
    <a href="#">NPS & FD</a>
  </div>
</div>`;

// Update app.js
let appJs = fs.readFileSync('app.js', 'utf8');
appJs = appJs.replace(
  /<a href="#services">Our Services <span style="font-size:10px">▼<\/span><\/a>/g,
  dropdownHTML
);
fs.writeFileSync('app.js', appJs);

// Update insights.html
let insightsHtml = fs.readFileSync('insights.html', 'utf8');
insightsHtml = insightsHtml.replace(
  /<a href="index.html#services">Our Services <span style="font-size:10px">▼<\/span><\/a>/g,
  dropdownHTML
);
fs.writeFileSync('insights.html', insightsHtml);

// Update contact.html
let contactHtml = fs.readFileSync('contact.html', 'utf8');
contactHtml = contactHtml.replace(
  /<a href="index.html#services"[^>]*>Our Services <span style="font-size:10px">▼<\/span><\/a>/g,
  dropdownHTML
);
fs.writeFileSync('contact.html', contactHtml);

// Add CSS to styles.css
const cssToAdd = `
/* ── Dropdown Menu ─────────────────────────────────────── */
.nav-item-dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.nav-item-dropdown > a {
  display: inline-block;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: rgba(14, 14, 13, 0.95);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(232, 189, 86, 0.15);
  border-radius: 12px;
  padding: 8px 0;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: 9999;
  display: flex;
  flex-direction: column;
}
.nav-item-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
.dropdown-menu a {
  display: block !important;
  padding: 10px 24px !important;
  color: #D1CCC3 !important;
  font-size: 13px !important;
  text-decoration: none !important;
  transition: color 0.2s, background 0.2s !important;
  text-align: left !important;
}
.dropdown-menu a::after {
  display: none !important; /* overrides any nav active state line */
}
.dropdown-menu a:hover {
  color: #E8BD56 !important;
  background: rgba(255, 255, 255, 0.04) !important;
}
`;

let stylesCss = fs.readFileSync('styles.css', 'utf8');
if (!stylesCss.includes('nav-item-dropdown')) {
  stylesCss += '\n' + cssToAdd;
  fs.writeFileSync('styles.css', stylesCss);
}

console.log('Dropdown created successfully.');
