const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:5173');
  await new Promise(r => setTimeout(r, 2000));

  const header = await page.$('.hdr');
  if (header) {
    await header.screenshot({ path: 'header_nav_fix.png' });
    console.log('Saved header_nav_fix.png');
  }
  await browser.close();
})();
