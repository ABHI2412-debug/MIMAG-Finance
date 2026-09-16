
const fs = require('fs');
const css = fs.readFileSync('styles.css', 'utf-8');
const overrides = \

@media(max-width:992px){
  .funds-grid { grid-template-columns: repeat(2, 1fr); }
  .process-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
  .process-grid::before { display: none; }
  .platform-layout { grid-template-columns: 1fr; }
  .plat-right { margin-top: 40px; }
  .mockup-frame { transform: none; }
  .mockup-frame:hover { transform: none; }
}

@media(max-width:600px){
  .funds-grid { grid-template-columns: 1fr; }
  .process-grid { grid-template-columns: 1fr; }
  .testi-header { flex-direction: column; align-items: flex-start; gap: 24px; }
  .trust-badge { align-items: flex-start; text-align: left; }
  .mk-assets { grid-template-columns: 1fr; }
}
\;

fs.writeFileSync('styles.css', css + overrides);
