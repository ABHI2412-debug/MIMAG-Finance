

const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Normalize CRLF
css = css.replace(/\r\n/g, '\n');

// 1. Update .wp-card main container styling
css = css.replace(
  /\.wp-card \{[\s\S]*?\}/,
  `.wp-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 16px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}`
);

// 2. Update .wp-featured border
css = css.replace(
  /border: 1px solid rgba\(255, 255, 255, 0\.05\);/,
  'border: 1px solid rgba(255, 255, 255, 0.14);'
);

// 3. Update .wp-card p color (in both occurrences)
css = css.replace(
  /\.wp-card p \{[\s\S]*?\}/g,
  `.wp-card p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}`
);

// 4. Update .wp-card-tag styling
css = css.replace(
  /\.wp-card-tag \{[\s\S]*?\}/g,
  `.wp-card-tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-style: normal;
  transition: all 0.4s ease;
}`
);

// 5. Update .wp-icon background and add subtle border
css = css.replace(
  /\.wp-icon \{[\s\S]*?\}/g,
  `.wp-icon {
  color: var(--gold);
  background: rgba(247, 195, 83, 0.16);
  border: 1px solid rgba(247, 195, 83, 0.25);
  padding: 10px;
  border-radius: 12px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease, background 0.4s ease;
}`
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Successfully enhanced visibility of wp-card components!');
