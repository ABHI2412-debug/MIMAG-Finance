const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>', { runScripts: 'dangerously' });
global.window = dom.window;
global.document = dom.window.document;
global.matchMedia = () => ({ matches: false });
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);

import('./app.js').then((m) => {
  console.log('App loaded successfully');
}).catch(e => {
  console.error('Error loading app:', e);
});
