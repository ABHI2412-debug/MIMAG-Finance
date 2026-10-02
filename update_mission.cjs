const fs = require('fs');

let content = fs.readFileSync('d:/MIMAG-Finance/about.html', 'utf8');

const newSection = `  <!-- Bottom Section: Mission & Vision -->
  <section class="bg-[#fdfaf5] py-24 px-6 lg:px-12 border-t border-gray-100">
    <div class="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <!-- Mission -->
      <div class="lg:col-span-4 pr-0 lg:pr-8">
        <p class="text-[#cda34f] font-semibold tracking-[0.2em] text-[11px] mb-6 uppercase">Our Mission</p>
        <h2 class="serif-font text-4xl lg:text-4xl font-bold text-[#111] leading-[1.15] mb-8">
          Empower People<br/>to Build Better<br/>Financial Futures
        </h2>
        <p class="text-[#555] text-[15px] leading-relaxed">
          We combine expertise, technology and a deep understanding of our clients' needs to create personalized financial solutions that stand the test of time.
        </p>
      </div>
      
      <!-- Values Grid -->
      <div class="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        
        <div class="bg-white p-8 hover:bg-[#fcfbf9] transition-colors">
          <div class="w-14 h-14 rounded-full border border-[#f3e1b6] flex items-center justify-center text-[#d09a2d] bg-[#fdfaf2] mb-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </div>
          <h4 class="text-[17px] font-bold text-[#111] mb-1.5">Client First</h4>
          <p class="text-[14px] text-[#666]">Your goals always come first.</p>
        </div>
        
        <div class="bg-white p-8 hover:bg-[#fcfbf9] transition-colors">
          <div class="w-14 h-14 rounded-full border border-[#f3e1b6] flex items-center justify-center text-[#d09a2d] bg-[#fdfaf2] mb-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h4 class="text-[17px] font-bold text-[#111] mb-1.5">Integrity</h4>
          <p class="text-[14px] text-[#666]">Honest advice. Always.</p>
        </div>
        
        <div class="bg-white p-8 hover:bg-[#fcfbf9] transition-colors">
          <div class="w-14 h-14 rounded-full border border-[#f3e1b6] flex items-center justify-center text-[#d09a2d] bg-[#fdfaf2] mb-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
          </div>
          <h4 class="text-[17px] font-bold text-[#111] mb-1.5">Long-Term Thinking</h4>
          <p class="text-[14px] text-[#666]">Focused on what truly matters.</p>
        </div>
        
        <div class="bg-white p-8 hover:bg-[#fcfbf9] transition-colors">
          <div class="w-14 h-14 rounded-full border border-[#f3e1b6] flex items-center justify-center text-[#d09a2d] bg-[#fdfaf2] mb-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <h4 class="text-[17px] font-bold text-[#111] mb-1.5">Access for All</h4>
          <p class="text-[14px] text-[#666]">Expert guidance for a brighter India.</p>
        </div>
        
      </div>
      
      <!-- Vision -->
      <div class="lg:col-span-3 pl-0 lg:pl-8">
        <p class="text-[#cda34f] font-semibold tracking-[0.2em] text-[11px] mb-6 uppercase">Our Vision</p>
        <h2 class="serif-font text-3xl lg:text-3xl font-bold text-[#111] leading-[1.15] mb-8">
          A Financially<br/>Confident India
        </h2>
        <p class="text-[#555] text-[15px] leading-relaxed">
          We envision a future where every individual and family in India has the knowledge, confidence and support to make sound financial decisions and achieve their dreams.
        </p>
      </div>
      
    </div>
  </section>`;

// Replace from <!-- Bottom Section: Mission & Vision --> to the end of the file or </section>
const regex = /<!-- Bottom Section: Mission & Vision -->[\s\S]*?<\/section>/;
content = content.replace(regex, newSection);

fs.writeFileSync('d:/MIMAG-Finance/about.html', content);
