const fs = require('fs');

const megaMenuHTML = `<div class="nav-item-dropdown relative group" style="display:inline-block;">
  <a href="javascript:void(0)" class="dropdown-trigger flex items-center gap-1.5 transition-colors group-hover:text-[#E5A93C]" style="text-decoration:none;">
      Our Services
      <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
  </a>

  <!-- Invisible hover bridge -->
  <div class="absolute top-full left-0 w-full h-4"></div>

  <!-- Dropdown Panel -->
  <div class="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[650px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
      
      <!-- Glassmorphic Container -->
      <div class="bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 grid grid-cols-2 gap-10 relative overflow-hidden text-left" style="font-family: 'Inter', sans-serif;">
          
          <!-- Ambient Gold Glow -->
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#E5A93C]/10 blur-[80px] rounded-full pointer-events-none"></div>

          <!-- Column 1: Core Investments -->
          <div class="relative z-10">
              <h3 class="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase mb-5 border-b border-white/5 pb-3">Core Investments</h3>
              <ul class="space-y-2 m-0 p-0 list-none">
                  <li>
                      <a href="index.html#services" class="group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="text-decoration:none;">
                          <div class="mt-0.5 p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-[#E5A93C] group-hover/item:scale-110 group-hover/item:border-[#E5A93C]/30 transition-all">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                          </div>
                          <div>
                              <span class="block text-sm font-semibold text-gray-200 group-hover/item:text-[#E5A93C] transition-colors" style="margin-bottom:4px;">Mutual Funds</span>
                              <span class="block text-xs text-gray-400 mt-1" style="line-height:1.4;">Goal-based systematic investing & SIPs</span>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="index.html#services" class="group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="text-decoration:none;">
                          <div class="mt-0.5 p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-[#E5A93C] group-hover/item:scale-110 group-hover/item:border-[#E5A93C]/30 transition-all">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                          </div>
                          <div>
                              <span class="block text-sm font-semibold text-gray-200 group-hover/item:text-[#E5A93C] transition-colors" style="margin-bottom:4px;">PMS & AIF</span>
                              <span class="block text-xs text-gray-400 mt-1" style="line-height:1.4;">Bespoke alternative portfolios for HNIs</span>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="index.html#services" class="group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="text-decoration:none;">
                          <div class="mt-0.5 p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-[#E5A93C] group-hover/item:scale-110 group-hover/item:border-[#E5A93C]/30 transition-all">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                          <div>
                              <span class="block text-sm font-semibold text-gray-200 group-hover/item:text-[#E5A93C] transition-colors" style="margin-bottom:4px;">NPS & FD</span>
                              <span class="block text-xs text-gray-400 mt-1" style="line-height:1.4;">Retirement architecture & fixed-yield</span>
                          </div>
                      </a>
                  </li>
              </ul>
          </div>

          <!-- Column 2: Protection & Advisory -->
          <div class="relative z-10">
              <h3 class="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase mb-5 border-b border-white/5 pb-3">Protection & Advisory</h3>
              <ul class="space-y-2 m-0 p-0 list-none">
                  <li>
                      <a href="index.html#services" class="group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="text-decoration:none;">
                          <div class="mt-0.5 p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-[#E5A93C] group-hover/item:scale-110 group-hover/item:border-[#E5A93C]/30 transition-all">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                          </div>
                          <div>
                              <span class="block text-sm font-semibold text-gray-200 group-hover/item:text-[#E5A93C] transition-colors" style="margin-bottom:4px;">Life & Health Insurance</span>
                              <span class="block text-xs text-gray-400 mt-1" style="line-height:1.4;">Comprehensive risk & health coverage</span>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="index.html#services" class="group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="text-decoration:none;">
                          <div class="mt-0.5 p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-[#E5A93C] group-hover/item:scale-110 group-hover/item:border-[#E5A93C]/30 transition-all">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                          </div>
                          <div>
                              <span class="block text-sm font-semibold text-gray-200 group-hover/item:text-[#E5A93C] transition-colors" style="margin-bottom:4px;">Estate & Legacy Planning</span>
                              <span class="block text-xs text-gray-400 mt-1" style="line-height:1.4;">Family trusts & succession structuring</span>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="index.html#services" class="group/item flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors" style="text-decoration:none;">
                          <div class="mt-0.5 p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-[#E5A93C] group-hover/item:scale-110 group-hover/item:border-[#E5A93C]/30 transition-all">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                          </div>
                          <div>
                              <span class="block text-sm font-semibold text-gray-200 group-hover/item:text-[#E5A93C] transition-colors" style="margin-bottom:4px;">All Services Overview</span>
                              <span class="block text-xs text-gray-400 mt-1" style="line-height:1.4;">Explore our complete wealth framework</span>
                          </div>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</div>`;

function replaceDropdown(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const regex = /<div class="nav-item-dropdown">[\s\S]*?<\/div>\s*<\/div>/;
  if (regex.test(content)) {
    content = content.replace(regex, megaMenuHTML);
    fs.writeFileSync(filePath, content);
    console.log('Replaced dropdown in ' + filePath);
  } else {
    console.log('Could not find dropdown block in ' + filePath);
  }
}

['app.js', 'insights.html', 'contact.html'].forEach(replaceDropdown);
