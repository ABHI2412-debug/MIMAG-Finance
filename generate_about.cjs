const fs = require('fs');
const path = require('path');

// Extract the header from mutual-funds.html
const mfContent = fs.readFileSync('d:/MIMAG-Finance/mutual-funds.html', 'utf8');
const headerMatch = mfContent.match(/<header[\s\S]*?<\/header>/);
const headerHTML = headerMatch ? headerMatch[0] : '';

// Update About Us links
const updatedHeaderHTML = headerHTML.replace(/href="index\.html#top"(.*?)>About Us<\/a>/g, 'href="about.html"$1>About Us</a>');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | FinVista</title>
  <link rel="stylesheet" href="./styles.css" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif !important; background-color: #f8fafc !important; background-image: none !important; margin: 0; }
    .serif-font { font-family: 'Playfair Display', serif; }
    
    .hero-bg {
      background: linear-gradient(to right, rgba(10, 25, 48, 0.9) 0%, rgba(10, 25, 48, 0.3) 100%), url('./images/hero-about.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .dark-section {
      background-color: #0c0d10;
    }
  </style>
</head>
<body class="text-[#1A1F36] antialiased">

  \${updatedHeaderHTML}

  <!-- Hero Section -->
  <section class="hero-bg min-h-screen relative flex items-center pt-24 pb-12">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex justify-between items-center relative z-10">
      
      <!-- Left content -->
      <div class="max-w-3xl">
        <p class="text-[#d4af37] font-semibold tracking-[0.2em] text-[11px] mb-6 uppercase">About Us</p>
        <h1 class="serif-font text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
          Building a<br/><span class="text-[#e5c158]">Brighter Financial</span><br/>Tomorrow
        </h1>
        <p class="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          We are a team of financial experts, technologists and long-term thinkers, united by a single purpose — to help individuals and families build a more secure and fulfilling future.
        </p>
        
        <div class="flex items-center gap-4 mt-8">
          <div class="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>
          <span class="text-sm text-gray-300 font-medium">Scroll to explore</span>
        </div>
      </div>
      
      <!-- Right decorative text -->
      <div class="hidden lg:flex flex-col items-end gap-3 text-right absolute right-12 top-1/2 -translate-y-1/2">
        <p class="text-gray-400 text-[10px] tracking-[0.3em] uppercase">People</p>
        <p class="text-gray-400 text-[10px] tracking-[0.3em] uppercase">Plans</p>
        <p class="text-gray-400 text-[10px] tracking-[0.3em] uppercase">Possibilities</p>
        <p class="text-gray-400 text-[10px] tracking-[0.3em] uppercase">Progress</p>
        <div class="w-[1px] h-12 bg-[#d4af37] mt-4 mr-[10px]"></div>
      </div>
      
    </div>
  </section>

  <!-- Middle Section: Our Story -->
  <section class="bg-[#fbfaf8] flex flex-col lg:flex-row">
    <!-- Left text area -->
    <div class="w-full lg:w-[60%] py-24 px-6 lg:px-20 xl:px-24 flex flex-col justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <!-- Story text -->
        <div>
          <p class="text-[#c19b48] font-semibold tracking-[0.2em] text-[10px] mb-6 uppercase">Our Story</p>
          <h2 class="serif-font text-4xl lg:text-[44px] font-bold text-[#111111] leading-tight mb-8">
            A Deeper Purpose<br/>Than Just Investing
          </h2>
          <p class="text-gray-600 text-[15px] leading-relaxed mb-6">
            FinVista was founded with a simple belief — that everyone in India deserves access to clear, unbiased and goal-oriented financial guidance.
          </p>
          <p class="text-gray-600 text-[15px] leading-relaxed mb-10">
            In a world of complexity, we bring clarity. In a world of noise, we offer perspective. And in a world of short-term thinking, we focus on what truly matters — your long-term financial well-being.
          </p>
          <button class="bg-[#f2cb6b] hover:bg-[#e0b852] text-[#111] px-8 py-3 rounded-full text-sm font-bold transition-colors shadow-sm inline-flex items-center gap-2">
            Our Journey &rarr;
          </button>
        </div>
        
        <!-- Timeline -->
        <div class="flex flex-col justify-center gap-10">
          
          <div class="flex gap-6">
            <div class="shrink-0 mt-1">
              <div class="w-12 h-12 rounded-full border border-[#e5d9b7] flex items-center justify-center text-[#c19b48]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
            </div>
            <div>
              <p class="text-[11px] font-bold text-[#111] mb-1">2018</p>
              <h4 class="text-base font-bold text-[#111] mb-2">The Beginning</h4>
              <p class="text-sm text-gray-500 leading-relaxed">Started with a vision to simplify wealth management for every Indian.</p>
            </div>
          </div>
          
          <div class="flex gap-6">
            <div class="shrink-0 mt-1">
              <div class="w-12 h-12 rounded-full border border-[#e5d9b7] flex items-center justify-center text-[#c19b48]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
              </div>
            </div>
            <div>
              <p class="text-[11px] font-bold text-[#111] mb-1">2020</p>
              <h4 class="text-base font-bold text-[#111] mb-2">Growing Together</h4>
              <p class="text-sm text-gray-500 leading-relaxed">Expanded our services and helped thousands of families across India.</p>
            </div>
          </div>
          
          <div class="flex gap-6">
            <div class="shrink-0 mt-1">
              <div class="w-12 h-12 rounded-full border border-[#e5d9b7] flex items-center justify-center text-[#c19b48]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
            </div>
            <div>
              <p class="text-[11px] font-bold text-[#111] mb-1">Today</p>
              <h4 class="text-base font-bold text-[#111] mb-2">A Stronger Tomorrow</h4>
              <p class="text-sm text-gray-500 leading-relaxed">Continuing to innovate, educate and empower for a brighter financial future.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
    <!-- Right image area -->
    <div class="hidden lg:block w-[40%] bg-cover bg-center" style="background-image: url('./images/office-lobby.jpg'); min-height: 100%;">
    </div>
  </section>

  <!-- Bottom Section: Mission & Vision -->
  <section class="dark-section py-24 px-6 lg:px-12 text-white">
    <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
      
      <!-- Mission -->
      <div class="lg:col-span-4 pr-0 lg:pr-8">
        <p class="text-[#bfa254] font-semibold tracking-[0.2em] text-[10px] mb-6 uppercase">Our Mission</p>
        <h2 class="serif-font text-4xl lg:text-4xl font-bold text-[#e5c158] leading-tight mb-8">
          Empower People<br/>to Build Better<br/>Financial Futures
        </h2>
        <p class="text-gray-400 text-sm leading-relaxed">
          We combine expertise, technology and a deep understanding of our clients' needs to create personalized financial solutions that stand the test of time.
        </p>
      </div>
      
      <!-- Values Grid -->
      <div class="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        
        <div class="bg-[#121318] p-8 border border-white/5">
          <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#e5c158] mb-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </div>
          <h4 class="text-sm font-bold text-gray-200 mb-1">Client First</h4>
          <p class="text-xs text-gray-500">Your goals always come first.</p>
        </div>
        
        <div class="bg-[#121318] p-8 border border-white/5">
          <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#e5c158] mb-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h4 class="text-sm font-bold text-gray-200 mb-1">Integrity</h4>
          <p class="text-xs text-gray-500">Honest advice. Always.</p>
        </div>
        
        <div class="bg-[#121318] p-8 border border-white/5">
          <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#e5c158] mb-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
          </div>
          <h4 class="text-sm font-bold text-gray-200 mb-1">Long-Term Thinking</h4>
          <p class="text-xs text-gray-500">Focused on what truly matters.</p>
        </div>
        
        <div class="bg-[#121318] p-8 border border-white/5">
          <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#e5c158] mb-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <h4 class="text-sm font-bold text-gray-200 mb-1">Access for All</h4>
          <p class="text-xs text-gray-500">Expert guidance for a brighter India.</p>
        </div>
        
      </div>
      
      <!-- Vision -->
      <div class="lg:col-span-3 pl-0 lg:pl-8">
        <p class="text-[#bfa254] font-semibold tracking-[0.2em] text-[10px] mb-6 uppercase">Our Vision</p>
        <h2 class="serif-font text-3xl lg:text-3xl font-bold text-[#e5c158] leading-tight mb-8">
          A Financially<br/>Confident India
        </h2>
        <p class="text-gray-400 text-sm leading-relaxed">
          We envision a future where every individual and family in India has the knowledge, confidence and support to make sound financial decisions and achieve their dreams.
        </p>
      </div>
      
    </div>
  </section>

</body>
</html>`;
fs.writeFileSync('d:/MIMAG-Finance/about.html', htmlContent);
