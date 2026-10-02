const fs = require('fs');

let content = fs.readFileSync('d:/MIMAG-Finance/about.html', 'utf8');

const newSection = `  <!-- Middle Section: Our Story -->
  <section class="bg-[#fdfbf8] py-24 px-6 lg:px-12">
    <div class="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
      
      <!-- Left text area -->
      <div class="w-full lg:w-[55%] flex flex-col justify-center">
        <p class="text-[#cda34f] font-semibold tracking-[0.2em] text-[11px] mb-4 uppercase">Our Story</p>
        <h2 class="serif-font text-4xl lg:text-5xl font-bold text-[#111] leading-[1.1] mb-6">
          A Deeper Purpose<br/>Than Just Investing
        </h2>
        <p class="text-[#555] text-[15px] leading-relaxed mb-5 pr-0 lg:pr-8">
          FinVista was founded with a simple belief — that everyone in India deserves access to clear, unbiased and goal-oriented financial guidance.
        </p>
        <p class="text-[#555] text-[15px] leading-relaxed mb-8 pr-0 lg:pr-8">
          In a world of complexity, we bring clarity. In a world of noise, we offer perspective. And in a world of short-term thinking, we focus on what truly matters — your long-term financial well-being.
        </p>
        <div>
          <button class="bg-[#f7d070] hover:bg-[#eac058] text-[#111] px-7 py-2.5 rounded-full text-[14px] font-bold transition-colors shadow-sm inline-flex items-center gap-2 whitespace-nowrap">
            Our Journey &rarr;
          </button>
        </div>
      </div>
      
      <!-- Vertical Divider (hidden on mobile) -->
      <div class="hidden lg:block w-[1px] bg-gray-200 self-stretch my-4"></div>
      
      <!-- Timeline -->
      <div class="w-full lg:w-[45%] flex flex-col justify-center gap-12 pl-0 lg:pl-4">
        
        <!-- 2018 -->
        <div class="flex gap-6">
          <div class="shrink-0 mt-1">
            <div class="w-14 h-14 rounded-full border border-[#f3e1b6] flex items-center justify-center text-[#d09a2d] bg-[#fdfaf2]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
          </div>
          <div>
            <p class="text-[13px] font-bold text-[#111] mb-0.5">2018</p>
            <h4 class="text-[17px] font-bold text-[#111] mb-1.5">The Beginning</h4>
            <p class="text-[14.5px] text-[#666] leading-relaxed">Started with a vision to simplify wealth management for every Indian.</p>
          </div>
        </div>
        
        <!-- 2020 -->
        <div class="flex gap-6">
          <div class="shrink-0 mt-1">
            <div class="w-14 h-14 rounded-full border border-[#f3e1b6] flex items-center justify-center text-[#d09a2d] bg-[#fdfaf2]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
            </div>
          </div>
          <div>
            <p class="text-[13px] font-bold text-[#111] mb-0.5">2020</p>
            <h4 class="text-[17px] font-bold text-[#111] mb-1.5">Growing Together</h4>
            <p class="text-[14.5px] text-[#666] leading-relaxed">Expanded our services and helped thousands of families across India.</p>
          </div>
        </div>
        
        <!-- Today -->
        <div class="flex gap-6">
          <div class="shrink-0 mt-1">
            <div class="w-14 h-14 rounded-full border border-[#f3e1b6] flex items-center justify-center text-[#d09a2d] bg-[#fdfaf2]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
          </div>
          <div>
            <p class="text-[13px] font-bold text-[#111] mb-0.5">Today</p>
            <h4 class="text-[17px] font-bold text-[#111] mb-1.5">A Stronger Tomorrow</h4>
            <p class="text-[14.5px] text-[#666] leading-relaxed">Continuing to innovate, educate and empower for a brighter financial future.</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>`;

content = content.replace(/<!-- Middle Section: Our Story -->[\s\S]*?<!-- Bottom Section: Mission & Vision -->/, newSection + '\n\n  <!-- Bottom Section: Mission & Vision -->');

fs.writeFileSync('d:/MIMAG-Finance/about.html', content);
