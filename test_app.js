const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>', { runScripts: 'dangerously' });
global.window = dom.window;
global.document = dom.window.document;
global.matchMedia = () => ({ matches: false });
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);

require('./app.js');
