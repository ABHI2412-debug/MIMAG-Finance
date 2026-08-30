import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname);
const output = resolve(root, 'public');

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of ['index.html', 'app.js', 'globe.js', 'styles.css']) {
  cpSync(resolve(root, file), resolve(output, file));
}

cpSync(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });

cpSync(
  resolve(root, 'node_modules/three/build/three.module.js'),
  resolve(output, 'three.module.js')
);
cpSync(
  resolve(root, 'node_modules/three/build/three.core.js'),
  resolve(output, 'three.core.js')
);
console.log('MIMAG Finance static build written to public/.');
