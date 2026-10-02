const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:5173');
  await new Promise(r => setTimeout(r, 2500));

  console.log('Clicking SIP Calculator link...');
  await page.evaluate(() => {
    const link = document.querySelector('a[href="#calc"]');
    if (link) link.click();
  });

  await new Promise(r => setTimeout(r, 1500));

  const scrollY = await page.evaluate(() => window.scrollY);
  console.log('Final ScrollY after clicking SIP Calculator:', scrollY);

  await page.screenshot({ path: 'sip_scroll_test.png' });
  await browser.close();
  console.log('Screenshot saved to sip_scroll_test.png');
})();
