
import * as THREE from './three.module.js';

function toRadians(degrees) { return degrees * Math.PI / 180; }

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

function latitudeLongitudeToVector(latitude, longitude, radius) {
  const lat = toRadians(latitude);
  const lon = toRadians(longitude);
  return new THREE.Vector3(
    radius * Math.cos(lat) * Math.sin(lon),
    radius * Math.sin(lat),
    radius * Math.cos(lat) * Math.cos(lon)
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
      const color = new THREE.Color().setHSL(.12 + random * .02, .8, .6 + random * .2);
      colors.push(color.r, color.g, color.b);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ size: .029, vertexColors: true, transparent: true, opacity: .95, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true })
  );
}

try {
  const globe = buildGlobePoints(2.15);
  console.log('Globe points built successfully! Vertex count:', globe.geometry.attributes.position.count);
} catch (e) {
  console.error('Error building globe points:', e);
}
