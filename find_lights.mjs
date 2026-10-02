import { Jimp } from 'jimp';

async function findLights() {
  const image = await Jimp.read('assets/journey-mountain.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;

  let lights = [];
  image.scan(0, 0, width, height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Very bright, mostly white/yellow
    if (r > 240 && g > 230 && b < 200) {
      lights.push({x, y, r, g, b});
    }
  });

  // Cluster nearby pixels
  let clusters = [];
  for (let l of lights) {
    let found = false;
    for (let c of clusters) {
      if (Math.abs(l.x - c.x) < 20 && Math.abs(l.y - c.y) < 20) {
        c.x = (c.x * c.count + l.x) / (c.count + 1);
        c.y = (c.y * c.count + l.y) / (c.count + 1);
        c.count++;
        found = true;
        break;
      }
    }
    if (!found) {
      clusters.push({x: l.x, y: l.y, count: 1});
    }
  }

  clusters.sort((a, b) => b.count - a.count);
  for (let i = 0; i < Math.min(10, clusters.length); i++) {
    const c = clusters[i];
    console.log(`Cluster ${i+1}: X=${(c.x / width * 100).toFixed(2)}%, Y=${(c.y / height * 100).toFixed(2)}%, size=${c.count}`);
  }
}

findLights();
