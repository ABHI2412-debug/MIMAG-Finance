const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mutual Funds | FinVista</title>
  <link rel="stylesheet" href="./styles.css" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif !important; background-color: #f8fafc !important; background-image: none !important; }
  </style>
</head>
<body class="text-[#1A1F36]">

  <header class="hdr" style="background: rgba(20, 18, 15, 0.95); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.1);">
    <div class="container mx-auto px-6 hdr-inner flex justify-between items-center" style="height: 80px;">
      <a class="brand" href="index.html#top">
        <img src="./assets/logo-finvista.png" alt="FinVista" style="height: 72px; width: auto;">
      </a>
      <div class="nav-wrap flex-1 flex justify-center">
        <nav class="nav" id="mainNav">
          <a href="index.html#top" class="text-white/70 hover:text-[#E5A93C] font-semibold text-sm px-6 py-2 transition-colors">About Us</a>
          <div class="nav-item-dropdown relative group" style="display:inline-block;">
            <a href="index.html#services" class="dropdown-trigger flex items-center gap-1.5 transition-colors group-hover:text-[#E5A93C] text-white/70 font-semibold text-sm px-6 py-2" style="display: inline-flex !important; align-items: center !important; gap: 6px !important; white-space: nowrap !important; text-decoration: none;">
              <span>Our Services</span>
              <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" style="display: inline-block !important; flex-shrink: 0 !important; width: 12px; height: 12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div class="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[650px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div class="bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 text-left">
                    <p class="text-white/60">Core Investments & Advisory menus go here.</p>
                </div>
            </div>
          </div>
          <a href="index.html#calc" class="text-white/70 hover:text-[#E5A93C] font-semibold text-sm px-6 py-2 transition-colors">SIP Calculator</a>
          
          <div class="nav-item-dropdown relative group" style="display:inline-block;">
            <a href="#" class="dropdown-trigger flex items-center gap-1.5 transition-colors group-hover:text-[#E5A93C] text-white/70 font-semibold text-sm px-6 py-2" style="display: inline-flex !important; align-items: center !important; gap: 6px !important; white-space: nowrap !important; text-decoration: none;">
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
          </div>
          
          <a href="insights.html" class="text-white/70 hover:text-[#E5A93C] font-semibold text-sm px-6 py-2 transition-colors">Insights</a>
          <a href="contact.html" class="text-white/70 hover:text-[#E5A93C] font-semibold text-sm px-6 py-2 transition-colors">Contact Us</a>
        </nav>
      </div>
      <div class="hdr-right flex items-center">
        <a class="bg-[#E5A93C] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-[#ffc65c] transition-colors" href="index.html#contact">Book a Consultation &nearr;</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative w-full pt-20 pb-24 overflow-hidden" style="background: linear-gradient(105deg, #f0f6fa 0%, #e0edf5 55%, transparent 100%);">
    <!-- Mountain Background Image -->
    <div class="absolute right-0 top-0 bottom-0 w-[60%] z-0 pointer-events-none flex justify-end">
      <div class="absolute inset-0 bg-gradient-to-r from-[#e0edf5] via-transparent to-transparent z-10 w-1/3"></div>
      <img src="./images/mf-hero.png" alt="Mountain" class="h-full w-full object-cover object-left opacity-90" style="mix-blend-mode: multiply;" />
    </div>
    
    <div class="container mx-auto px-6 relative z-10 flex">
      <div class="max-w-2xl pt-4">
        <p class="text-gray-500 font-bold tracking-[0.2em] text-sm mb-4 uppercase">Mutual Funds</p>
        <h1 class="text-[#0a1930] text-[52px] leading-[1.1] font-bold mb-6">
          Small steps today.<br/>Big financial goals tomorrow.
        </h1>
        <p class="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
          Invest in professionally managed mutual funds and let your money grow with the power of compounding.
        </p>
        <div class="flex gap-4">
          <a href="#funds" class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10">
            Explore Mutual Funds <span class="text-xl leading-none">&rarr;</span>
          </a>
          <a href="#contact" class="bg-white/70 hover:bg-white text-[#0a1930] border border-[#0a1930]/10 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2">
            Talk to an Advisor
          </a>
        </div>
      </div>
      
      <div class="absolute right-[5%] top-1/4 hidden lg:block text-right text-gray-500/80 font-bold tracking-[0.2em] text-[11px] uppercase leading-[2.5]">
        DISCIPLINE<br/>+<br/>DIVERSIFICATION<br/>+<br/>WEALTH CREATION
      </div>
    </div>
  </section>

  <!-- Features Strip -->
  <section class="border-y border-gray-200 bg-white">
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-wrap lg:flex-nowrap justify-between gap-6 xl:gap-4">
        
        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-gray-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 text-[13px] mb-0.5">Expert Research</h4>
            <p class="text-gray-500 text-[11px] leading-relaxed">Curated funds based on in-depth research & analysis.</p>
          </div>
        </div>

        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-gray-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 text-[13px] mb-0.5">Risk Profiling</h4>
            <p class="text-gray-500 text-[11px] leading-relaxed">Personalised recommendations based on your goals.</p>
          </div>
        </div>

        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-gray-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 text-[13px] mb-0.5">Flexible Investment</h4>
            <p class="text-gray-500 text-[11px] leading-relaxed">Lump sum or SIP — invest your way effortlessly.</p>
          </div>
        </div>

        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-gray-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 text-[13px] mb-0.5">Tax Benefits</h4>
            <p class="text-gray-500 text-[11px] leading-relaxed">Potential tax savings as per your fund category.</p>
          </div>
        </div>

        <div class="flex items-center gap-4 max-w-[240px]">
          <div class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 shrink-0 bg-gray-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 text-[13px] mb-0.5">Dedicated Support</h4>
            <p class="text-gray-500 text-[11px] leading-relaxed">Get guidance from certified financial advisors.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="py-16" id="funds">
    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <!-- Left Column (Funds List) -->
      <div class="lg:col-span-8 space-y-8">
        
        <div class="flex justify-between items-end mb-2">
          <div>
            <p class="text-gray-500 font-bold tracking-widest text-[11px] uppercase mb-1">Featured Funds</p>
            <h2 class="text-3xl font-bold text-[#0a1930] mb-2">Popular Mutual Funds</h2>
            <p class="text-gray-500 text-sm">Handpicked funds across categories to help you build a stronger financial future.</p>
          </div>
          <a href="#" class="text-[#0a1930] font-semibold text-sm hover:text-blue-700 whitespace-nowrap">View All Funds &rarr;</a>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-2">
          <button class="bg-[#0a1930] text-white px-5 py-2 rounded-full text-xs font-semibold shadow-md">All</button>
          <button class="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2 rounded-full text-xs font-medium">Large Cap</button>
          <button class="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2 rounded-full text-xs font-medium">Mid Cap</button>
          <button class="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2 rounded-full text-xs font-medium">Small Cap</button>
          <button class="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2 rounded-full text-xs font-medium">ELSS</button>
          <button class="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2 rounded-full text-xs font-medium">Debt</button>
          <button class="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2 rounded-full text-xs font-medium">Hybrid</button>
        </div>

        <!-- Fund Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          
          <!-- Card 1 -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow relative">
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center overflow-hidden p-1">
                   <!-- SBI Logo Placeholder -->
                   <div class="text-[10px] font-bold text-blue-600 leading-tight text-center">SBI<br/>MF</div>
                </div>
              </div>
              <div class="text-right">
                <span class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold inline-flex items-center gap-1">
                  5 &starf;
                </span>
                <p class="text-[10px] text-green-600 font-semibold mt-1 uppercase">Very High</p>
              </div>
            </div>
            
            <h3 class="font-bold text-[#0a1930] text-lg mb-1">SBI Bluechip Fund</h3>
            <p class="text-gray-500 text-xs mb-6">Large Cap &bull; Equity</p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p class="font-bold text-gray-900 text-lg">12.34%</p>
                <p class="text-gray-400 text-[11px] uppercase">1Y Returns (p.a.)</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-lg">&rupee; 56,842 Cr</p>
                <p class="text-gray-400 text-[11px] uppercase">Fund Size</p>
              </div>
            </div>

            <!-- Mini chart placeholder -->
            <svg viewBox="0 0 100 30" class="w-full h-12 mb-6 preserve-aspect-ratio-none">
              <path d="M0,25 L10,23 L20,24 L30,20 L40,18 L50,15 L60,17 L70,10 L80,5 L90,8 L100,2" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
            </svg>

            <div class="flex justify-between items-center text-xs text-gray-500 mb-6 font-medium">
              <span>Min. SIP <strong class="text-gray-900">&rupee; 500</strong></span>
              <span>Expense Ratio <strong class="text-gray-900">0.64%</strong></span>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors">Invest Now</button>
              <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2.5 rounded-lg text-xs font-semibold transition-colors">View Details</button>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow relative">
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center overflow-hidden p-1">
                   <div class="text-[10px] font-bold text-red-600 leading-tight text-center">AXIS<br/>MF</div>
                </div>
              </div>
              <div class="text-right">
                <span class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold inline-flex items-center gap-1">
                  5 &starf;
                </span>
                <p class="text-[10px] text-green-600 font-semibold mt-1 uppercase">Very High</p>
              </div>
            </div>
            
            <h3 class="font-bold text-[#0a1930] text-lg mb-1">Axis Midcap Fund</h3>
            <p class="text-gray-500 text-xs mb-6">Mid Cap &bull; Equity</p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p class="font-bold text-gray-900 text-lg">16.78%</p>
                <p class="text-gray-400 text-[11px] uppercase">1Y Returns (p.a.)</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-lg">&rupee; 42,317 Cr</p>
                <p class="text-gray-400 text-[11px] uppercase">Fund Size</p>
              </div>
            </div>

            <svg viewBox="0 0 100 30" class="w-full h-12 mb-6 preserve-aspect-ratio-none">
              <path d="M0,28 L15,25 L30,22 L45,15 L60,18 L75,10 L90,5 L100,2" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
            </svg>

            <div class="flex justify-between items-center text-xs text-gray-500 mb-6 font-medium">
              <span>Min. SIP <strong class="text-gray-900">&rupee; 500</strong></span>
              <span>Expense Ratio <strong class="text-gray-900">0.82%</strong></span>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors">Invest Now</button>
              <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2.5 rounded-lg text-xs font-semibold transition-colors">View Details</button>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow relative">
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center overflow-hidden p-1">
                   <div class="text-[10px] font-bold text-blue-800 leading-tight text-center">HDFC<br/>MF</div>
                </div>
              </div>
              <div class="text-right">
                <span class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold inline-flex items-center gap-1">
                  5 &starf;
                </span>
                <p class="text-[10px] text-green-600 font-semibold mt-1 uppercase">Very High</p>
              </div>
            </div>
            
            <h3 class="font-bold text-[#0a1930] text-lg mb-1">HDFC Flexi Cap Fund</h3>
            <p class="text-gray-500 text-xs mb-6">Flexi Cap &bull; Equity</p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p class="font-bold text-gray-900 text-lg">14.21%</p>
                <p class="text-gray-400 text-[11px] uppercase">1Y Returns (p.a.)</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-lg">&rupee; 68,901 Cr</p>
                <p class="text-gray-400 text-[11px] uppercase">Fund Size</p>
              </div>
            </div>

            <svg viewBox="0 0 100 30" class="w-full h-12 mb-6 preserve-aspect-ratio-none">
              <path d="M0,26 L20,20 L40,19 L60,12 L80,7 L100,2" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
            </svg>

            <div class="flex justify-between items-center text-xs text-gray-500 mb-6 font-medium">
              <span>Min. SIP <strong class="text-gray-900">&rupee; 500</strong></span>
              <span>Expense Ratio <strong class="text-gray-900">0.74%</strong></span>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors">Invest Now</button>
              <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2.5 rounded-lg text-xs font-semibold transition-colors">View Details</button>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow relative">
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center overflow-hidden p-1">
                   <div class="text-[10px] font-bold text-red-500 leading-tight text-center">ICICI<br/>PRU</div>
                </div>
              </div>
              <div class="text-right">
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold inline-flex items-center gap-1">
                  4 &starf;
                </span>
                <p class="text-[10px] text-blue-600 font-semibold mt-1 uppercase">High</p>
              </div>
            </div>
            
            <h3 class="font-bold text-[#0a1930] text-lg mb-1">ICICI Pru Savings Fund</h3>
            <p class="text-gray-500 text-xs mb-6">Debt &bull; Conservative</p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p class="font-bold text-gray-900 text-lg">7.12%</p>
                <p class="text-gray-400 text-[11px] uppercase">1Y Returns (p.a.)</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-lg">&rupee; 28,456 Cr</p>
                <p class="text-gray-400 text-[11px] uppercase">Fund Size</p>
              </div>
            </div>

            <svg viewBox="0 0 100 30" class="w-full h-12 mb-6 preserve-aspect-ratio-none">
              <path d="M0,25 L20,24 L40,22 L60,20 L80,18 L100,16" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
            </svg>

            <div class="flex justify-between items-center text-xs text-gray-500 mb-6 font-medium">
              <span>Min. SIP <strong class="text-gray-900">&rupee; 500</strong></span>
              <span>Expense Ratio <strong class="text-gray-900">0.56%</strong></span>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 bg-[#0a1930] hover:bg-[#1a2f52] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors">Invest Now</button>
              <button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2.5 rounded-lg text-xs font-semibold transition-colors">View Details</button>
            </div>
          </div>

        </div>

        <!-- Journey Banner -->
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <div>
              <h3 class="font-bold text-[#0a1930] text-sm">Start your mutual fund journey today</h3>
              <p class="text-gray-500 text-xs mt-1">Get expert advice and personalised fund recommendations.</p>
            </div>
          </div>
          <a href="#contact" class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-6 py-3 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shadow-md">
            Book a Free Consultation &rarr;
          </a>
        </div>

      </div>

      <!-- Right Column (Widgets) -->
      <div class="lg:col-span-4 space-y-6">
        
        <!-- Portfolio Widget -->
        <div class="bg-[#eef2f6] rounded-2xl p-6 relative overflow-hidden group border border-blue-900/5">
          <h3 class="font-bold text-[#0a1930] text-sm mb-4">Your Mutual Fund Portfolio</h3>
          <p class="text-3xl font-bold text-gray-900 mb-2">&rupee; 1,24,560</p>
          <p class="text-xs font-semibold text-green-600 mb-8 flex items-center gap-1">
             <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg> 
             +12.6% <span class="text-gray-500 font-normal">(Last 12 months)</span>
          </p>
          
          <div class="absolute right-0 bottom-12 w-2/3 h-20 pointer-events-none opacity-50">
             <svg viewBox="0 0 100 40" class="w-full h-full preserve-aspect-ratio-none">
               <path d="M0,40 L10,35 L20,38 L30,25 L40,28 L50,15 L60,18 L70,10 L80,12 L90,5 L100,0 L100,40 Z" fill="#93C5FD"/>
               <path d="M0,40 L10,35 L20,38 L30,25 L40,28 L50,15 L60,18 L70,10 L80,12 L90,5 L100,0" fill="none" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round"/>
             </svg>
          </div>

          <button class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors shadow-md z-10 relative">
            View Portfolio &rarr;
          </button>
        </div>

        <!-- Quiz Widget -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative">
          <div class="absolute top-6 right-6 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="font-bold text-[#0a1930] text-sm mb-2 pr-12">Not sure where to start?</h3>
          <p class="text-gray-500 text-xs mb-6 leading-relaxed pr-8">
            Take our short quiz to find the right mutual funds based on your goals, risk profile and time horizon.
          </p>
          <button class="bg-[#0a1930] hover:bg-[#1a2f52] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors shadow-md">
            Start Investment Quiz &rarr;
          </button>
        </div>

        <!-- Why Invest -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative">
          <div class="absolute top-6 right-6 text-gray-300">
             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="font-bold text-[#0a1930] text-sm mb-6">Why Invest in Mutual Funds?</h3>
          
          <ul class="space-y-5">
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex justify-center items-center text-gray-500 shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <h4 class="text-[13px] font-bold text-gray-900">Build long-term wealth</h4>
                <p class="text-[11px] text-gray-500 mt-0.5">Benefit from compounding over time.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex justify-center items-center text-gray-500 shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              </div>
              <div>
                <h4 class="text-[13px] font-bold text-gray-900">Diversify your portfolio</h4>
                <p class="text-[11px] text-gray-500 mt-0.5">Reduce risk with a mix of asset classes.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex justify-center items-center text-gray-500 shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 class="text-[13px] font-bold text-gray-900">Professional management</h4>
                <p class="text-[11px] text-gray-500 mt-0.5">Handled by experienced fund managers.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex justify-center items-center text-gray-500 shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
              </div>
              <div>
                <h4 class="text-[13px] font-bold text-gray-900">Achieve your goals</h4>
                <p class="text-[11px] text-gray-500 mt-0.5">Plan for home, education, retirement and more.</p>
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
