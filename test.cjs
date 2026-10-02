const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting puppeteer test...');
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  
  // Intercept console messages
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
  page.on('requestfailed', req => console.log('BROWSER REQUEST FAILED:', req.url()));
  
  await page.goto('http://127.0.0.1:5173/index.html', { waitUntil: 'networkidle0' });
  console.log('Page loaded');
  
  // Wait for loader to disappear
  await new Promise(r => setTimeout(r, 2500));
  
  console.log('Clicking Mutual Funds button...');
  // Click the Mutual Funds button using JS execution
  await page.evaluate(() => {
    // Find the button by checking if it has onclick attribute containing 'mf'
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('onclick') && b.getAttribute('onclick').includes('mf'));
    if (btn) {
      console.log('Button found, outerHTML:', btn.outerHTML);
      btn.click();
    } else {
      console.log('BUTTON NOT FOUND IN DOM!');
    }
  });
  
  // Wait for animation
  await new Promise(r => setTimeout(r, 1000));
  
  // Check modal visibility
  const modalData = await page.evaluate(() => {
    const modal = document.getElementById('fvServiceModal');
    if (!modal) return 'MODAL NOT FOUND';
    const computedStyle = window.getComputedStyle(modal);
    return {
      classList: Array.from(modal.classList),
      display: computedStyle.display,
      zIndex: computedStyle.zIndex,
      visibility: computedStyle.visibility
    };
  });
  
  console.log('MODAL STATE:', JSON.stringify(modalData, null, 2));
  
  await browser.close();
})();
