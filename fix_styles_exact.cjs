const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const target1 = `.approach-sec {
  background-image: url('./assets/journey-mountain.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100% !important;
  width: 100%;
  aspect-ratio: 16 / 9;
  color: #fff;
  position: relative;
  padding: 0 !important;
  margin: 0 !important;
}`;

const replace1 = `.approach-sec {
  width: 100%;
  min-height: calc(100vw * 9 / 16);
  color: #fff;
  position: relative;
  padding: 0 !important;
  margin: 0 !important;
  background-color: #111;
}`;

const target2 = `.approach-sec::before {
  content: '';
  position: absolute;
  top:0; left:0; right:0; bottom:0;
  background: linear-gradient(to right, rgba(17,17,17,1) 0%, rgba(17,17,17,0.85) 45%, rgba(17,17,17,0) 100%);
  z-index: 1;
}`;

const replace2 = `.mountain-bg-wrapper {
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
}`;

// Normalize line endings for replacement
css = css.replace(/\r\n/g, '\n');

if (css.includes(target1)) {
  css = css.replace(target1, replace1);
  console.log("Replaced target1");
} else {
  console.log("Could not find target1");
}

if (css.includes(target2)) {
  css = css.replace(target2, replace2);
  console.log("Replaced target2");
} else {
  console.log("Could not find target2");
}

fs.writeFileSync('styles.css', css, 'utf8');
