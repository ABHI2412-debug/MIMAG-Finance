const fs = require('fs');

const files = ['index.html', 'about.html', 'mutual-funds.html', 'stocks.html', 'insights.html', 'contact.html'];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix Book a Consultation button wrapping
    // We'll just add whitespace-nowrap to any button containing "Book a Consultation" that doesn't already have it
    content = content.replace(/(class="[^"]*)(bg-\[#E5A93C\][^"]*)(" href="[^"]*">Book a Consultation)/g, (match, p1, p2, p3) => {
      if (!p2.includes('whitespace-nowrap')) {
        return p1 + p2 + ' whitespace-nowrap' + p3;
      }
      return match;
    });

    // Also update the hero background in about.html to be MUCH darker
    if (file === 'about.html') {
      content = content.replace(/linear-gradient\(to right, rgba[^)]+\), url/g, "linear-gradient(to right, rgba(12, 13, 16, 0.95) 0%, rgba(12, 13, 16, 0.75) 100%), url");
    }

    fs.writeFileSync(file, content, 'utf8');
  }
}
