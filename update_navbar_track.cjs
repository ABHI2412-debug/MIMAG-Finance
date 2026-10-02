const fs = require('fs');
const path = require('path');

const files = ['app.js', 'stocks.html', 'insights.html', 'contact.html'];
const targetDir = 'd:/MIMAG-Finance';

const searchStr = '<a href="stocks.html">Stocks</a>';
const replacementStr = `<div class="nav-item-dropdown relative group" style="display:inline-block;">
            <a href="#" class="dropdown-trigger flex items-center gap-1.5 transition-colors group-hover:text-[#E5A93C]" style="display: inline-flex !important; align-items: center !important; gap: 6px !important; white-space: nowrap !important; text-decoration: none;">
              <span>Track Prices</span>
              <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" style="display: inline-block !important; flex-shrink: 0 !important; width: 12px; height: 12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div class="absolute top-full left-0 w-full h-4"></div>
            <div class="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[200px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
              <div class="bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col gap-1 text-left" style="font-family: 'Inter', sans-serif;">
                <a href="mutual-funds.html" class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-semibold text-gray-200 hover:text-[#E5A93C] transition-colors" style="text-decoration:none;">Mutual Funds</a>
                <a href="stocks.html" class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-semibold text-gray-200 hover:text-[#E5A93C] transition-colors" style="text-decoration:none;">Stocks</a>
              </div>
            </div>
          </div>`;

files.forEach(f => {
  const p = path.join(targetDir, f);
  let content = fs.readFileSync(p, 'utf-8');
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replacementStr);
    fs.writeFileSync(p, content, 'utf-8');
    console.log('Updated ' + f);
  } else {
    console.log('Could not find search string in ' + f);
  }
});
