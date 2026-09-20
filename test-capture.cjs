const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: 'd:/MIMAG-Finance/test-screenshot.png' });
    await browser.close();
    console.log('Screenshot saved successfully to test-screenshot.png');
  } catch(e) {
    console.error(e);
  }
})();
