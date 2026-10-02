const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

const startMarker = '<!-- ═══ FINVISTA PRIVATE CLIENT (FAMILY OFFICE) ═══ -->';
const endMarker = '<!-- ═══ PLATFORM MOCKUP ═══ -->';

const startIndex = appJs.indexOf(startMarker);
const endIndex = appJs.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newSection = `${startMarker}
  <section class="sec" style="background-color: #F8F6F0; color: #1A1A1A; padding: 80px 0; font-family: 'Inter', sans-serif;">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div class="mb-12 text-center md:text-left">
            <h2 class="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style="color: #B58E58;">FINVISTA PRIVATE CLIENT</h2>
            <h1 class="text-4xl md:text-5xl font-serif font-medium mb-4" style="color: #1A1A1A;">Comprehensive Family Office Services</h1>
            <p class="max-w-2xl text-sm md:text-base leading-relaxed" style="color: #555555;">
                Strategic governance and bespoke architectural design for multi-generational wealth accumulation, preservation, and transfer.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div class="md:col-span-2 lg:col-span-1 lg:row-span-2 light-glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-[#B58E58]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between cursor-default">
                
                <!-- Ambient Glow effect inside card -->
                <div class="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[80px] group-hover:bg-[#B58E58]/10 transition-colors duration-700 pointer-events-none" style="background-color: rgba(181, 142, 88, 0.05);"></div>

                <div>
                    <!-- Icon / Graphic -->
                    <div class="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center mb-8 group-hover:border-[#B58E58]/30 transition-colors duration-500 shadow-sm">
                        <svg class="w-8 h-8" style="color: #B58E58;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6v7H9v-7z" />
                        </svg>
                    </div>

                    <h3 class="text-3xl lg:text-4xl font-serif font-medium mb-4 leading-tight group-hover:text-[#B58E58] transition-colors duration-300" style="color: #1A1A1A;">
                        Wealth<br>Architecture
                    </h3>
                    <p class="text-sm leading-relaxed mb-8" style="color: #555555;">
                        A holistic framework designed to protect assets across jurisdictions, minimize tax drag, and align liquidity with your legacy objectives.
                    </p>
                </div>

                <!-- Bullet List -->
                <ul class="space-y-4">
                    <li class="flex items-start gap-3">
                        <div class="mt-1 w-1.5 h-1.5 rounded-full" style="background-color: #B58E58; box-shadow: 0 0 4px rgba(181, 142, 88, 0.4);"></div>
                        <span class="text-sm" style="color: #444444;">Liquidity & Cash Flow Planning</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <div class="mt-1 w-1.5 h-1.5 rounded-full" style="background-color: #B58E58; box-shadow: 0 0 4px rgba(181, 142, 88, 0.4);"></div>
                        <span class="text-sm" style="color: #444444;">Estate & Trust Structure Design</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <div class="mt-1 w-1.5 h-1.5 rounded-full" style="background-color: #B58E58; box-shadow: 0 0 4px rgba(181, 142, 88, 0.4);"></div>
                        <span class="text-sm" style="color: #444444;">Strategic Private Equity Access</span>
                    </li>
                </ul>
            </div>

            <div class="light-glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-[#B58E58]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between cursor-default">
                
                <h3 class="text-2xl font-serif font-medium mb-6" style="color: #1A1A1A;">Tax Alpha &<br>Harvesting</h3>
                
                <div class="flex flex-col sm:flex-row items-center gap-6 mt-auto">
                    <!-- Circular Stat Badge -->
                    <div class="relative w-28 h-28 shrink-0 rounded-full border border-black/5 flex flex-col items-center justify-center bg-white group-hover:border-[#B58E58]/30 transition-all duration-500 shadow-sm">
                        <div class="absolute inset-1 rounded-full border border-black/5 border-dashed group-hover:rotate-12 transition-transform duration-700"></div>
                        <span class="text-2xl font-serif font-semibold" style="color: #B58E58;">1.8%</span>
                        <span class="text-[8px] uppercase tracking-widest text-center mt-0.5 leading-tight" style="color: #777777;">Annual Tax<br>Savings</span>
                    </div>

                    <ul class="space-y-2.5">
                        <li class="flex items-center gap-2 text-xs" style="color: #444444;">
                            <svg class="w-3.5 h-3.5" style="color: #B58E58;" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Systematic Loss Harvesting
                        </li>
                        <li class="flex items-center gap-2 text-xs" style="color: #444444;">
                            <svg class="w-3.5 h-3.5" style="color: #B58E58;" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Capital Gains Optimization
                        </li>
                    </ul>
                </div>
            </div>

            <div class="light-glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-[#B58E58]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between cursor-default">
                
                <div class="flex justify-between items-start mb-6">
                    <h3 class="text-2xl font-serif font-medium" style="color: #1A1A1A;">Bespoke<br>Fixed Income</h3>
                    <!-- Minimal Yield Curve Graphic -->
                    <div class="w-10 h-10 shrink-0 transition-colors duration-500" style="color: #B58E58; opacity: 0.8;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 3v18h18" />
                            <path d="M7 16c2-4 4-8 8-10 2-1 4-1 4-1" />
                        </svg>
                    </div>
                </div>

                <div class="mt-auto">
                    <p class="text-sm mb-5 leading-relaxed" style="color: #555555;">
                        Curated debt structures engineered to preserve capital while generating predictable, inflation-beating yields.
                    </p>
                    <ul class="space-y-3 border-t border-black/5 pt-4">
                        <li class="flex items-start gap-3">
                            <div class="mt-1.5 w-1 h-1 rounded-sm" style="background-color: #B58E58;"></div>
                            <span class="text-sm" style="color: #444444;">Sovereign Bond Ladders</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <div class="mt-1.5 w-1 h-1 rounded-sm" style="background-color: #B58E58;"></div>
                            <span class="text-sm" style="color: #444444;">Global Rate Strategy</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="md:col-span-2 light-glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-[#B58E58]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
                
                <!-- Background decorative line art -->
                <div class="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                    <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="50" r="150" stroke="#B58E58" stroke-width="1"/>
                        <circle cx="200" cy="50" r="100" stroke="#B58E58" stroke-width="1"/>
                    </svg>
                </div>

                <div class="max-w-lg relative z-10 text-center sm:text-left">
                    <h3 class="text-2xl lg:text-3xl font-serif font-medium mb-3" style="color: #1A1A1A;">Institutional Governance</h3>
                    <p class="text-sm leading-relaxed" style="color: #555555;">
                        Discreet, clean-line strategies ensuring smooth generational transitions. Our fiduciary structure guarantees objective advice completely free of product-pushing conflicts.
                    </p>
                </div>

                <!-- CTA Button -->
                <a href="#contact" class="relative z-10 shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full hover:scale-105 transition-all duration-300" style="background-color: #1A1A1A; color: #FFFFFF; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    Schedule Family Consultation
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>

        </div>
    </div>
  </section>
  
  `;
  
  appJs = appJs.substring(0, startIndex) + newSection + appJs.substring(endIndex);
  fs.writeFileSync('app.js', appJs);
  console.log("Re-themed Family Office section in app.js");
} else {
  console.log("Could not find markers in app.js");
}

let stylesCss = fs.readFileSync('styles.css', 'utf8');
if (!stylesCss.includes('.light-glass-card')) {
  stylesCss += `\n\n.light-glass-card {
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
}\n`;
  fs.writeFileSync('styles.css', stylesCss);
  console.log("Added .light-glass-card to styles.css");
}
