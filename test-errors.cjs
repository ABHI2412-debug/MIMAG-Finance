const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('CONSOLE LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err));
  await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle0' });
  const appHtml = await page.evaluate(() => document.querySelector('#app') ? document.querySelector('#app').innerHTML.substring(0, 200) : 'NO APP DIV');
  console.log('App HTML snippet:', appHtml);
  await browser.close();
})();
