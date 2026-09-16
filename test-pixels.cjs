
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setRequestInterception(true);
  page.on('request', req => {
    if (req.url().includes('globe.js')) {
      req.continue({ url: req.url() });
    } else {
      req.continue();
    }
  });

  await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  
  // We can just execute a script in the page to get the renderer's output!
  const hasPixels = await page.evaluate(() => {
    const canvas = document.querySelector('#globe-scene canvas');
    if (!canvas) return 'No canvas';
    // Let's just check if the canvas exists and its size
    return 'Canvas size: ' + canvas.width + 'x' + canvas.height;
  });
  
  console.log('Result:', hasPixels);
  await browser.close();
})();
