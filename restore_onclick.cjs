const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

// Replace all button data-service with onclick
content = content.replace(/<button data-service="mf"/g, '<button onclick="window.openServiceModal(\'mf\')"');
content = content.replace(/<button data-service="pms"/g, '<button onclick="window.openServiceModal(\'pms\')"');
content = content.replace(/<button data-service="nps"/g, '<button onclick="window.openServiceModal(\'nps\')"');
content = content.replace(/<button data-service="insurance"/g, '<button onclick="window.openServiceModal(\'insurance\')"');
content = content.replace(/<button data-service="estate"/g, '<button onclick="window.openServiceModal(\'estate\')"');
content = content.replace(/<button data-service="overview"/g, '<button onclick="window.openServiceModal(\'overview\')"');

fs.writeFileSync('app.js', content);
console.log('Replaced data-service with onclick in app.js');
