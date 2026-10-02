const fs = require('fs');
const path = require('path');

const dir = 'd:\\MIMAG-Finance';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f === 'app.js');

const newIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>`;

for(const file of files) {
    const p = path.join(dir, file);
    let c = fs.readFileSync(p, 'utf8');
    
    let updated = false;
    
    // Check data-service="estate" 
    const regex = /<button data-service="estate"[\s\S]*?Estate & Legacy Planning[\s\S]*?Family trusts & succession structuring[\s\S]*?<\/button>/g;
    
    if (regex.test(c)) {
        c = c.replace(
            regex,
            `<button data-service="loan" class="w-full text-left group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="background:none; border:none; cursor:pointer;">
                          <div class="mt-0.5 p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-[#E5A93C] group-hover/item:scale-110 group-hover/item:border-[#E5A93C]/30 transition-all">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">${newIcon}</svg>
                          </div>
                          <div>
                              <span class="block text-sm font-semibold text-gray-200 group-hover/item:text-[#E5A93C] transition-colors" style="margin-bottom:4px;">Loan Against Mutual Funds</span>
                              <span class="block text-xs text-gray-400 mt-1" style="line-height:1.4;">Unlock the value of your investments</span>
                          </div>
                      </button>`
        );
        updated = true;
    }
    
    // Also there's one with title: "Estate & Legacy Planning" in insights.html or somewhere? Wait, let's also just check for `Estate & Legacy Planning` broadly.
    // Wait, let's just write `c` if updated
    if (updated) {
        fs.writeFileSync(p, c);
        console.log('Updated data-service in', file);
    }
}
