const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  
  // Mobile viewport
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://127.0.0.1:5173/index.html', { waitUntil: 'networkidle0' });
  
  // Wait for loader
  await new Promise(r => setTimeout(r, 2500));
  
  // Try to find `#services` or scroll to it
  await page.evaluate(() => {
     const section = document.getElementById('services');
     if (section) section.scrollIntoView();
     else window.scrollBy(0, 1000);
  });
  
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_services.png' });
  
  // open hamburger
  await page.evaluate(() => {
     const btn = document.getElementById('menuBtn');
     if(btn) btn.click();
  });
  
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'mobile_hamburger.png' });
  
  await browser.close();
})();
