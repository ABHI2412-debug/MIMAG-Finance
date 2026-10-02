const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const modalLogic = `
// --- New Modal Logic ---
window.finServices = {
    'mf': {
        title: 'Mutual Funds & SIPs',
        desc: 'Build wealth systematically with our curated mutual fund portfolios designed for your unique goals.',
        icon: '<svg class="w-12 h-12 text-[#E5A93C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',
        features: [
            'Goal-based investment planning',
            'Automated SIP management',
            'Tax-saving ELSS funds',
            'Regular portfolio rebalancing'
        ]
    },
    'pms': {
        title: 'Portfolio Management',
        desc: 'Bespoke investment strategies for high-net-worth individuals seeking superior risk-adjusted returns.',
        icon: '<svg class="w-12 h-12 text-[#E5A93C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',
        features: [
            'Direct equity exposure',
            'Customized portfolio construction',
            'Active risk management',
            'Dedicated fund manager'
        ]
    },
    'nps': {
        title: 'Retirement Planning',
        desc: 'Secure your future with tax-efficient retirement solutions including NPS and structured annuities.',
        icon: '<svg class="w-12 h-12 text-[#E5A93C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
        features: [
            'NPS account opening & management',
            'Additional Section 80CCD tax benefits',
            'Pension & annuity structuring',
            'Inflation-adjusted withdrawal strategies'
        ]
    },
    'insurance': {
        title: 'Insurance Solutions',
        desc: 'Comprehensive protection for your life, health, and assets against unforeseen circumstances.',
        icon: '<svg class="w-12 h-12 text-[#E5A93C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
        features: [
            'Term life insurance',
            'Comprehensive health covers',
            'Key-man & business insurance',
            'Claim settlement assistance'
        ]
    },
    'estate': {
        title: 'Estate Planning',
        desc: 'Ensure smooth intergenerational wealth transfer with legally sound estate planning structures.',
        icon: '<svg class="w-12 h-12 text-[#E5A93C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
        features: [
            'Will drafting & registration',
            'Private family trusts',
            'Power of attorney structuring',
            'Business succession planning'
        ]
    },
    'overview': {
        title: 'Holistic Wealth Overview',
        desc: 'A unified approach to managing all your assets, liabilities, and financial aspirations in one place.',
        icon: '<svg class="w-12 h-12 text-[#E5A93C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>',
        features: [
            'Consolidated portfolio reporting',
            'Net worth tracking',
            'Asset allocation analysis',
            'Periodic performance reviews'
        ]
    }
};

window.openServiceModal = function(serviceKey) {
    const data = window.finServices[serviceKey];
    if(!data) return;
    
    const modal = document.getElementById('fvServiceModal');
    const modalCard = document.getElementById('modalCard');
    if(!modal || !modalCard) return;

    // Inject Data
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('modalIcon').innerHTML = data.icon;
    
    const featureList = data.features.map(f => \`
        <li class="flex items-start gap-3">
            <div class="mt-0.5 text-[#E5A93C] bg-[#E5A93C]/10 p-1 rounded-full">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-gray-200 text-sm font-medium leading-relaxed">\${f}</span>
        </li>
    \`).join('');
    document.getElementById('modalFeatures').innerHTML = featureList;

    // Show Modal & Animate
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    
    // Small delay to allow display:block to apply before animating opacity/scale
    requestAnimationFrame(() => {
        setTimeout(() => {
            modalCard.style.opacity = '1';
            modalCard.style.transform = 'scale(1)';
        }, 10);
    });
};

window.closeModal = function() {
    const modal = document.getElementById('fvServiceModal');
    const modalCard = document.getElementById('modalCard');
    if(!modal || !modalCard) return;

    modalCard.style.opacity = '0';
    modalCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }, 300);
};

// Event delegation
document.addEventListener('click', function(e) {
    // Check if click was on a button with data-service or onclick that opens modal
    const btn = e.target.closest('button');
    if (btn) {
        let serviceKey = btn.getAttribute('data-service');
        if (!serviceKey && btn.getAttribute('onclick')) {
            const match = btn.getAttribute('onclick').match(/window\\.openServiceModal\\('([^']+)'\\)/);
            if (match) serviceKey = match[1];
        }
        
        if (serviceKey) {
            e.preventDefault();
            e.stopPropagation();
            window.openServiceModal(serviceKey);
        }
    }
});

document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('fvServiceModal');
    if (event.key === "Escape" && modal && !modal.classList.contains('hidden')) {
        window.closeModal();
    }
});
`;

appJs += '\n' + modalLogic;
fs.writeFileSync('app.js', appJs);
console.log('Added modal logic to app.js');
