import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));

  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:5173');
  await new Promise(r => setTimeout(r, 2000));

  // Scroll down to trigger IntersectionObserver
  await page.evaluate(async () => {
    window.scrollBy(0, 1500);
  });
  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: 'screenshot_scrolled.png' });
  await browser.close();
  console.log('Screenshot saved to screenshot_scrolled.png');
})();
