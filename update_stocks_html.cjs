const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'stocks.html');
let html = fs.readFileSync(filePath, 'utf8');

const idMapping = [
  // Cards
  { search: /<div class="text-xl font-bold text-gray-900">24,821.10<\/div>/g, replace: '<div id="val-nifty50" class="text-xl font-bold text-gray-900">24,821.10</div>' },
  { search: /\+236\.40 \(\+0\.96\%\)/g, replace: '<span id="chg-nifty50">+236.40 (+0.96%)</span>' },
  { search: /<div class="text-xl font-bold text-gray-900">81,159.68<\/div>/g, replace: '<div id="val-sensex" class="text-xl font-bold text-gray-900">81,159.68</div>' },
  { search: /\+742\.48 \(\+0\.92\%\)/g, replace: '<span id="chg-sensex">+742.48 (+0.92%)</span>' },
  { search: /<div class="text-xl font-bold text-gray-900">54,712.35<\/div>/g, replace: '<div id="val-niftybank" class="text-xl font-bold text-gray-900">54,712.35</div>' },
  { search: /\+512\.20 \(\+0\.94\%\)/g, replace: '<span id="chg-niftybank">+512.20 (+0.94%)</span>' },
  { search: /<div class="text-xl font-bold text-gray-900">25,436.72<\/div>/g, replace: '<div id="val-nifty100" class="text-xl font-bold text-gray-900">25,436.72</div>' },
  { search: /\+241\.30 \(\+0\.96\%\)/g, replace: '<span id="chg-nifty100">+241.30 (+0.96%)</span>' },

  // Table
  { search: /<td class="py-3 text-xs font-medium text-gray-900 text-right">₹ 1,362.80<\/td>/g, replace: '<td class="py-3 text-xs font-medium text-gray-900 text-right" id="row-val-RELIANCE">₹ 1,362.80</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+18.40<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-chg-RELIANCE">+18.40</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+1.37\%<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-pct-RELIANCE">+1.37%</td>' },

  { search: /<td class="py-3 text-xs font-medium text-gray-900 text-right">₹ 3,467.20<\/td>/g, replace: '<td class="py-3 text-xs font-medium text-gray-900 text-right" id="row-val-TCS">₹ 3,467.20</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+32.60<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-chg-TCS">+32.60</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+0.95\%<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-pct-TCS">+0.95%</td>' },

  { search: /<td class="py-3 text-xs font-medium text-gray-900 text-right">₹ 1,672.35<\/td>/g, replace: '<td class="py-3 text-xs font-medium text-gray-900 text-right" id="row-val-HDFCBANK">₹ 1,672.35</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+14.25<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-chg-HDFCBANK">+14.25</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+0.86\%<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-pct-HDFCBANK">+0.86%</td>' },

  { search: /<td class="py-3 text-xs font-medium text-gray-900 text-right">₹ 1,247.60<\/td>/g, replace: '<td class="py-3 text-xs font-medium text-gray-900 text-right" id="row-val-ICICIBANK">₹ 1,247.60</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+10.80<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-chg-ICICIBANK">+10.80</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+0.87\%<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-pct-ICICIBANK">+0.87%</td>' },

  { search: /<td class="py-3 text-xs font-medium text-gray-900 text-right">₹ 1,452.30<\/td>/g, replace: '<td class="py-3 text-xs font-medium text-gray-900 text-right" id="row-val-INFY">₹ 1,452.30</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+11.75<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-chg-INFY">+11.75</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+0.82\%<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-pct-INFY">+0.82%</td>' },

  { search: /<td class="py-3 text-xs font-medium text-gray-900 text-right">₹ 812.45<\/td>/g, replace: '<td class="py-3 text-xs font-medium text-gray-900 text-right" id="row-val-SBIN">₹ 812.45</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#EF4444\] text-right">-3.20<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#EF4444] text-right" id="row-chg-SBIN">-3.20</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#EF4444\] text-right">-0.39\%<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#EF4444] text-right" id="row-pct-SBIN">-0.39%</td>' },

  { search: /<td class="py-3 text-xs font-medium text-gray-900 text-right">₹ 1,683.70<\/td>/g, replace: '<td class="py-3 text-xs font-medium text-gray-900 text-right" id="row-val-BHARTIARTL">₹ 1,683.70</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+12.90<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-chg-BHARTIARTL">+12.90</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+0.77\%<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-pct-BHARTIARTL">+0.77%</td>' },

  { search: /<td class="py-3 text-xs font-medium text-gray-900 text-right">₹ 423.15<\/td>/g, replace: '<td class="py-3 text-xs font-medium text-gray-900 text-right" id="row-val-ITC">₹ 423.15</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+4.60<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-chg-ITC">+4.60</td>' },
  { search: /<td class="py-3 text-xs font-semibold text-\[\#10B981\] text-right">\+1.10\%<\/td>/g, replace: '<td class="py-3 text-xs font-semibold text-[#10B981] text-right" id="row-pct-ITC">+1.10%</td>' },

  // Selected Stock
  { search: /<div class="text-2xl font-bold text-gray-900">₹ 1,362.80<\/div>/g, replace: '<div id="sel-val" class="text-2xl font-bold text-gray-900">₹ 1,362.80</div>' },
  { search: /\+18\.40 \(\+1\.37\%\)/g, replace: '<span id="sel-chg">+18.40 (+1.37%)</span>' },
  { search: /As of 24 Sep 2025, 3:30 PM/g, replace: '<span id="sel-time">As of 24 Sep 2025, 3:30 PM</span>' },

];

for (const p of idMapping) {
  html = html.replace(p.search, p.replace);
}

const clientScript = `
  <script>
    const fmt2 = v => v == null ? '–' : (+v).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const fmtPct = p => p == null ? '–' : \`\${(+p) >= 0 ? '+' : ''}\${(+p).toFixed(2)}%\`;
    const fmtChg = (p, prev) => {
       if(!p || !prev) return '–';
       const diff = p - prev;
       return \`\${diff >= 0 ? '+' : ''}\${diff.toFixed(2)}\`;
    };

    async function fetchLiveStocks() {
      try {
        const res = await fetch('/api/market');
        const data = await res.json();
        
        const updates = [
          { key: 'nifty50', elVal: 'val-nifty50', elChg: 'chg-nifty50' },
          { key: 'sensex', elVal: 'val-sensex', elChg: 'chg-sensex' },
          { key: 'niftybank', elVal: 'val-niftybank', elChg: 'chg-niftybank' },
          { key: 'nifty100', elVal: 'val-nifty100', elChg: 'chg-nifty100' },
        ];
        
        updates.forEach(u => {
           if(data[u.key]) {
              document.getElementById(u.elVal).innerText = fmt2(data[u.key].price);
              const prev = data[u.key].price / (1 + (data[u.key].chgPct / 100));
              document.getElementById(u.elChg).innerText = \`\${fmtChg(data[u.key].price, prev)} (\${fmtPct(data[u.key].chgPct)})\`;
              
              const chgColor = data[u.key].chgPct >= 0 ? '#10B981' : '#EF4444';
              document.getElementById(u.elChg).parentElement.style.color = chgColor;
           }
        });

        const stocks = ['RELIANCE', 'TCS', 'HDFCBANK', 'ICICIBANK', 'INFY', 'SBIN', 'BHARTIARTL', 'ITC'];
        stocks.forEach(s => {
           if(data[s]) {
              document.getElementById('row-val-' + s).innerText = '₹ ' + fmt2(data[s].price);
              const prev = data[s].price / (1 + (data[s].chgPct / 100));
              document.getElementById('row-chg-' + s).innerText = fmtChg(data[s].price, prev);
              document.getElementById('row-pct-' + s).innerText = fmtPct(data[s].chgPct);

              const color = data[s].chgPct >= 0 ? 'text-[#10B981]' : 'text-[#EF4444]';
              document.getElementById('row-chg-' + s).className = \`py-3 text-xs font-semibold text-right \${color}\`;
              document.getElementById('row-pct-' + s).className = \`py-3 text-xs font-semibold text-right \${color}\`;
           }
        });

        if(data['RELIANCE']) {
           document.getElementById('sel-val').innerText = '₹ ' + fmt2(data['RELIANCE'].price);
           const prev = data['RELIANCE'].price / (1 + (data['RELIANCE'].chgPct / 100));
           document.getElementById('sel-chg').innerText = \`\${fmtChg(data['RELIANCE'].price, prev)} (\${fmtPct(data['RELIANCE'].chgPct)})\`;
           document.getElementById('sel-chg').parentElement.style.color = data['RELIANCE'].chgPct >= 0 ? '#10B981' : '#EF4444';
           document.getElementById('sel-time').innerText = 'As of ' + new Date().toLocaleString('en-IN');
        }

      } catch(e) {
        console.error('Error fetching live stocks', e);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
       fetchLiveStocks();
       setInterval(fetchLiveStocks, 60000);
    });
  </script>
</body>
`;

html = html.replace('</body>', clientScript);

fs.writeFileSync(filePath, html, 'utf8');
console.log('stocks.html updated');
