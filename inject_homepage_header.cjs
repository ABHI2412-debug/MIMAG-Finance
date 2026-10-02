const fs = require('fs');

const appJs = fs.readFileSync('d:\\MIMAG-Finance\\app.js', 'utf-8');
const stocksHtml = fs.readFileSync('d:\\MIMAG-Finance\\stocks.html', 'utf-8');

// Extract header from app.js
const headerStart = appJs.indexOf('<header class="hdr">');
const headerEnd = appJs.indexOf('</header>', headerStart) + '</header>'.length;
let headerHtml = appJs.substring(headerStart, headerEnd);

// If the dropdown in app.js has javascript onclicks for the modal, we might need to include that logic, but the user just wants it to look the same.
// For now, let's just insert the HTML.

// Find the Top Nav block in stocks.html
const topNavStart = stocksHtml.indexOf('<!-- Top Nav -->');
const topNavEnd = stocksHtml.indexOf('</header>', topNavStart) + '</header>'.length;

let newStocksHtml = stocksHtml.substring(0, topNavStart) + headerHtml + '\n' + stocksHtml.substring(topNavEnd);

// Add styles.css to head if not present
if (!newStocksHtml.includes('styles.css')) {
    newStocksHtml = newStocksHtml.replace('</title>', '</title>\n  <link rel="stylesheet" href="./styles.css" />');
}

// Make sure styles.css doesn't ruin the background of the dashboard by wrapping the dashboard in a special id and resetting in styles, OR just using an inline style with !important.
// Wait, styles.css body has: body { background: var(--cream); }
// stocks.html has: body { background-color: #f6f8fb; }
// Since stocks.html inline style is defined after styles.css, it should override it automatically! (Actually, inline <style> comes after <link> if we put it there).
newStocksHtml = newStocksHtml.replace(
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="./styles.css" />'
);

// We should also remove the wrapper from the header so it goes full width?
// No, the homepage header in app.js is already absolute/sticky and full width! Wait, if we put it INSIDE `<div class="max-w-[1440px] mx-auto p-4 md:p-6 flex flex-col gap-5">`, it will be constrained!
// We need to move the header OUTSIDE that div.

// Remove the extracted header from inside the max-w div
newStocksHtml = newStocksHtml.replace(headerHtml + '\n', '');

// Find the start of the body/wrapper
const wrapperStart = newStocksHtml.indexOf('<div class="max-w-[1440px]');
// Insert the header BEFORE the wrapper
newStocksHtml = newStocksHtml.substring(0, wrapperStart) + headerHtml + '\n\n  ' + newStocksHtml.substring(wrapperStart);

// One tiny detail: the homepage header uses `id="top"`. Let's just leave it as is.
fs.writeFileSync('d:\\MIMAG-Finance\\stocks.html', newStocksHtml);
console.log('Header injected successfully!');
