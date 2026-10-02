const fs = require('fs');

const cssToAdd = `
/* ── Mobile Optimizations (<= 768px) ───────────────────────────────── */
@media (max-width: 768px) {
  /* Header */
  .hdr-right .btn {
    display: none !important; /* Hide CTA on mobile to save space */
  }
  .hamburger {
    margin-left: auto;
  }
  
  /* Hero Section */
  .hero-content h1 {
    font-size: clamp(36px, 10vw, 52px) !important;
  }
  .hero-btns {
    flex-direction: column;
    width: 100%;
  }
  .hero-btns .btn {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-bottom: 12px;
  }
  .hero-strip {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 16px !important;
  }
  .hstrip-item {
    padding-right: 0 !important;
    border-right: none !important;
    width: 100%;
  }
  .hero-metrics {
    flex-direction: column !important;
    gap: 24px !important;
  }
  
  /* Services Section */
  .svc-grid {
    grid-template-columns: 1fr !important;
  }
  
  /* Calculator Section */
  .calc-layout {
    grid-template-columns: 1fr !important;
  }
  .calc-inputs {
    border-right: none !important;
    border-bottom: 1px solid #1a1a1a;
    padding-right: 0 !important;
    padding-bottom: 32px !important;
    margin-bottom: 32px !important;
  }
  .calc-chart {
    padding-left: 0 !important;
  }
  .calc-slider {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 12px;
  }
  .calc-slider input[type=range] {
    width: 100% !important;
  }

  /* Family Office / Split Section */
  .split-sec {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }
  .stats-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  /* Footer */
  .ftr-cols {
    flex-direction: column !important;
    gap: 32px !important;
  }
  .ftr-col {
    padding-left: 0 !important;
    border-left: none !important;
    text-align: left !important;
  }
  .nl-form {
    flex-direction: column;
  }
  .nl-form input {
    border-radius: 4px !important;
    border-right: 1px solid #333 !important;
    margin-bottom: 8px;
  }
  .nl-form button {
    border-radius: 4px !important;
    width: 100% !important;
  }
  
  /* General Spacing */
  .sec {
    padding: 60px 0 !important;
  }
  .sec-head {
    gap: 16px !important;
    margin-bottom: 32px !important;
  }
}
`;

let stylesCss = fs.readFileSync('styles.css', 'utf8');
if (!stylesCss.includes('Mobile Optimizations (<= 768px)')) {
  stylesCss += '\n' + cssToAdd;
  fs.writeFileSync('styles.css', stylesCss);
  console.log('Mobile optimizations added successfully.');
} else {
  console.log('Mobile optimizations already exist.');
}
