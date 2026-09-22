import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(import.meta.url), '..');
const output = resolve(root, 'public');

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of ['index.html', 'app.js', 'globe.js', 'styles.css', 'market-data.js']) {
  cpSync(resolve(root, file), resolve(output, file));
}

cpSync(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });

cpSync(
  resolve(root, 'node_modules/three/build/three.module.js'),
  resolve(output, 'three.module.js')
);
console.log('MIMAG Finance static build written to public/.');
