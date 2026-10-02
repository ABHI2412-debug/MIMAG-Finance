const fs = require('fs');

const targetStr = `<button class="dropdown-trigger flex items-center gap-1.5 transition-colors group-hover:text-[#E5A93C]" style="text-decoration:none; background:none; border:none; padding:0; font:inherit; cursor:pointer;">
      Our Services
      <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
  </button>`;

const replacementStr = `<a href="javascript:void(0)" class="dropdown-trigger flex items-center gap-1.5 transition-colors group-hover:text-[#E5A93C]" style="text-decoration:none;">
      Our Services
      <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
  </a>`;

function fixTrigger(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(filePath, content);
    console.log('Fixed trigger in ' + filePath);
  } else {
    console.log('Could not find trigger block in ' + filePath);
  }
}

['app.js', 'insights.html', 'contact.html'].forEach(fixTrigger);
