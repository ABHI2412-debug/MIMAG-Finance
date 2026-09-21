const fs = require('fs');
const file = fs.readFileSync('app.js', 'utf8');

// evaluate the file to generate html
// we can do this by mocking document
global.window = { matchMedia: () => ({ matches: false }), requestAnimationFrame: () => {}, addEventListener: () => {} };
let html = '';
global.document = {
  querySelector: (sel) => {
    if(sel === '#app') return { set innerHTML(v) { html = v; }, get innerHTML() { return html; } };
    return { addEventListener: () => {} };
  },
  getElementById: () => ({ addEventListener: () => {} }),
  querySelectorAll: () => ({ forEach: () => {} })
};
try {
  eval(file);
  fs.writeFileSync('output.html', html);
  console.log('HTML written to output.html. Length: ' + html.length);
} catch(e) {
  console.error(e);
}
