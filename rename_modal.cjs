const fs = require('fs');

function renameModal(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('id="serviceModal" class="fixed inset-0')) {
    content = content.replace(/id="serviceModal" class="fixed inset-0/g, 'id="fvServiceModal" class="fixed inset-0');
    content = content.replace(/document\.getElementById\('serviceModal'\)/g, "document.getElementById('fvServiceModal')");
    fs.writeFileSync(filePath, content);
    console.log('Renamed modal in ' + filePath);
  } else {
    console.log('Could not find new modal in ' + filePath);
  }
}

['index.html', 'insights.html', 'contact.html'].forEach(renameModal);
