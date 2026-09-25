import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(import.meta.url), '..');
const output = resolve(root, 'public');

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

const filesToCopy = [
  'index.html',
  'insights.html',
  'contact.html',
  'archive.html',
  'app.js',
  'globe.js',
  'styles.css',
  'contact.css',
  'loader.css',
  'styles-extended.css',
  'responsive-additions.css',
  'market-data.js'
];

for (const file of filesToCopy) {
  const src = resolve(root, file);
  if (existsSync(src)) {
    cpSync(src, resolve(output, file));
  }
}

if (existsSync(resolve(root, 'assets'))) {
  cpSync(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });
}

if (existsSync(resolve(root, 'images'))) {
  cpSync(resolve(root, 'images'), resolve(output, 'images'), { recursive: true });
}

const threeJs = resolve(root, 'node_modules/three/build/three.module.js');
if (existsSync(threeJs)) {
  cpSync(threeJs, resolve(output, 'three.module.js'));
}

console.log('MIMAG Finance static build written to public/.');
