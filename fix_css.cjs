const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(/\.wp-title\s*{[\s\S]*?}/, ''); // Remove bad wp-title
css = css.replace(/\.wp-eyebrow\s*{[\s\S]*?}/, ''); // Remove bad wp-eyebrow
css = css.replace(/\.wp-subtitle\s*{[\s\S]*?}/, ''); // Remove bad wp-subtitle

// Fix the mangled wp-feat-bg
css = css.replace(/\.wp-feat-bg::after\s*{[\s\S]*?display:\s*inline-flex;/, '.wp-feat-bg::after {\n  content: \'\';\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(20,18,15,0.1) 0%, rgba(20,18,15,0.95) 100%), linear-gradient(90deg, rgba(20,18,15,0.6) 0%, transparent 100%);\n}\n\n.wp-feat-content {\n  position: relative;\n  z-index: 2;\n  padding: 32px;\n}\n\n.wp-feat-content h3 {\n  font-family: \'Playfair Display\', serif;\n  font-size: 28px;\n  color: #fff;\n  font-weight: 400;\n  margin-bottom: 12px;\n}\n\n.wp-feat-content p {\n  color: rgba(255,255,255,0.7);\n  font-size: 14px;\n  line-height: 1.6;\n  margin-bottom: 24px;\n  max-width: 260px;\n}\n\n.wp-feat-btn {\n  display: inline-flex;');

// Add the fixed titles at the right place
const fixedTitles = `
.wp-eyebrow {
  color: var(--gold);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.sec .wp-title {
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  color: #fff;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 8px;
}

.wp-subtitle {
  color: rgba(255,255,255,0.5);
  font-size: 16px;
}
`;
css = css.replace('.wp-header {', fixedTitles + '\n.wp-header {');

fs.writeFileSync('styles.css', css);
