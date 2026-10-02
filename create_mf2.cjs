const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mutual Funds | MIMAG</title>
  <link rel="stylesheet" href="./styles.css" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif !important; background-color: #f8fafc !important; background-image: none !important; margin: 0; }
    .nav-link { position: relative; color: #4b5563; padding-bottom: 0.5rem; font-size: 0.75rem; font-weight: 600; transition: color 0.2s; }
    .nav-link:hover { color: #111827; }
    .nav-link.active { color: #111827; border-bottom: 2px solid #111827; }
  </style>
</head>
<body class="text-[#1A1F36] antialiased">

  <!-- White Navbar from Screenshot -->
  <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div class="container mx-auto px-6 h-[80px] flex justify-between items-center">
      
      <!-- Logo -->
      <a href="index.html" class="flex items-center gap-3">
        <svg width="28" height="28" viewBox="0 0 100 100" class="fill-[#0a1930]">
          <polygon points="10,90 35,10 50,10 25,90" />
          <polygon points="40,90 65,10 80,10 55,90" />
          <polygon points="70,90 95,10 100,10 75,90" opacity="0.8"/>
        </svg>
        <div class="flex flex-col justify-center translate-y-0.5">
          <div class="text-[#0a1930] font-extrabold text-[22px] leading-none tracking-widest">MIMAG</div>
          <div class="text-gray-400 text-[7px] font-bold tracking-[0.25em] mt-1">FINANCIAL SERVICES</div>
        </div>
      </a>

      <!-- Center Links -->
      <nav class="hidden lg:flex items-center gap-8 mt-2">
        <a href="index.html" class="nav-link">Home</a>
        <a href="mutual-funds.html" class="nav-link active">Mutual Funds</a>
        <a href="#" class="nav-link">Insurance</a>
        <a href="#" class="nav-link">PMS</a>
        <a href="#" class="nav-link">AIF & SIF</a>
        <a href="#" class="nav-link">NPS</a>
        <a href="#" class="nav-link">FD</a>
        <a href="#" class="nav-link">Loans Against MF</a>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-6">
        <button class="text-gray-500 hover:text-gray-900 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
        <a href="#" class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-colors">
          Get Advice
        </a>
        <div class="flex items-center gap-2 cursor-pointer">
          <div class="w-8 h-8 rounded-full bg-[#0a1930] text-white flex items-center justify-center text-[11px] font-bold">
            MS
          </div>
          <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative w-full overflow-hidden" style="background: linear-gradient(105deg, #f0f6fa 0%, #e0edf5 55%, transparent 100%); padding-top: 6rem; padding-bottom: 7rem;">
    <!-- Mountain Background Image -->
    <div class="absolute right-0 top-0 bottom-0 w-[60%] z-0 pointer-events-none flex justify-end">
      <div class="absolute inset-0 bg-gradient-to-r from-[#e0edf5] via-transparent to-transparent z-10 w-1/3"></div>
      <img src="./images/mf-hero.png" alt="Mountain" class="h-full w-full object-cover object-left-top opacity-90" style="mix-blend-mode: multiply;" />
    </div>
    
    <div class="container mx-auto px-6 relative z-10 flex">
      <div class="max-w-2xl">
        <p class="text-gray-500 font-bold tracking-[0.2em] text-[10px] mb-4 uppercase">Mutual Funds</p>
        <h1 class="text-[#0a1930] text-[44px] lg:text-[54px] leading-[1.1] font-bold mb-6">
          Small steps today.<br/>Big financial goals tomorrow.
        </h1>
        <p class="text-gray-600 text-[15px] mb-8 max-w-md leading-relaxed">
          Invest in professionally managed mutual funds and let your money grow with the power of compounding.
        </p>
        <div class="flex gap-4">
          <a href="#funds" class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10">
            Explore Mutual Funds <span class="text-lg leading-none">&rarr;</span>
          </a>
          <a href="#contact" class="bg-white/70 hover:bg-white text-[#0a1930] border border-[#0a1930]/10 px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2">
            Talk to an Advisor
          </a>
        </div>
      </div>
      
      <!-- Right Floating Text -->
      <div class="absolute right-[5%] top-[15%] hidden lg:flex flex-col gap-4 text-left text-gray-700 font-bold tracking-[0.25em] text-[10px] uppercase">
        <div>DISCIPLINE</div>
        <div>+</div>
        <div>DIVERSIFICATION</div>
        <div>+</div>
        <div>WEALTH CREATION</div>
      </div>
    </div>
  </section>

  <!-- Features Strip -->
  <section class="border-y border-gray-200 bg-white">
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-wrap lg:flex-nowrap justify-between gap-6 xl:gap-4">
        
        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-white shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-[#0a1930] text-[13px] mb-0.5">Expert Research</h4>
            <p class="text-gray-400 text-[11px] leading-relaxed">Curated funds based on<br/>in-depth research & analysis.</p>
          </div>
        </div>

        <div class="w-px h-12 bg-gray-100 hidden lg:block"></div>

        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-white shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-[#0a1930] text-[13px] mb-0.5">Risk Profiling</h4>
            <p class="text-gray-400 text-[11px] leading-relaxed">Personalised recommendations<br/>based on your goals & risk appetite.</p>
          </div>
        </div>
        
        <div class="w-px h-12 bg-gray-100 hidden lg:block"></div>

        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-white shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-[#0a1930] text-[13px] mb-0.5">Flexible Investment Options</h4>
            <p class="text-gray-400 text-[11px] leading-relaxed">Lump sum or SIP — invest<br/>your way.</p>
          </div>
        </div>

        <div class="w-px h-12 bg-gray-100 hidden lg:block"></div>

        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-white shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-[#0a1930] text-[13px] mb-0.5">Tax Benefits</h4>
            <p class="text-gray-400 text-[11px] leading-relaxed">Potential tax savings<br/>as per your category.</p>
          </div>
        </div>
        
        <div class="w-px h-12 bg-gray-100 hidden lg:block"></div>

        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-white shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-[#0a1930] text-[13px] mb-0.5">Dedicated Support</h4>
            <p class="text-gray-400 text-[11px] leading-relaxed">Get guidance from certified<br/>financial advisors.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="py-16" id="funds">
    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <!-- Left Column (Funds List) -->
      <div class="lg:col-span-8 space-y-6">
        
        <div class="flex justify-between items-end mb-2">
          <div>
            <p class="text-gray-400 font-bold tracking-widest text-[10px] uppercase mb-1">Featured Funds</p>
            <h2 class="text-[32px] font-bold text-[#0a1930] leading-tight mb-2">Popular Mutual Funds</h2>
            <p class="text-gray-500 text-[13px]">Handpicked funds across categories to help you build a stronger financial future.</p>
          </div>
          <a href="#" class="text-[#0a1930] font-bold text-xs hover:text-blue-700 whitespace-nowrap">View All Funds &rarr;</a>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-3 py-2">
          <button class="bg-[#0a1930] text-white px-6 py-2 rounded-full text-[11px] font-semibold shadow-md">All</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-6 py-2 rounded-full text-[11px] font-semibold">Large Cap</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-6 py-2 rounded-full text-[11px] font-semibold">Mid Cap</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-6 py-2 rounded-full text-[11px] font-semibold">Small Cap</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-6 py-2 rounded-full text-[11px] font-semibold">ELSS</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-6 py-2 rounded-full text-[11px] font-semibold">Debt</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-6 py-2 rounded-full text-[11px] font-semibold">Hybrid</button>
          <button class="bg-white border border-gray-200 text-gray-500 hover:border-gray-300 px-6 py-2 rounded-full text-[11px] font-semibold">International</button>
        </div>

        <!-- Fund Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          
          <!-- Card 1 -->
          <div class="bg-white border border-gray-100 rounded-[20px] p-6 hover:shadow-xl transition-shadow shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center gap-3">
                <img src="./images/sbin.png" alt="SBI" class="h-8 object-contain" onerror="this.src=''; this.className='hidden'" />
                <div class="text-[#005596] font-bold text-sm tracking-tight leading-tight">SBI MUTUAL FUND<br/><span class="text-[6px] text-gray-400 font-medium tracking-normal">A PARTNER FOR LIFE</span></div>
              </div>
              <div class="text-right flex flex-col items-end">
                <span class="text-green-500 text-[10px] font-bold inline-flex items-center">
                  5 &starf;
                </span>
                <p class="text-[9px] text-green-500 font-bold mt-0.5">Very High</p>
              </div>
            </div>
            
            <h3 class="font-bold text-[#0a1930] text-[15px] mb-1">SBI Bluechip Fund</h3>
            <p class="text-gray-400 text-[11px] mb-6">Large Cap &bull; Equity</p>

            <div class="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p class="font-bold text-gray-900 text-[15px]">12.34%</p>
                <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">1Y Returns (p.a.)</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-[15px]">&rupee; 56,842 Cr</p>
                <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Fund Size</p>
              </div>
            </div>

            <!-- Mini chart placeholder -->
            <svg viewBox="0 0 100 25" class="w-full h-8 mb-5 preserve-aspect-ratio-none">
              <path d="M0,20 L10,18 L20,19 L30,15 L40,16 L50,11 L60,13 L70,8 L80,5 L90,6 L100,2" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M0,25 L0,20 L10,18 L20,19 L30,15 L40,16 L50,11 L60,13 L70,8 L80,5 L90,6 L100,2 L100,25 Z" fill="url(#gradGreen)" opacity="0.1"/>
              <defs>
                <linearGradient id="gradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#22c55e;stop-opacity:0" />
                </linearGradient>
              </defs>
            </svg>

            <div class="flex justify-between items-center text-[10px] text-gray-400 mb-6 font-medium border-t border-gray-100 pt-4">
              <span>Min. SIP <strong class="text-gray-700">&rupee; 500</strong></span>
              <span>Expense Ratio <strong class="text-gray-700">0.64%</strong></span>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors">Invest Now</button>
              <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 py-2.5 rounded-lg text-xs font-semibold transition-colors">View Details</button>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white border border-gray-100 rounded-[20px] p-6 hover:shadow-xl transition-shadow shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 100 100" class="fill-[#9a2143]">
                   <polygon points="10,90 40,20 60,20 30,90" />
                   <polygon points="50,90 80,20 100,20 70,90" opacity="0.7"/>
                </svg>
                <div class="text-[#9a2143] font-bold text-xs tracking-tight leading-none">AXIS MUTUAL FUND</div>
              </div>
              <div class="text-right flex flex-col items-end">
                <span class="text-green-500 text-[10px] font-bold inline-flex items-center">
                  5 &starf;
                </span>
                <p class="text-[9px] text-green-500 font-bold mt-0.5">Very High</p>
              </div>
            </div>
            
            <h3 class="font-bold text-[#0a1930] text-[15px] mb-1">Axis Midcap Fund</h3>
            <p class="text-gray-400 text-[11px] mb-6">Mid Cap &bull; Equity</p>

            <div class="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p class="font-bold text-gray-900 text-[15px]">16.78%</p>
                <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">1Y Returns (p.a.)</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-[15px]">&rupee; 42,317 Cr</p>
                <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Fund Size</p>
              </div>
            </div>

            <svg viewBox="0 0 100 25" class="w-full h-8 mb-5 preserve-aspect-ratio-none">
              <path d="M0,22 L15,18 L30,16 L45,9 L60,12 L75,7 L90,4 L100,2" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M0,25 L0,22 L15,18 L30,16 L45,9 L60,12 L75,7 L90,4 L100,2 L100,25 Z" fill="url(#gradGreen)" opacity="0.1"/>
            </svg>

            <div class="flex justify-between items-center text-[10px] text-gray-400 mb-6 font-medium border-t border-gray-100 pt-4">
              <span>Min. SIP <strong class="text-gray-700">&rupee; 500</strong></span>
              <span>Expense Ratio <strong class="text-gray-700">0.82%</strong></span>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors">Invest Now</button>
              <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 py-2.5 rounded-lg text-xs font-semibold transition-colors">View Details</button>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white border border-gray-100 rounded-[20px] p-6 hover:shadow-xl transition-shadow shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center">
                <img src="./images/hdfc.png" alt="HDFC" class="h-6 object-contain" onerror="this.src=''; this.className='hidden'" />
                <div class="text-[#0a3074] font-bold text-xs tracking-tight leading-tight px-2 py-1 bg-blue-50">HDFC<br/><span class="text-[7px]">MUTUAL FUND</span></div>
              </div>
              <div class="text-right flex flex-col items-end">
                <span class="text-green-500 text-[10px] font-bold inline-flex items-center">
                  5 &starf;
                </span>
                <p class="text-[9px] text-green-500 font-bold mt-0.5">Very High</p>
              </div>
            </div>
            
            <h3 class="font-bold text-[#0a1930] text-[15px] mb-1">HDFC Flexi Cap Fund</h3>
            <p class="text-gray-400 text-[11px] mb-6">Flexi Cap &bull; Equity</p>

            <div class="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p class="font-bold text-gray-900 text-[15px]">14.21%</p>
                <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">1Y Returns (p.a.)</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-[15px]">&rupee; 68,901 Cr</p>
                <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Fund Size</p>
              </div>
            </div>

            <svg viewBox="0 0 100 25" class="w-full h-8 mb-5 preserve-aspect-ratio-none">
              <path d="M0,20 L20,16 L40,15 L60,10 L80,5 L100,2" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M0,25 L0,20 L20,16 L40,15 L60,10 L80,5 L100,2 L100,25 Z" fill="url(#gradGreen)" opacity="0.1"/>
            </svg>

            <div class="flex justify-between items-center text-[10px] text-gray-400 mb-6 font-medium border-t border-gray-100 pt-4">
              <span>Min. SIP <strong class="text-gray-700">&rupee; 500</strong></span>
              <span>Expense Ratio <strong class="text-gray-700">0.74%</strong></span>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors">Invest Now</button>
              <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 py-2.5 rounded-lg text-xs font-semibold transition-colors">View Details</button>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="bg-white border border-gray-100 rounded-[20px] p-6 hover:shadow-xl transition-shadow shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center gap-2">
                <img src="./images/icici.png" alt="ICICI" class="h-6 object-contain" onerror="this.src=''; this.className='hidden'" />
                <div class="text-[#0e488f] font-bold text-[10px] tracking-tight leading-tight">ICICI PRUDENTIAL<br/><span class="text-[#e22d26] text-[8px]">MUTUAL FUND</span></div>
              </div>
              <div class="text-right flex flex-col items-end">
                <span class="text-blue-500 text-[10px] font-bold inline-flex items-center">
                  4 &starf;
                </span>
                <p class="text-[9px] text-blue-500 font-bold mt-0.5">High</p>
              </div>
            </div>
            
            <h3 class="font-bold text-[#0a1930] text-[15px] mb-1">ICICI Pru Savings Fund</h3>
            <p class="text-gray-400 text-[11px] mb-6">Debt &bull; Conservative</p>

            <div class="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p class="font-bold text-gray-900 text-[15px]">7.12%</p>
                <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">1Y Returns (p.a.)</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-[15px]">&rupee; 28,456 Cr</p>
                <p class="text-gray-400 text-[9px] uppercase font-semibold tracking-wide">Fund Size</p>
              </div>
            </div>

            <svg viewBox="0 0 100 25" class="w-full h-8 mb-5 preserve-aspect-ratio-none">
              <path d="M0,20 L20,18 L40,16 L60,15 L80,12 L100,10" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M0,25 L0,20 L20,18 L40,16 L60,15 L80,12 L100,10 L100,25 Z" fill="url(#gradGreen)" opacity="0.1"/>
            </svg>

            <div class="flex justify-between items-center text-[10px] text-gray-400 mb-6 font-medium border-t border-gray-100 pt-4">
              <span>Min. SIP <strong class="text-gray-700">&rupee; 500</strong></span>
              <span>Expense Ratio <strong class="text-gray-700">0.56%</strong></span>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors">Invest Now</button>
              <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 py-2.5 rounded-lg text-xs font-semibold transition-colors">View Details</button>
            </div>
          </div>

        </div>

        <!-- Journey Banner -->
        <div class="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 mt-4 shadow-sm">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 shrink-0">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <div>
              <h3 class="font-bold text-[#0a1930] text-[13px]">Start your mutual fund journey today</h3>
              <p class="text-gray-400 text-[11px] mt-0.5">Get expert advice and personalised fund recommendations.</p>
            </div>
          </div>
          <a href="#contact" class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-5 py-2.5 rounded-lg text-[11px] font-semibold transition-colors whitespace-nowrap shadow-md">
            Book a Free Consultation &rarr;
          </a>
        </div>

      </div>

      <!-- Right Column (Widgets) -->
      <div class="lg:col-span-4 space-y-6 pt-[38px]">
        
        <!-- Portfolio Widget -->
        <div class="bg-[#f2f6fa] rounded-[20px] p-6 relative overflow-hidden flex justify-between h-[180px]">
          <div class="z-10 relative">
            <h3 class="font-bold text-[#0a1930] text-[13px] mb-3">Your Mutual Fund Portfolio</h3>
            <p class="text-3xl font-bold text-[#0a1930] mb-1">&rupee; 1,24,560</p>
            <p class="text-[11px] font-bold text-green-600 mb-6 flex items-center gap-1">
               <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg> 
               +12.6% <span class="text-gray-500 font-medium">(Last 12 months)</span>
            </p>
            
            <button class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-5 py-2.5 rounded-[10px] text-[11px] font-semibold transition-colors">
              View Portfolio &rarr;
            </button>
          </div>
          
          <div class="absolute right-0 bottom-0 w-2/3 h-[60%] pointer-events-none opacity-80">
             <svg viewBox="0 0 100 50" class="w-full h-full preserve-aspect-ratio-none">
               <path d="M0,50 L10,40 L20,45 L30,30 L40,35 L50,15 L60,25 L70,10 L80,15 L90,5 L100,0 L100,50 Z" fill="url(#gradBlue)" />
               <path d="M0,50 L10,40 L20,45 L30,30 L40,35 L50,15 L60,25 L70,10 L80,15 L90,5 L100,0" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
               <defs>
                  <linearGradient id="gradBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#d1fae5;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#d1fae5;stop-opacity:0" />
                  </linearGradient>
                </defs>
             </svg>
          </div>
        </div>

        <!-- Quiz Widget -->
        <div class="bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm relative">
          <div class="absolute top-6 right-6 w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center text-blue-600 shadow-sm">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="font-bold text-[#0a1930] text-[13px] mb-2 pr-12">Not sure where to start?</h3>
          <p class="text-gray-400 text-[11px] mb-6 leading-relaxed pr-8">
            Take our short quiz to find the right mutual funds based on your goals, risk profile and time horizon.
          </p>
          <button class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-5 py-2.5 rounded-[10px] text-[11px] font-semibold transition-colors">
            Start Investment Quiz &rarr;
          </button>
        </div>

        <!-- Why Invest -->
        <div class="bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm relative">
          <div class="absolute top-6 right-6 text-gray-400">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="font-bold text-[#0a1930] text-[13px] mb-5">Why Invest in Mutual Funds?</h3>
          
          <ul class="space-y-4">
            <li class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full border border-gray-200 bg-gray-50/50 flex justify-center items-center text-gray-500 shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <h4 class="text-[12px] font-bold text-[#0a1930]">Build long-term wealth</h4>
                <p class="text-[10px] text-gray-400 mt-0.5">Benefit from compounding over time.</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full border border-gray-200 bg-gray-50/50 flex justify-center items-center text-gray-500 shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              </div>
              <div>
                <h4 class="text-[12px] font-bold text-[#0a1930]">Diversify your portfolio</h4>
                <p class="text-[10px] text-gray-400 mt-0.5">Reduce risk with a mix of asset classes.</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full border border-gray-200 bg-gray-50/50 flex justify-center items-center text-gray-500 shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 class="text-[12px] font-bold text-[#0a1930]">Professional management</h4>
                <p class="text-[10px] text-gray-400 mt-0.5">Handled by experienced fund managers.</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full border border-gray-200 bg-gray-50/50 flex justify-center items-center text-gray-500 shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
              </div>
              <div>
                <h4 class="text-[12px] font-bold text-[#0a1930]">Achieve your goals</h4>
                <p class="text-[10px] text-gray-400 mt-0.5">Plan for home, education, retirement and more.</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </section>

</body>
</html>
`;

fs.writeFileSync(path.join('d:/MIMAG-Finance', 'mutual-funds.html'), htmlContent, 'utf8');
