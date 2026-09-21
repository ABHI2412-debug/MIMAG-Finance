const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle0' });
    
    // Check if lifestage section is in DOM
    const lsCount = await page.$$eval('.lifestage-section', els => els.length);
    console.log('LifeStage Section Count: ' + lsCount);
    
    if (lsCount > 0) {
      const lsVisible = await page.$eval('.lifestage-section', el => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && rect.height > 0;
      });
      console.log('LifeStage Section Visible: ' + lsVisible);
      
      const lsCards = await page.$$eval('.ls-card', els => els.length);
      console.log('LifeStage Cards Count: ' + lsCards);
    }
    
    await browser.close();
  } catch (e) {
    console.error(e);
  }
})();
