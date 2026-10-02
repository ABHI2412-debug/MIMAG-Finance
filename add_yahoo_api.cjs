const fs = require('fs');
const path = require('path');

const filePath = path.join('d:/MIMAG-Finance', 'mutual-funds.html');
let content = fs.readFileSync(filePath, 'utf8');

// Replace card 1 (SBI)
content = content.replace(
  /<p class="font-bold text-gray-900 text-\[14px\]">12\.34%<\/p>\s*<p class="text-gray-400 text-\[9px\] uppercase font-semibold tracking-wide">1Y Returns \(p\.a\.\)<\/p>/,
  '<p class="font-bold text-gray-900 text-[14px]" id="nav-0P00005WZY.BO">Fetching...</p>\n                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide flex items-center gap-1">Live NAV <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span></p>'
).replace(
  /<p class="font-bold text-gray-900 text-\[14px\]">&rupee; 56,842 Cr<\/p>\s*<p class="text-gray-400 text-\[9px\] uppercase font-semibold tracking-wide">Fund Size<\/p>/,
  '<p class="font-bold text-gray-900 text-[14px]" id="change-0P00005WZY.BO">--</p>\n                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Day Change</p>'
);

// Replace card 2 (Axis)
content = content.replace(
  /<p class="font-bold text-gray-900 text-\[14px\]">16\.78%<\/p>\s*<p class="text-gray-400 text-\[9px\] uppercase font-semibold tracking-wide">1Y Returns \(p\.a\.\)<\/p>/,
  '<p class="font-bold text-gray-900 text-[14px]" id="nav-0P0000XW8F.BO">Fetching...</p>\n                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide flex items-center gap-1">Live NAV <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span></p>'
).replace(
  /<p class="font-bold text-gray-900 text-\[14px\]">&rupee; 42,317 Cr<\/p>\s*<p class="text-gray-400 text-\[9px\] uppercase font-semibold tracking-wide">Fund Size<\/p>/,
  '<p class="font-bold text-gray-900 text-[14px]" id="change-0P0000XW8F.BO">--</p>\n                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Day Change</p>'
);

// Replace card 3 (HDFC)
content = content.replace(
  /<p class="font-bold text-gray-900 text-\[14px\]">14\.21%<\/p>\s*<p class="text-gray-400 text-\[9px\] uppercase font-semibold tracking-wide">1Y Returns \(p\.a\.\)<\/p>/,
  '<p class="font-bold text-gray-900 text-[14px]" id="nav-0P00005V15.BO">Fetching...</p>\n                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide flex items-center gap-1">Live NAV <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span></p>'
).replace(
  /<p class="font-bold text-gray-900 text-\[14px\]">&rupee; 68,901 Cr<\/p>\s*<p class="text-gray-400 text-\[9px\] uppercase font-semibold tracking-wide">Fund Size<\/p>/,
  '<p class="font-bold text-gray-900 text-[14px]" id="change-0P00005V15.BO">--</p>\n                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Day Change</p>'
);

// Replace card 4 (ICICI)
content = content.replace(
  /<p class="font-bold text-gray-900 text-\[14px\]">7\.12%<\/p>\s*<p class="text-gray-400 text-\[9px\] uppercase font-semibold tracking-wide">1Y Returns \(p\.a\.\)<\/p>/,
  '<p class="font-bold text-gray-900 text-[14px]" id="nav-0P00005WOZ.BO">Fetching...</p>\n                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide flex items-center gap-1">Live NAV <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span></p>'
).replace(
  /<p class="font-bold text-gray-900 text-\[14px\]">&rupee; 28,456 Cr<\/p>\s*<p class="text-gray-400 text-\[9px\] uppercase font-semibold tracking-wide">Fund Size<\/p>/,
  '<p class="font-bold text-gray-900 text-[14px]" id="change-0P00005WOZ.BO">--</p>\n                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Day Change</p>'
);

// Inject JS script at the end
const scriptToInject = `
<script>
  document.addEventListener('DOMContentLoaded', async () => {
    const symbols = ['0P00005WZY.BO', '0P0000XW8F.BO', '0P00005V15.BO', '0P00005WOZ.BO'];
    // Using a CORS proxy to bypass Yahoo Finance CORS restrictions
    const yahooApiUrl = \`https://corsproxy.io/?\${encodeURIComponent('https://query1.finance.yahoo.com/v8/finance/quote?symbols=' + symbols.join(','))}\`;
    
    try {
      const response = await fetch(yahooApiUrl);
      const data = await response.json();
      
      if (data && data.quoteResponse && data.quoteResponse.result) {
        data.quoteResponse.result.forEach(fund => {
          const navEl = document.getElementById('nav-' + fund.symbol);
          const changeEl = document.getElementById('change-' + fund.symbol);
          
          if (navEl && fund.regularMarketPrice !== undefined) {
            navEl.innerHTML = '&rupee; ' + fund.regularMarketPrice.toFixed(2);
          }
          if (changeEl && fund.regularMarketChangePercent !== undefined) {
            const isPos = fund.regularMarketChangePercent >= 0;
            const sign = isPos ? '+' : '';
            const color = isPos ? 'text-green-500' : 'text-red-500';
            changeEl.innerHTML = \`<span class="\${color}">\${sign}\${fund.regularMarketChangePercent.toFixed(2)}%</span>\`;
          }
        });
      }
    } catch (error) {
      console.error('Failed to fetch live rates from Yahoo Finance:', error);
      symbols.forEach(sym => {
        const navEl = document.getElementById('nav-' + sym);
        if(navEl) navEl.innerHTML = 'Unavailable';
      });
    }
  });
</script>
</body>`;

content = content.replace(/<\/body>/, scriptToInject);

fs.writeFileSync(filePath, content, 'utf8');
