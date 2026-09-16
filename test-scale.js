
import * as THREE from './three.module.js';

const root = new THREE.Group();
root.scale.set(0.01, 0.01, 0.01);
const targetScale = 1;

for (let i = 0; i < 5; i++) {
  root.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), .09);
  console.log(root.scale.x);
}
