const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'stocks.html');
let html = fs.readFileSync(filePath, 'utf8');

// The replacement logic: we will search for the specific <td> containing the logos and replace their inner HTML.
// I'll use regex to replace everything inside the first <td class="... font-bold text-gray-900 ..."> up to the company name text.

// 1. RELIANCE (Top table & Selected view)
const relLogo = `<div class="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-[10px] font-bold shrink-0">RIL</div>`;
// Replace in table:
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?RELIANCE\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${relLogo}\n                  RELIANCE\n                </td>`);
// Replace in selected view (Reliance Industries in the top right):
html = html.replace(/<div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">[\s\S]*?<\/div>/, relLogo);


// 2. TCS
const tcsLogo = `<div class="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0">TCS</div>`;
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?TCS\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${tcsLogo}\n                  TCS\n                </td>`);

// 3. HDFCBANK
const hdfcLogo = `<div class="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" class="w-4 h-4">
                      <path d="M2 2h20v4H6v14H2z" fill="#004C8F"/>
                      <path d="M22 22H2v-4h16V4h4z" fill="#ED2024"/>
                      <rect x="8" y="8" width="8" height="8" fill="#ED2024"/>
                    </svg>
                  </div>`;
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?HDFCBANK\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${hdfcLogo}\n                  HDFCBANK\n                </td>`);

// 4. ICICIBANK
const iciciLogo = `<div class="w-8 h-8 rounded-full bg-[#F26522] text-white flex items-center justify-center text-[13px] font-bold shrink-0">i</div>`;
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?ICICIBANK\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${iciciLogo}\n                  ICICIBANK\n                </td>`);

// 5. INFY
const infyLogo = `<div class="w-8 h-8 rounded-full bg-[#0052CC] text-white flex items-center justify-center text-[9px] font-bold shrink-0 tracking-wide">INFY</div>`;
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?INFY\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${infyLogo}\n                  INFY\n                </td>`);

// 6. SBIN
const sbiLogo = `<div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                   <svg viewBox="0 0 100 100" class="w-8 h-8 text-[#0060A9]" fill="currentColor">
                     <path d="M50 0a50 50 0 100 100 50 50 0 000-100zm0 40a15 15 0 110 30 15 15 0 010-30zm-7 30h14v20H43V70z" fill-rule="evenodd"/>
                   </svg>
                 </div>`;
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?SBIN\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${sbiLogo}\n                  SBIN\n                </td>`);

// 7. BHARTIARTL
const bhartiLogo = `<div class="w-8 h-8 rounded-full bg-[#E5261F] text-white flex items-center justify-center text-[13px] font-bold shrink-0">A</div>`;
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?BHARTIARTL\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${bhartiLogo}\n                  BHARTIARTL\n                </td>`);

// 8. ITC
const itcLogo = `<div class="w-8 h-8 rounded-full bg-white text-gray-800 border border-gray-200 flex items-center justify-center text-[10px] font-bold shrink-0">ITC</div>`;
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?ITC\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${itcLogo}\n                  ITC\n                </td>`);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Logos exact match updated!');
