// script.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 5;
controls.maxDistance = 50;

// Add the Sun
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

// Add Earth
const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
let earthOrbitAngle = 0;
const earthOrbitRadius = 8;

// Add Mars
const marsGeometry = new THREE.SphereGeometry(0.4, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff4500 });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);
let marsOrbitAngle = 0;
const marsOrbitRadius = 12;

// Add Jupiter
const jupiterGeometry = new THREE.SphereGeometry(1, 32, 32);
const jupiterMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);
let jupiterOrbitAngle = 0;
const jupiterOrbitRadius = 18;

// Add starry background
const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const starPositions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
  starPositions[i] = (Math.random() - 0.5) * 100;
}
starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

camera.position.z = 25;

function animate() {
  requestAnimationFrame(animate);

  // Rotate the sun
  sun.rotation.y += 0.01;

  // Orbit Earth
  earthOrbitAngle += 0.02;
  earth.position.x = Math.cos(earthOrbitAngle) * earthOrbitRadius;
  earth.position.z = Math.sin(earthOrbitAngle) * earthOrbitRadius;
  earth.rotation.y += 0.05;

  // Orbit Mars
  marsOrbitAngle += 0.015;
  mars.position.x = Math.cos(marsOrbitAngle) * marsOrbitRadius;
  mars.position.z = Math.sin(marsOrbitAngle) * marsOrbitRadius;
  mars.rotation.y += 0.04;

  // Orbit Jupiter
  jupiterOrbitAngle += 0.01;
  jupiter.position.x = Math.cos(jupiterOrbitAngle) * jupiterOrbitRadius;
  jupiter.position.z = Math.sin(jupiterOrbitAngle) * jupiterOrbitRadius;
  jupiter.rotation.y += 0.03;

  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});