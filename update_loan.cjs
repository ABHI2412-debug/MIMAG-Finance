const fs = require('fs');
const path = require('path');

const dir = 'd:\\MIMAG-Finance';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f === 'app.js');

const oldBlock1 = `<button onclick="window.openServiceModal('estate')" class="w-full text-left group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="background:none; border:none; cursor:pointer;">`;
const newBlock1 = `<button onclick="window.openServiceModal('loan')" class="w-full text-left group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="background:none; border:none; cursor:pointer;">`;

const oldIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>`;
const newIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>`;

for(const file of files) {
    const p = path.join(dir, file);
    let c = fs.readFileSync(p, 'utf8');
    
    // First let's find the estate block
    if (c.includes("Estate & Legacy Planning")) {
        // We do string replacement. Since there are multiple lines, a regex is safer.
        c = c.replace(
            /<button onclick="window\.openServiceModal\('estate'\)"[\s\S]*?Estate & Legacy Planning[\s\S]*?Family trusts & succession structuring[\s\S]*?<\/button>/,
            `<button onclick="window.openServiceModal('loan')" class="w-full text-left group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="background:none; border:none; cursor:pointer;">
                          <div class="mt-0.5 p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-[#E5A93C] group-hover/item:scale-110 group-hover/item:border-[#E5A93C]/30 transition-all">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">${newIcon}</svg>
                          </div>
                          <div>
                              <span class="block text-sm font-semibold text-gray-200 group-hover/item:text-[#E5A93C] transition-colors" style="margin-bottom:4px;">Loan Against Mutual Funds</span>
                              <span class="block text-xs text-gray-400 mt-1" style="line-height:1.4;">Unlock the value of your investments</span>
                          </div>
                      </button>`
        );
        fs.writeFileSync(p, c);
        console.log('Updated mega menu in', file);
    }
}

let appJs = fs.readFileSync(path.join(dir, 'app.js'), 'utf8');
if (appJs.includes("'estate': {")) {
    const oldServiceObj = /'estate': {[\s\S]*?},/;
    const newServiceObj = `'loan': {
        title: 'Loan Against Mutual Funds',
        desc: 'Need urgent liquidity? Secure an overdraft facility against your mutual fund holdings at attractive interest rates.',
        icon: '<svg class="w-12 h-12 text-[#E5A93C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>',
        features: [
            'Instant liquidity without selling',
            'Only pay interest on utilized amount',
            'Continued portfolio growth',
            'Hassle-free digital process'
        ]
    },`;
    
    appJs = appJs.replace(oldServiceObj, newServiceObj);
    fs.writeFileSync(path.join(dir, 'app.js'), appJs);
    console.log('Updated app.js modal definition');
}

