const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:5173');
  await new Promise(r => setTimeout(r, 2500));

  console.log('Clicking Insights link...');
  const startTime = Date.now();
  
  await page.evaluate(() => {
    const link = document.querySelector('a[href="insights.html"]');
    if (link) link.click();
  });

  // Check if pageLoader is visible right after click
  const isLoaderVisible = await page.evaluate(() => {
    const loader = document.getElementById('pageLoader');
    return loader && !loader.classList.contains('hidden');
  });
  console.log('Is page loader visible after click:', isLoaderVisible);

  // Wait 2.2 seconds
  await new Promise(r => setTimeout(r, 2200));

  const elapsedTime = Date.now() - startTime;
  console.log(`Elapsed time: ${elapsedTime}ms`);

  const currentUrl = page.url();
  console.log('Current URL after transition:', currentUrl);

  await page.screenshot({ path: 'insights_loader_test.png' });
  await browser.close();
  console.log('Test completed successfully');
})();
