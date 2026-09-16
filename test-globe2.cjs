
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle0' });
  
  const canvasDetails = await page.evaluate(() => {
    const canvas = document.querySelector('#globe-scene canvas');
    if (!canvas) return 'No canvas found';
    return {
      width: canvas.width,
      height: canvas.height,
      style: canvas.getAttribute('style'),
      zIndex: window.getComputedStyle(canvas.parentElement).zIndex,
      display: window.getComputedStyle(canvas).display
    };
  });
  console.log(canvasDetails);
  
  await browser.close();
})();
