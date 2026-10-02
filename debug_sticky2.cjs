const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('file:///' + process.cwd().replace(/\\/g, '/') + '/index.html', { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2000));
  
  // Before scroll
  const rect1 = await page.evaluate(() => {
    const el = document.querySelector('.hdr');
    return el ? JSON.parse(JSON.stringify(el.getBoundingClientRect())) : null;
  });
  
  // Scroll down 500px
  await page.evaluate(() => { window.scrollBy(0, 500); });
  await new Promise(r => setTimeout(r, 500));
  
  // After scroll
  const rect2 = await page.evaluate(() => {
    const el = document.querySelector('.hdr');
    return el ? JSON.parse(JSON.stringify(el.getBoundingClientRect())) : null;
  });
  
  console.log('Before scroll:', rect1);
  console.log('After scroll:', rect2);
  
  await browser.close();
})();
