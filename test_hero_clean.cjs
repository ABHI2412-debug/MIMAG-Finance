const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:5173');
  await new Promise(r => setTimeout(r, 2500));

  await page.screenshot({ path: 'hero_clean_fixed.png' });
  await browser.close();
  console.log('Saved hero_clean_fixed.png');
})();
