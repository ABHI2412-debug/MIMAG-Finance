const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(
  /\.approach-sec \{[\s\S]*?\}/,
  `.approach-sec {
  width: 100%;
  min-height: calc(100vw * 9 / 16);
  color: #fff;
  position: relative;
  padding: 0 !important;
  margin: 0 !important;
  background-color: #111;
}`
);

css = css.replace(
  /\.approach-sec::before \{[\s\S]*?\}/,
  `.mountain-bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-image: url('./assets/journey-mountain.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 0;
  pointer-events: none;
}
.mountain-bg-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(17,17,17,1) 0%, rgba(17,17,17,0.85) 45%, rgba(17,17,17,0) 100%);
  z-index: 1;
}`
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Successfully updated styles.css for mountain wrapper');
