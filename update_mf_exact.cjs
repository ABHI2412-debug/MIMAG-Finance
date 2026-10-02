const fs = require('fs');
const path = require('path');

const filePath = path.join('d:/MIMAG-Finance', 'mutual-funds.html');
let content = fs.readFileSync(filePath, 'utf8');

const replacement = `  <section class="py-12" id="funds">
    <div class="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <!-- Left Column (Funds List) -->
      <div class="lg:col-span-9 space-y-4">
        
        <div class="flex justify-between items-end mb-2">
          <div>
            <p class="text-gray-400 font-bold tracking-widest text-[10px] uppercase mb-1">Featured Funds</p>
            <h2 class="text-3xl font-bold text-[#0a1930] leading-tight mb-2">Popular Mutual Funds</h2>
            <p class="text-gray-500 text-[13px]">Handpicked funds across categories to help you build a stronger financial future.</p>
          </div>
          <a href="#" class="text-[#0a1930] font-bold text-xs hover:text-blue-700 whitespace-nowrap">View All Funds &rarr;</a>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-2 py-2">
          <button class="bg-[#0a1930] text-white px-5 py-1.5 rounded-full text-[11px] font-semibold shadow-md">All</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-5 py-1.5 rounded-full text-[11px] font-medium">Large Cap</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-5 py-1.5 rounded-full text-[11px] font-medium">Mid Cap</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-5 py-1.5 rounded-full text-[11px] font-medium">Small Cap</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-5 py-1.5 rounded-full text-[11px] font-medium">ELSS</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-5 py-1.5 rounded-full text-[11px] font-medium">Debt</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-5 py-1.5 rounded-full text-[11px] font-medium">Hybrid</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-5 py-1.5 rounded-full text-[11px] font-medium">International</button>
        </div>

        <!-- Fund Cards Grid - 4 COLUMNS -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          
          <!-- Card 1 -->
          <div class="bg-white border border-gray-100 rounded-[20px] p-5 hover:shadow-lg transition-shadow shadow-sm flex flex-col justify-between h-full">
            <div>
              <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-2">
                  <img src="./images/sbin.png" alt="SBI" class="h-6 object-contain" onerror="this.src=''; this.className='hidden'" />
                  <div class="text-[#005596] font-bold text-[10px] tracking-tight leading-tight">SBI MUTUAL FUND<br/><span class="text-[7px] text-gray-400 font-medium tracking-normal">A PARTNER FOR LIFE</span></div>
                </div>
                <div class="text-right flex flex-col items-end">
                  <span class="text-green-500 text-[10px] font-bold inline-flex items-center">5 &starf;</span>
                  <p class="text-[9px] text-green-500 font-bold mt-0.5">Very High</p>
                </div>
              </div>
              
              <h3 class="font-bold text-[#0a1930] text-[15px] mb-1">SBI Bluechip Fund</h3>
              <p class="text-gray-400 text-[11px] mb-6">Large Cap &bull; Equity</p>

              <div class="grid grid-cols-2 gap-2 mb-4">
                <div>
                  <p class="font-bold text-gray-900 text-[14px]">12.34%</p>
                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">1Y Returns (p.a.)</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-gray-900 text-[14px]">&rupee; 56,842 Cr</p>
                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Fund Size</p>
                </div>
              </div>

              <!-- Mini chart -->
              <svg viewBox="0 0 100 25" class="w-full h-8 mb-4 preserve-aspect-ratio-none">
                <path d="M0,20 L10,18 L20,19 L30,15 L40,16 L50,11 L60,13 L70,8 L80,5 L90,6 L100,2" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M0,25 L0,20 L10,18 L20,19 L30,15 L40,16 L50,11 L60,13 L70,8 L80,5 L90,6 L100,2 L100,25 Z" fill="url(#gradGreen)" opacity="0.1"/>
                <defs>
                  <linearGradient id="gradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#22c55e;stop-opacity:0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div>
              <div class="flex justify-between items-center text-[10px] text-gray-400 mb-5 font-medium border-t border-gray-100 pt-3">
                <span>Min. SIP <strong class="text-gray-700">&rupee; 500</strong></span>
                <span>Expense Ratio <strong class="text-gray-700">0.64%</strong></span>
              </div>
              <div class="flex gap-2">
                <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2 rounded-lg text-[11px] font-semibold transition-colors">Invest Now</button>
                <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 py-2 rounded-lg text-[11px] font-semibold transition-colors">View Details</button>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white border border-gray-100 rounded-[20px] p-5 hover:shadow-lg transition-shadow shadow-sm flex flex-col justify-between h-full">
            <div>
              <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 100 100" class="fill-[#9a2143]">
                     <polygon points="10,90 40,20 60,20 30,90" />
                     <polygon points="50,90 80,20 100,20 70,90" opacity="0.7"/>
                  </svg>
                  <div class="text-[#9a2143] font-bold text-[10px] tracking-tight leading-none">AXIS MUTUAL FUND</div>
                </div>
                <div class="text-right flex flex-col items-end">
                  <span class="text-green-500 text-[10px] font-bold inline-flex items-center">5 &starf;</span>
                  <p class="text-[9px] text-green-500 font-bold mt-0.5">Very High</p>
                </div>
              </div>
              
              <h3 class="font-bold text-[#0a1930] text-[15px] mb-1">Axis Midcap Fund</h3>
              <p class="text-gray-400 text-[11px] mb-6">Mid Cap &bull; Equity</p>

              <div class="grid grid-cols-2 gap-2 mb-4">
                <div>
                  <p class="font-bold text-gray-900 text-[14px]">16.78%</p>
                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">1Y Returns (p.a.)</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-gray-900 text-[14px]">&rupee; 42,317 Cr</p>
                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Fund Size</p>
                </div>
              </div>

              <svg viewBox="0 0 100 25" class="w-full h-8 mb-4 preserve-aspect-ratio-none">
                <path d="M0,22 L15,18 L30,16 L45,9 L60,12 L75,7 L90,4 L100,2" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M0,25 L0,22 L15,18 L30,16 L45,9 L60,12 L75,7 L90,4 L100,2 L100,25 Z" fill="url(#gradGreen)" opacity="0.1"/>
              </svg>
            </div>

            <div>
              <div class="flex justify-between items-center text-[10px] text-gray-400 mb-5 font-medium border-t border-gray-100 pt-3">
                <span>Min. SIP <strong class="text-gray-700">&rupee; 500</strong></span>
                <span>Expense Ratio <strong class="text-gray-700">0.82%</strong></span>
              </div>
              <div class="flex gap-2">
                <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2 rounded-lg text-[11px] font-semibold transition-colors">Invest Now</button>
                <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 py-2 rounded-lg text-[11px] font-semibold transition-colors">View Details</button>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white border border-gray-100 rounded-[20px] p-5 hover:shadow-lg transition-shadow shadow-sm flex flex-col justify-between h-full">
            <div>
              <div class="flex justify-between items-start mb-6">
                <div class="flex items-center">
                  <img src="./images/hdfc.png" alt="HDFC" class="h-5 object-contain" onerror="this.src=''; this.className='hidden'" />
                  <div class="text-[#0a3074] font-bold text-[9px] tracking-tight leading-tight px-1.5 py-1 bg-blue-50 ml-1">HDFC<br/><span class="text-[6px]">MUTUAL FUND</span></div>
                </div>
                <div class="text-right flex flex-col items-end">
                  <span class="text-green-500 text-[10px] font-bold inline-flex items-center">5 &starf;</span>
                  <p class="text-[9px] text-green-500 font-bold mt-0.5">Very High</p>
                </div>
              </div>
              
              <h3 class="font-bold text-[#0a1930] text-[15px] mb-1">HDFC Flexi Cap Fund</h3>
              <p class="text-gray-400 text-[11px] mb-6">Flexi Cap &bull; Equity</p>

              <div class="grid grid-cols-2 gap-2 mb-4">
                <div>
                  <p class="font-bold text-gray-900 text-[14px]">14.21%</p>
                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">1Y Returns (p.a.)</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-gray-900 text-[14px]">&rupee; 68,901 Cr</p>
                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Fund Size</p>
                </div>
              </div>

              <svg viewBox="0 0 100 25" class="w-full h-8 mb-4 preserve-aspect-ratio-none">
                <path d="M0,20 L20,16 L40,15 L60,10 L80,5 L100,2" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M0,25 L0,20 L20,16 L40,15 L60,10 L80,5 L100,2 L100,25 Z" fill="url(#gradGreen)" opacity="0.1"/>
              </svg>
            </div>

            <div>
              <div class="flex justify-between items-center text-[10px] text-gray-400 mb-5 font-medium border-t border-gray-100 pt-3">
                <span>Min. SIP <strong class="text-gray-700">&rupee; 500</strong></span>
                <span>Expense Ratio <strong class="text-gray-700">0.74%</strong></span>
              </div>
              <div class="flex gap-2">
                <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2 rounded-lg text-[11px] font-semibold transition-colors">Invest Now</button>
                <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 py-2 rounded-lg text-[11px] font-semibold transition-colors">View Details</button>
              </div>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="bg-white border border-gray-100 rounded-[20px] p-5 hover:shadow-lg transition-shadow shadow-sm flex flex-col justify-between h-full">
            <div>
              <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-1.5">
                  <img src="./images/icici.png" alt="ICICI" class="h-5 object-contain" onerror="this.src=''; this.className='hidden'" />
                  <div class="text-[#0e488f] font-bold text-[9px] tracking-tight leading-tight">ICICI PRUDENTIAL<br/><span class="text-[#e22d26] text-[7px]">MUTUAL FUND</span></div>
                </div>
                <div class="text-right flex flex-col items-end">
                  <span class="text-blue-500 text-[10px] font-bold inline-flex items-center">4 &starf;</span>
                  <p class="text-[9px] text-blue-500 font-bold mt-0.5">High</p>
                </div>
              </div>
              
              <h3 class="font-bold text-[#0a1930] text-[15px] mb-1">ICICI Pru Savings Fund</h3>
              <p class="text-gray-400 text-[11px] mb-6">Debt &bull; Conservative</p>

              <div class="grid grid-cols-2 gap-2 mb-4">
                <div>
                  <p class="font-bold text-gray-900 text-[14px]">7.12%</p>
                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">1Y Returns (p.a.)</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-gray-900 text-[14px]">&rupee; 28,456 Cr</p>
                  <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Fund Size</p>
                </div>
              </div>

              <svg viewBox="0 0 100 25" class="w-full h-8 mb-4 preserve-aspect-ratio-none">
                <path d="M0,20 L20,18 L40,16 L60,15 L80,12 L100,10" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M0,25 L0,20 L20,18 L40,16 L60,15 L80,12 L100,10 L100,25 Z" fill="url(#gradGreen)" opacity="0.1"/>
              </svg>
            </div>

            <div>
              <div class="flex justify-between items-center text-[10px] text-gray-400 mb-5 font-medium border-t border-gray-100 pt-3">
                <span>Min. SIP <strong class="text-gray-700">&rupee; 500</strong></span>
                <span>Expense Ratio <strong class="text-gray-700">0.56%</strong></span>
              </div>
              <div class="flex gap-2">
                <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2 rounded-lg text-[11px] font-semibold transition-colors">Invest Now</button>
                <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 py-2 rounded-lg text-[11px] font-semibold transition-colors">View Details</button>
              </div>
            </div>
          </div>

        </div>

        <!-- Journey Banner -->
        <div class="bg-[#f8f9fa] border border-gray-100 rounded-[20px] p-5 flex flex-col md:flex-row justify-between items-center gap-6 mt-4 shadow-sm">
          <div class="flex items-center gap-4">
            <div class="text-gray-400 shrink-0">
               <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <div>
              <h3 class="font-bold text-[#0a1930] text-[14px]">Start your mutual fund journey today</h3>
              <p class="text-gray-400 text-[12px] mt-0.5">Get expert advice and personalised fund recommendations.</p>
            </div>
          </div>
          <a href="contact.html" class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-5 py-2.5 rounded-[10px] text-[11px] font-semibold transition-colors whitespace-nowrap shadow-md">
            Book a Free Consultation &rarr;
          </a>
        </div>

      </div>

      <!-- Right Column (Widgets) -->
      <div class="lg:col-span-3 space-y-4 pt-4">
        
        <!-- Portfolio Widget -->
        <div class="bg-[#f0f7f7] rounded-[20px] p-5 relative overflow-hidden flex flex-col justify-between h-[150px]">
          <div class="z-10 relative">
            <h3 class="font-bold text-[#0a1930] text-[12px] mb-2">Your Mutual Fund Portfolio</h3>
            <p class="text-[26px] font-bold text-[#0a1930] mb-1">&rupee; 1,24,560</p>
            <p class="text-[10px] font-bold text-green-600 flex items-center gap-1">
               <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg> 
               +12.6% <span class="text-gray-500 font-medium">(Last 12 months)</span>
            </p>
            
            <button class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-4 py-2 mt-4 rounded-lg text-[10px] font-semibold transition-colors w-max">
              View Portfolio &rarr;
            </button>
          </div>
          
          <div class="absolute right-0 bottom-0 w-2/3 h-full pointer-events-none opacity-50">
             <svg viewBox="0 0 100 50" class="w-full h-full preserve-aspect-ratio-none">
               <path d="M0,50 L10,40 L20,45 L30,30 L40,35 L50,15 L60,25 L70,10 L80,15 L90,5 L100,0 L100,50 Z" fill="url(#gradBlue)" />
               <path d="M0,50 L10,40 L20,45 L30,30 L40,35 L50,15 L60,25 L70,10 L80,15 L90,5 L100,0" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
             </svg>
          </div>
        </div>

        <!-- Quiz Widget -->
        <div class="bg-white border border-gray-100 rounded-[20px] p-5 shadow-sm relative h-[150px] flex flex-col justify-between">
          <div class="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-400 shadow-sm">
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div>
            <h3 class="font-bold text-[#0a1930] text-[12px] mb-1.5 pr-10">Not sure where to start?</h3>
            <p class="text-gray-400 text-[10px] leading-relaxed pr-6">
              Take our short quiz to find the right mutual funds based on your goals, risk profile and time horizon.
            </p>
          </div>
          <button class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-4 py-2 rounded-lg text-[10px] font-semibold transition-colors w-max">
            Start Investment Quiz &rarr;
          </button>
        </div>

        <!-- Why Invest -->
        <div class="bg-white border border-gray-100 rounded-[20px] p-5 shadow-sm relative">
          <div class="absolute top-4 right-4 text-gray-400">
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="font-bold text-[#0a1930] text-[12px] mb-4">Why Invest in Mutual Funds?</h3>
          
          <ul class="space-y-3">
            <li class="flex gap-3 items-start">
              <div class="w-6 h-6 rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center text-gray-500 shrink-0">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <h4 class="text-[11px] font-bold text-[#0a1930]">Build long-term wealth</h4>
                <p class="text-[9px] text-gray-400 mt-0.5">Benefit from compounding over time.</p>
              </div>
            </li>
            <li class="flex gap-3 items-start">
              <div class="w-6 h-6 rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center text-gray-500 shrink-0">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              </div>
              <div>
                <h4 class="text-[11px] font-bold text-[#0a1930]">Diversify your portfolio</h4>
                <p class="text-[9px] text-gray-400 mt-0.5">Reduce risk with a mix of asset classes.</p>
              </div>
            </li>
            <li class="flex gap-3 items-start">
              <div class="w-6 h-6 rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center text-gray-500 shrink-0">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 class="text-[11px] font-bold text-[#0a1930]">Professional management</h4>
                <p class="text-[9px] text-gray-400 mt-0.5">Handled by experienced fund managers.</p>
              </div>
            </li>
            <li class="flex gap-3 items-start">
              <div class="w-6 h-6 rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center text-gray-500 shrink-0">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-12.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
              </div>
              <div>
                <h4 class="text-[11px] font-bold text-[#0a1930]">Achieve your goals</h4>
                <p class="text-[9px] text-gray-400 mt-0.5">Plan for home, education, retirement and more.</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </section>`;

const startStr = '<!-- Main Content -->';
const endStr = '</body>';
const startIndex = content.indexOf(startStr);
const endIndex = content.lastIndexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + replacement + '\n\n' + content.substring(endIndex);
  fs.writeFileSync(filePath, content, 'utf8');
} else {
  console.log('Could not find start or end strings.');
}
