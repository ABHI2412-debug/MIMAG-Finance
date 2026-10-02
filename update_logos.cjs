const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'stocks.html');
let html = fs.readFileSync(filePath, 'utf8');

// The replacement logic: we will search for the specific <td> containing the logos and replace their inner HTML.

// 1. RELIANCE (Top table & Selected view)
const relLogo = `<div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/120px-Reliance_Industries_Logo.svg.png" class="w-5 object-contain" alt="RIL"></div>`;
html = html.replace(/<img src="https:\/\/logo\.uplead\.com\/ril\.com"[^>]*>\s*RELIANCE/, `${relLogo}\n                  RELIANCE`);
// For the selected stock view
html = html.replace(/<img src="https:\/\/logo\.uplead\.com\/ril\.com"[^>]*>/, relLogo);

// 2. TCS
const tcsLogo = `<div class="w-8 h-8 rounded-full bg-[#e0ebf9] text-[#2563eb] border border-blue-100 flex items-center justify-center text-[10px] font-bold shrink-0">TCS</div>`;
html = html.replace(/<div class="w-6 h-6 rounded-full bg-blue-100 text-blue-700[^>]*>TCS<\/div>\s*TCS/, `${tcsLogo}\n                  TCS`);

// 3. HDFCBANK
const hdfcLogo = `<div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                    <svg viewBox="0 0 24 24" class="w-4 h-4">
                      <rect x="3" y="3" width="18" height="18" fill="none" stroke="#004b87" stroke-width="3"/>
                      <rect x="8" y="8" width="8" height="8" fill="#ed232a"/>
                    </svg>
                  </div>`;
html = html.replace(/<img src="https:\/\/logo\.uplead\.com\/hdfcbank\.com"[^>]*>\s*HDFCBANK/, `${hdfcLogo}\n                  HDFCBANK`);

// 4. ICICIBANK
const iciciLogo = `<div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                     <div class="w-5 h-5 rounded-full bg-[#f26522] flex items-center justify-center">
                       <span class="text-white text-[9px] font-bold leading-none mt-px">i</span>
                     </div>
                   </div>`;
html = html.replace(/<img src="https:\/\/logo\.uplead\.com\/icicibank\.com"[^>]*>\s*ICICIBANK/, `${iciciLogo}\n                  ICICIBANK`);

// 5. INFY
const infyLogo = `<div class="w-8 h-8 rounded-full bg-[#2563eb] text-white border border-blue-600 flex items-center justify-center text-[9px] font-bold tracking-wider shrink-0">INFY</div>`;
html = html.replace(/<div class="w-6 h-6 rounded-full bg-blue-600[^>]*>INFY<\/div>\s*INFY/, `${infyLogo}\n                  INFY`);

// 6. SBIN
const sbiLogo = `<div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                   <svg viewBox="0 0 100 100" class="w-5 h-5 text-[#0060A9]" fill="currentColor">
                     <path d="M50 0a50 50 0 100 100 50 50 0 000-100zm0 42a13 13 0 110 26 13 13 0 010-26zm-7 26h14v25H43V68z" fill-rule="evenodd"/>
                   </svg>
                 </div>`;
html = html.replace(/<img src="https:\/\/logo\.uplead\.com\/sbi\.co\.in"[^>]*>\s*SBIN/, `${sbiLogo}\n                  SBIN`);

// 7. BHARTIARTL
const bhartiLogo = `<div class="w-8 h-8 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-[12px] font-bold shadow-sm shrink-0">A</div>`;
html = html.replace(/<div class="w-6 h-6 rounded-full bg-red-600[^>]*>A<\/div>\s*BHARTIARTL/, `${bhartiLogo}\n                  BHARTIARTL`);

// 8. ITC
const itcLogo = `<div class="w-8 h-8 rounded-full bg-white text-gray-900 border border-gray-200 flex items-center justify-center text-[10px] font-bold shadow-sm shrink-0">ITC</div>`;
html = html.replace(/<div class="w-6 h-6 rounded-full bg-slate-100[^>]*>ITC<\/div>\s*ITC/, `${itcLogo}\n                  ITC`);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Logos successfully updated!');
