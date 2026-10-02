const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto('http://127.0.0.1:5173/index.html', { waitUntil: 'networkidle0' });
  
  // wait for loader
  await new Promise(r => setTimeout(r, 2500));
  
  // scroll down
  await page.evaluate(() => window.scrollBy(0, 500));
  
  await new Promise(r => setTimeout(r, 500));
  
  await page.screenshot({ path: 'header_scrolled.png' });
  
  // open mega menu
  await page.evaluate(() => {
    const el = document.querySelector('.dropdown-trigger');
    if (el) {
       el.dispatchEvent(new MouseEvent('mouseenter'));
       const parent = el.closest('.group');
       if (parent) parent.classList.add('hover'); // force hover
    }
  });
  
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'header_megamenu.png' });
  
  await browser.close();
})();
