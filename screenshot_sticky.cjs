const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('file:///' + process.cwd().replace(/\\/g, '/') + '/index.html', { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2500));
  // Scroll down 500px
  await page.evaluate(() => { window.scrollBy(0, 500); });
  // Wait for scroll and JS class toggles
  await new Promise(r => setTimeout(r, 500));
  
  await page.screenshot({ path: 'test-sticky.png' });
  await browser.close();
  console.log('Screenshot saved to test-sticky.png');
})();
