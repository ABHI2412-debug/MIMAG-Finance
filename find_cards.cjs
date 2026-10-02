const fs = require('fs');
const app = fs.readFileSync('app.js', 'utf8');
const styles = fs.readFileSync('styles.css', 'utf8');

console.log("APP MATCHES:");
app.split('\n').forEach((l, i) => {
  if (l.includes('Financial Planning') || l.includes('Investments') || l.includes('Insurance')) {
    if (l.length < 250) console.log(`app.js:${i+1} ${l}`);
  }
});

console.log("\nSTYLES MATCHES:");
styles.split('\n').forEach((l, i) => {
  if (l.includes('wp-card') || l.includes('wp-grid') || l.includes('wp-col') || l.includes('wp-') || l.includes('svc-')) {
    if (l.length < 150) console.log(`styles.css:${i+1} ${l}`);
  }
});
