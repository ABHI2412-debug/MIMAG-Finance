const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'stocks.html');
let html = fs.readFileSync(filePath, 'utf8');

const relLogo = `<div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/120px-Reliance_Industries_Logo.svg.png" class="w-8 h-8 object-contain" alt="RIL"></div>`;
const tcsLogo = `<div class="w-8 h-8 rounded-full bg-[#0055D4] text-white flex items-center justify-center text-[10px] font-bold font-sans tracking-tight shrink-0">TCS</div>`;
const hdfcLogo = `<div class="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0"><svg viewBox="0 0 24 24" class="w-4 h-4"><path d="M2 2h20v4H6v14H2z" fill="#004C8F"/><path d="M22 22H2v-4h16V4h4z" fill="#ED2024"/><rect x="8" y="8" width="8" height="8" fill="#ED2024"/></svg></div>`;
const iciciLogo = `<div class="w-8 h-8 rounded-full bg-[#B21C26] text-white flex items-center justify-center text-[16px] font-bold font-serif shrink-0 italic leading-none pt-0.5">i</div>`;
const infyLogo = `<div class="w-8 h-8 rounded-full bg-[#0070c0] flex items-center justify-center shrink-0 overflow-hidden px-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png" class="w-full object-contain" style="filter: brightness(0) invert(1);" alt="Infosys"></div>`;
const sbiLogo = `<div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 relative overflow-hidden"><svg viewBox="0 0 100 100" class="w-full h-full"><circle cx="50" cy="50" r="50" fill="#140a8a" /><circle cx="50" cy="50" r="33" fill="#00d5ff" /><circle cx="50" cy="50" r="11" fill="#140a8a" /><rect x="44.5" y="50" width="11" height="35" fill="#140a8a" /></svg></div>`;
const airtelLogo = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Airtel_logo.svg/200px-Airtel_logo.svg.png" class="w-8 h-8 rounded-full object-contain shrink-0 bg-white" alt="Airtel">`;
const itcLogo = `<div class="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 p-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/200px-ITC_Limited_Logo.svg.png" class="w-full h-full object-contain" alt="ITC"></div>`;

html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?RELIANCE\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${relLogo}\n                  RELIANCE\n                </td>`);
html = html.replace(/<div class="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center text-\[10px\] font-bold shrink-0">RIL<\/div>/, relLogo);

html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?TCS\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${tcsLogo}\n                  TCS\n                </td>`);
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?HDFCBANK\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${hdfcLogo}\n                  HDFCBANK\n                </td>`);
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?ICICIBANK\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${iciciLogo}\n                  ICICIBANK\n                </td>`);
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?INFY\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${infyLogo}\n                  INFY\n                </td>`);
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?SBIN\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${sbiLogo}\n                  SBIN\n                </td>`);
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?BHARTIARTL\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${airtelLogo}\n                  BHARTIARTL\n                </td>`);
html = html.replace(/<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">[\s\S]*?ITC\s*<\/td>/, `<td class="py-5 text-xs font-bold text-gray-900 flex items-center gap-2">\n                  ${itcLogo}\n                  ITC\n                </td>`);

fs.writeFileSync(filePath, html, 'utf8');
console.log('All 8 exact logos updated.');
