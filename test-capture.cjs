
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'C:/Users/ABHI/.gemini/antigravity-ide/brain/6489359c-8a30-456d-8669-6bd1e9242c90/puppeteer_test.png' });
  
  const canvasDetails = await page.evaluate(() => {
    const canvas = document.querySelector('#globe-scene canvas');
    if (!canvas) return 'No canvas found';
    return {
      width: canvas.width,
      height: canvas.height,
      clientWidth: canvas.clientWidth,
      clientHeight: canvas.clientHeight,
      display: window.getComputedStyle(canvas).display,
      zIndex: window.getComputedStyle(canvas).zIndex,
      opacity: window.getComputedStyle(canvas).opacity
    };
  });
  console.log('Canvas details:', canvasDetails);
  
  await browser.close();
})();
