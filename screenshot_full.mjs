import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:5173');
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'screenshot_full.png', fullPage: true });
  await browser.close();
  console.log('Full screenshot saved to screenshot_full.png');
})();
