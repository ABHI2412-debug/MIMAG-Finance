import * as THREE from "./three.module.js";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const toRadians = (value) => (value * Math.PI) / 180;

function latitudeLongitudeToVector(latitude, longitude, radius) {
  const lat = toRadians(latitude);
  const lon = toRadians(longitude);
  return new THREE.Vector3(
    radius * Math.cos(lat) * Math.sin(lon),
    radius * Math.sin(lat),
    radius * Math.cos(lat) * Math.cos(lon)
  );
}

function insideEllipse(longitude, latitude, centerLongitude, centerLatitude, longitudeRadius, latitudeRadius, rotation = 0) {
  const angle = toRadians(rotation);
  const x = longitude - centerLongitude;
  const y = latitude - centerLatitude;
  const rotatedX = x * Math.cos(angle) - y * Math.sin(angle);
  const rotatedY = x * Math.sin(angle) + y * Math.cos(angle);
  return (rotatedX / longitudeRadius) ** 2 + (rotatedY / latitudeRadius) ** 2 < 1;
}

function isLand(longitude, latitude) {
  const regions = [
    [-103, 47, 35, 26, -12], [-92, 28, 26, 24, 4], [-72, -12, 17, 32, -12],
    [18, 8, 26, 37, 4], [16, 49, 24, 13, 4], [65, 48, 52, 24, 2],
    [91, 27, 27, 23, -7], [111, 10, 32, 28, -10], [135, -25, 17, 12, -4],
    [47, 30, 17, 14, -5], [-42, 74, 15, 10, -8]
  ];
  const noise = Math.sin(longitude * 1.7 + latitude * 2.9) + Math.sin(longitude * 4.1 - latitude * 1.3);
  return regions.some(([lon, lat, lonRadius, latRadius, rotation]) =>
    insideEllipse(longitude, latitude, lon, lat, lonRadius + noise * 1.1, latRadius + noise * 0.9, rotation)
  );
}

function buildGlobePoints(radius) {
  const positions = [];
  const colors = [];
  for (let latitude = -78; latitude <= 80; latitude += 1.45) {
    for (let longitude = -180; longitude < 180; longitude += 1.45) {
      if (!isLand(longitude, latitude)) continue;
      const random = Math.abs(Math.sin(longitude * 12.9898 + latitude * 78.233) * 43758.5453) % 1;
      if (random > 0.41) continue;
      const point = latitudeLongitudeToVector(latitude + (random - .5) * .55, longitude + (random - .5) * .55, radius);
      positions.push(point.x, point.y, point.z);
      const color = new THREE.Color().setHSL(.76 + random * .055, .83, .56 + random * .22);
      colors.push(color.r, color.g, color.b);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ size: .029, vertexColors: true, transparent: true, opacity: .92, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true })
  );
}

function buildOrbit(index, radius) {
  const points = [];
  const start = -Math.PI * (.15 + index * .032);
  const end = start + Math.PI * (1.24 + (index % 3) * .22);
  const orbitRadiusX = radius * (1.12 + (index % 4) * .055);
  const orbitRadiusY = radius * (.72 + (index % 3) * .12);
  for (let step = 0; step <= 108; step += 1) {
    const progress = step / 108;
    const angle = THREE.MathUtils.lerp(start, end, progress);
    points.push(new THREE.Vector3(Math.cos(angle) * orbitRadiusX, Math.sin(angle) * orbitRadiusY, 0));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineDashedMaterial({ color: new THREE.Color().setHSL(.76 + (index % 3) * .03, .9, .67), dashSize: .13, gapSize: .25, transparent: true, opacity: .58, depthWrite: false, blending: THREE.AdditiveBlending });
  const line = new THREE.Line(geometry, material);
  line.computeLineDistances();
  line.rotation.set(toRadians(20 + index * 14), toRadians(-28 + index * 27), toRadians(index * 31));
  line.userData = { speed: .2 + index * .035, material };
  return line;
}

export function initGlobe(container) {
  if (!container || !window.WebGLRenderingContext) return;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
  camera.position.set(0, .05, 7.25);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const root = new THREE.Group();
  root.rotation.set(toRadians(-8), toRadians(-26), toRadians(7));
  scene.add(root);
  const radius = 2.15;
  const globe = buildGlobePoints(radius);
  root.add(globe);
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.012, 44, 44),
    new THREE.MeshBasicMaterial({ color: 0x7e35be, transparent: true, opacity: .052, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  root.add(atmosphere);
  const arcs = new THREE.Group();
  for (let index = 0; index < 10; index += 1) arcs.add(buildOrbit(index, radius));
  root.add(arcs);

  let targetScale = 1;
  let targetRotationX = root.rotation.x;
  let targetRotationY = root.rotation.y;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let animationFrame;
  let previousTime = performance.now();

  const resize = () => {
    const rect = container.getBoundingClientRect();
    renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
    camera.aspect = Math.max(1, rect.width) / Math.max(1, rect.height);
    camera.updateProjectionMatrix();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  const pointerDown = (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    container.classList.add("is-dragging");
    renderer.domElement.setPointerCapture?.(event.pointerId);
  };
  const pointerMove = (event) => {
    if (!dragging) return;
    targetRotationY += (event.clientX - lastX) * .008;
    targetRotationX = clamp(targetRotationX + (event.clientY - lastY) * .006, -.65, .45);
    lastX = event.clientX;
    lastY = event.clientY;
  };
  const pointerUp = () => {
    dragging = false;
    container.classList.remove("is-dragging");
  };
  const wheel = (event) => {
    event.preventDefault();
    targetScale = clamp(targetScale - event.deltaY * .0022, .28, 2.35);
  };
  renderer.domElement.addEventListener("pointerdown", pointerDown);
  renderer.domElement.addEventListener("pointermove", pointerMove);
  renderer.domElement.addEventListener("pointerup", pointerUp);
  renderer.domElement.addEventListener("pointerleave", pointerUp);
  renderer.domElement.addEventListener("wheel", wheel, { passive: false });

  const animate = (now) => {
    const delta = Math.min((now - previousTime) / 1000, .05);
    previousTime = now;
    if (!dragging) targetRotationY += delta * .18;
    root.rotation.x += (targetRotationX - root.rotation.x) * .08;
    root.rotation.y += (targetRotationY - root.rotation.y) * .075;
    root.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), .09);
    arcs.rotation.z += delta * .12;
    arcs.children.forEach((line, index) => {
      line.rotation.z += delta * line.userData.speed * (index % 2 ? .28 : -.2);
      line.rotation.x += delta * line.userData.speed * .06;
    });
    renderer.render(scene, camera);
    animationFrame = requestAnimationFrame(animate);
  };
  animationFrame = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationFrame);
    resizeObserver.disconnect();
    renderer.dispose();
    container.replaceChildren();
  };
}

