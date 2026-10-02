const fs = require('fs');
const styles = fs.readFileSync('styles.css', 'utf8');

styles.split('\n').forEach((l, i) => {
  if (l.includes('.wp-card')) {
    console.log(`${i+1}: ${l}`);
  }
});
