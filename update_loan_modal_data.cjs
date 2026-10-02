const fs = require('fs');
const path = require('path');

const dir = 'd:\\MIMAG-Finance';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldObj = /estate: {\s*title: "Estate & Legacy Planning",[\s\S]*?},/;
const newObj = `loan: {
                title: "Loan Against Mutual Funds",
                desc: "Need urgent liquidity? Secure an overdraft facility against your mutual fund holdings at attractive interest rates without selling your core assets.",
                features: [
                    "Instant liquidity without selling",
                    "Only pay interest on utilized amount",
                    "Hassle-free digital application process"
                ],
                icon: \`<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>\`
            },`;

for(const file of files) {
    const p = path.join(dir, file);
    let c = fs.readFileSync(p, 'utf8');
    
    if (oldObj.test(c)) {
        c = c.replace(oldObj, newObj);
        fs.writeFileSync(p, c);
        console.log('Updated finServices in', file);
    }
}
