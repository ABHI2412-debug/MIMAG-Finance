const fs = require('fs');

const loaderHtml = `
  <!-- LOADER OVERLAY -->
  <div class="loader-overlay" id="pageLoader">
    <div class="typewriter">
      <div class="slide"><i></i></div>
      <div class="paper"></div>
      <div class="keyboard"></div>
    </div>
  </div>
`;

const hideLoaderScript = `
  <script>
    window.addEventListener('load', () => {
      const loader = document.getElementById('pageLoader');
      if (loader) {
        loader.classList.add('hidden');
      }
    });
  </script>
`;

['index.html', 'insights.html', 'contact.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('id="pageLoader"')) {
    content = content.replace(/<body.*?>/, match => match + '\n' + loaderHtml + hideLoaderScript);
    fs.writeFileSync(file, content);
    console.log('Injected loader into', file);
  } else {
    console.log('Loader already in', file);
  }
});
