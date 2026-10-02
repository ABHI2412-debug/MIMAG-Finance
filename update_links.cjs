const fs = require('fs');

const files = ['index.html', 'mutual-funds.html', 'stocks.html', 'insights.html', 'contact.html'];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // The navbar link currently says:
    // <a href="index.html#top" class="text-white/70 hover:text-[#E5A93C] font-semibold text-sm px-6 py-2 transition-colors">About Us</a>
    content = content.replace(/href="index\.html#top"([^>]*>About Us<\/a>)/g, 'href="about.html"$1');
    fs.writeFileSync(file, content, 'utf8');
  }
}
