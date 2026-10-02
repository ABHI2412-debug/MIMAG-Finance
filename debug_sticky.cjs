const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('file:///' + process.cwd().replace(/\\/g, '/') + '/index.html', { waitUntil: 'networkidle0' });
  
  const styles = await page.evaluate(() => {
    const getS = (el) => {
      const s = window.getComputedStyle(el);
      return {
        overflow: s.overflow,
        overflowX: s.overflowX,
        overflowY: s.overflowY,
        height: s.height,
        position: s.position,
        display: s.display
      };
    };
    return {
      html: getS(document.documentElement),
      body: getS(document.body),
      app: getS(document.getElementById('app')),
      hdr: getS(document.querySelector('.hdr')),
      main: getS(document.querySelector('main'))
    };
  });
  console.log(JSON.stringify(styles, null, 2));
  await browser.close();
})();
