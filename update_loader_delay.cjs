const fs = require('fs');

['index.html', 'insights.html', 'contact.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const oldScript = `
  <script>
    window.addEventListener('load', () => {
      const loader = document.getElementById('pageLoader');
      if (loader) {
        loader.classList.add('hidden');
      }
    });
  </script>
`;

  const newScript = `
  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loader = document.getElementById('pageLoader');
        if (loader) {
          loader.classList.add('hidden');
        }
      }, 2000);
    });
  </script>
`;

  if (content.includes(oldScript.trim())) {
    content = content.replace(oldScript.trim(), newScript.trim());
    fs.writeFileSync(file, content);
    console.log('Updated loader delay in', file);
  } else {
    console.log('Could not find old script in', file, 'or it is already updated.');
  }
});
