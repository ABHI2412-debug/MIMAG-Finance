const fs = require('fs');

// 1. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Add new colors
indexHtml = indexHtml.replace(
  "finTextMuted: '#68645C',",
  "finTextMuted: '#68645C',\n            obsidian: '#121212',\n            charcoal: '#1a1a1a',\n            charcoalLight: '#242424',\n            amber: '#E5A93C',\n            amberLight: '#F3C56E',\n            champagne: '#FAF8F5',\n            champagneMuted: '#D1CCC3',"
);

// Add box-shadow (if extend object ends, we insert before the end of extend)
if (!indexHtml.includes('boxShadow: {')) {
  indexHtml = indexHtml.replace(
    /extend: \{([\s\S]*?)fontFamily: \{/,
    `extend: {$1boxShadow: {
            'gold-glow': '0 0 40px -10px rgba(229, 169, 60, 0.15)',
            'gold-glow-strong': '0 0 50px -10px rgba(229, 169, 60, 0.25)',
          },\n          fontFamily: {`
  );
}
fs.writeFileSync('index.html', indexHtml);

// 2. Update styles.css
let stylesCss = fs.readFileSync('styles.css', 'utf8');
if (!stylesCss.includes('.glass-card')) {
  stylesCss += `\n\n/* --- FinVista Private Client / Family Office --- */
.glass-card {
    background: linear-gradient(145deg, #1a1a1a 0%, #121212 100%);
    border: 1px solid rgba(250, 248, 245, 0.05);
}

.gold-gradient-text {
    background: linear-gradient(135deg, #F3C56E 0%, #E5A93C 50%, #C78D24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gold-gradient-bg {
    background: linear-gradient(135deg, #F3C56E 0%, #E5A93C 50%, #C78D24 100%);
}\n`;
  fs.writeFileSync('styles.css', stylesCss);
}

// 3. Update app.js
const familyOfficeHtml = `
  <!-- ═══ FINVISTA PRIVATE CLIENT (FAMILY OFFICE) ═══ -->
  <section class="sec" style="background-color: var(--obsidian); color: var(--champagne); padding: 80px 0; font-family: 'Inter', sans-serif;">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div class="mb-12 text-center md:text-left">
            <h2 class="text-xs font-semibold tracking-[0.2em] text-amber uppercase mb-3" style="color: #E5A93C;">FinVista Private Client</h2>
            <h1 class="text-4xl md:text-5xl font-serif font-medium text-champagne mb-4" style="color: #FAF8F5;">Comprehensive Family Office Services</h1>
            <p class="text-champagneMuted max-w-2xl text-sm md:text-base leading-relaxed" style="color: #D1CCC3;">
                Strategic governance and bespoke architectural design for multi-generational wealth accumulation, preservation, and transfer.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div class="md:col-span-2 lg:col-span-1 lg:row-span-2 glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-amber/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow flex flex-col justify-between cursor-default">
                
                <!-- Ambient Glow effect inside card -->
                <div class="absolute -top-32 -right-32 w-80 h-80 bg-amber/10 rounded-full blur-[80px] group-hover:bg-amber/20 transition-colors duration-700 pointer-events-none"></div>

                <div>
                    <!-- Icon / Graphic -->
                    <div class="w-16 h-16 rounded-2xl bg-charcoalLight border border-white/5 flex items-center justify-center mb-8 group-hover:border-amber/30 transition-colors duration-500 shadow-lg">
                        <svg class="w-8 h-8 text-amber" style="color: #E5A93C;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6v7H9v-7z" />
                        </svg>
                    </div>

                    <h3 class="text-3xl lg:text-4xl font-serif font-medium mb-4 leading-tight group-hover:text-amber transition-colors duration-300">
                        Wealth<br>Architecture
                    </h3>
                    <p class="text-sm text-champagneMuted leading-relaxed mb-8" style="color: #D1CCC3;">
                        A holistic framework designed to protect assets across jurisdictions, minimize tax drag, and align liquidity with your legacy objectives.
                    </p>
                </div>

                <!-- Bullet List -->
                <ul class="space-y-4">
                    <li class="flex items-start gap-3">
                        <div class="mt-1 w-1.5 h-1.5 rounded-full bg-amber shadow-[0_0_8px_rgba(229,169,60,0.8)]" style="background-color: #E5A93C;"></div>
                        <span class="text-sm text-champagne/90" style="color: rgba(250,248,245,0.9);">Liquidity & Cash Flow Planning</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <div class="mt-1 w-1.5 h-1.5 rounded-full bg-amber shadow-[0_0_8px_rgba(229,169,60,0.8)]" style="background-color: #E5A93C;"></div>
                        <span class="text-sm text-champagne/90" style="color: rgba(250,248,245,0.9);">Estate & Trust Structure Design</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <div class="mt-1 w-1.5 h-1.5 rounded-full bg-amber shadow-[0_0_8px_rgba(229,169,60,0.8)]" style="background-color: #E5A93C;"></div>
                        <span class="text-sm text-champagne/90" style="color: rgba(250,248,245,0.9);">Strategic Private Equity Access</span>
                    </li>
                </ul>
            </div>

            <div class="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-amber/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow flex flex-col justify-between cursor-default">
                
                <h3 class="text-2xl font-serif font-medium mb-6">Tax Alpha &<br>Harvesting</h3>
                
                <div class="flex flex-col sm:flex-row items-center gap-6 mt-auto">
                    <!-- Circular Stat Badge -->
                    <div class="relative w-28 h-28 shrink-0 rounded-full border border-amber/20 flex flex-col items-center justify-center bg-gradient-to-br from-charcoalLight to-obsidian group-hover:border-amber transition-all duration-500 group-hover:shadow-[inset_0_0_20px_rgba(229,169,60,0.1)]">
                        <div class="absolute inset-1 rounded-full border border-amber/5 border-dashed group-hover:rotate-12 transition-transform duration-700"></div>
                        <span class="text-2xl font-serif font-semibold text-amber" style="color: #E5A93C;">1.8%</span>
                        <span class="text-[8px] uppercase tracking-widest text-champagneMuted text-center mt-0.5 leading-tight" style="color: #D1CCC3;">Annual Tax<br>Savings</span>
                    </div>

                    <ul class="space-y-2.5">
                        <li class="flex items-center gap-2 text-xs text-champagne/80" style="color: rgba(250,248,245,0.8);">
                            <svg class="w-3.5 h-3.5 text-amber" style="color: #E5A93C;" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Systematic Loss Harvesting
                        </li>
                        <li class="flex items-center gap-2 text-xs text-champagne/80" style="color: rgba(250,248,245,0.8);">
                            <svg class="w-3.5 h-3.5 text-amber" style="color: #E5A93C;" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Capital Gains Optimization
                        </li>
                    </ul>
                </div>
            </div>

            <div class="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-amber/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow flex flex-col justify-between cursor-default">
                
                <div class="flex justify-between items-start mb-6">
                    <h3 class="text-2xl font-serif font-medium">Bespoke<br>Fixed Income</h3>
                    <!-- Minimal Yield Curve Graphic -->
                    <div class="w-10 h-10 shrink-0 text-amber/60 group-hover:text-amber transition-colors duration-500">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 3v18h18" />
                            <path d="M7 16c2-4 4-8 8-10 2-1 4-1 4-1" />
                        </svg>
                    </div>
                </div>

                <div class="mt-auto">
                    <p class="text-sm text-champagneMuted mb-5 leading-relaxed" style="color: #D1CCC3;">
                        Curated debt structures engineered to preserve capital while generating predictable, inflation-beating yields.
                    </p>
                    <ul class="space-y-3 border-t border-white/5 pt-4">
                        <li class="flex items-start gap-3">
                            <div class="mt-1.5 w-1 h-1 rounded-sm bg-amber" style="background-color: #E5A93C;"></div>
                            <span class="text-sm text-champagne/90" style="color: rgba(250,248,245,0.9);">Sovereign Bond Ladders</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <div class="mt-1.5 w-1 h-1 rounded-sm bg-amber" style="background-color: #E5A93C;"></div>
                            <span class="text-sm text-champagne/90" style="color: rgba(250,248,245,0.9);">Global Rate Strategy</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="md:col-span-2 glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-amber/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
                
                <!-- Background decorative line art -->
                <div class="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                    <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="50" r="150" stroke="#E5A93C" stroke-width="1"/>
                        <circle cx="200" cy="50" r="100" stroke="#E5A93C" stroke-width="1"/>
                    </svg>
                </div>

                <div class="max-w-lg relative z-10 text-center sm:text-left">
                    <h3 class="text-2xl lg:text-3xl font-serif font-medium mb-3">Institutional Governance</h3>
                    <p class="text-sm text-champagneMuted leading-relaxed" style="color: #D1CCC3;">
                        Discreet, clean-line strategies ensuring smooth generational transitions. Our fiduciary structure guarantees objective advice completely free of product-pushing conflicts.
                    </p>
                </div>

                <!-- CTA Button -->
                <a href="#contact" class="relative z-10 shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 gold-gradient-bg text-obsidian text-sm font-semibold rounded-full hover:scale-105 hover:shadow-gold-glow-strong transition-all duration-300" style="color: #121212;">
                    Schedule Family Consultation
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>

        </div>
    </div>
  </section>
`;

let appJs = fs.readFileSync('app.js', 'utf8');

// Insert it between Global Perspective and Platform Mockup.
// Global Perspective section ends with:
//   </section>
// 
//   <!-- ═══ PLATFORM MOCKUP ═══ -->
if (appJs.includes('<!-- ═══ PLATFORM MOCKUP ═══ -->')) {
  appJs = appJs.replace(
    '<!-- ═══ PLATFORM MOCKUP ═══ -->',
    familyOfficeHtml + '\n\n  <!-- ═══ PLATFORM MOCKUP ═══ -->'
  );
  fs.writeFileSync('app.js', appJs);
  console.log('Successfully injected Family Office section into app.js');
} else {
  console.log('Failed to find insertion point in app.js');
}
