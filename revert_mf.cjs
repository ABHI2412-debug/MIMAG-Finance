const fs = require('fs');
const path = require('path');

const originalFile = fs.readFileSync(path.join('d:/MIMAG-Finance', 'create_mf.cjs'), 'utf8');
const updatedFile = fs.readFileSync(path.join('d:/MIMAG-Finance', 'create_mf2.cjs'), 'utf8');

// Extract header from original
const headerStart = originalFile.indexOf('<header');
const headerEnd = originalFile.indexOf('</header>') + 9;
const originalHeader = originalFile.substring(headerStart, headerEnd);

// Extract main content from updated (everything after header to </body>)
const mainStart = updatedFile.indexOf('<section class="relative w-full overflow-hidden"');
const mainEnd = updatedFile.indexOf('</body>');
const updatedMain = updatedFile.substring(mainStart, mainEnd);

// Reconstruct file
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mutual Funds | FinVista</title>
  <link rel="stylesheet" href="./styles.css" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif !important; background-color: #f8fafc !important; background-image: none !important; margin: 0; }
  </style>
</head>
<body class="text-[#1A1F36] antialiased">

  ${originalHeader}

  ${updatedMain}
</body>
</html>
`;

fs.writeFileSync(path.join('d:/MIMAG-Finance', 'mutual-funds.html'), htmlContent, 'utf8');
