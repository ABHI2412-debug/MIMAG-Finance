const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('file:///' + process.cwd().replace(/\\/g, '/') + '/stocks.html', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'test-stocks.png' });
  await browser.close();
  console.log('Screenshot saved to test-stocks.png');
})();
