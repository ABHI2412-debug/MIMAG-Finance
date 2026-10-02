const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Simulate Android smartphone viewport (Pixel 7 / Galaxy S22)
  await page.setViewport({ width: 393, height: 851, isMobile: true, hasTouch: true });
  await page.goto('http://127.0.0.1:5173');
  await new Promise(r => setTimeout(r, 2500));

  await page.screenshot({ path: 'android_hero_fixed.png' });
  console.log('Saved android_hero_fixed.png');

  // Open mobile menu
  const menuBtn = await page.$('#menuBtn');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'android_menu_fixed.png' });
    console.log('Saved android_menu_fixed.png');
  }

  await browser.close();
})();
