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
controls.maxDistance = 100;

// Function to create text sprite
function createTextSprite(text) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 128;
  canvas.height = 32;
  context.font = '20px Arial';
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.fillText(text, 64, 24);

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(2, 0.5, 1);
  return sprite;
}

// Add the Sun
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);
const sunLabel = createTextSprite('Sun');
sunLabel.position.y = 3;
sun.add(sunLabel);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

// Add Mercury
const mercuryGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
scene.add(mercury);
let mercuryOrbitAngle = 0;
const mercuryOrbitRadius = 4;
const mercuryLabel = createTextSprite('Mercury');
mercuryLabel.position.y = 1;
mercury.add(mercuryLabel);

// Add Venus
const venusGeometry = new THREE.SphereGeometry(0.45, 32, 32);
const venusMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venus);
let venusOrbitAngle = 0;
const venusOrbitRadius = 6;
const venusLabel = createTextSprite('Venus');
venusLabel.position.y = 1.2;
venus.add(venusLabel);

// Add Earth with Luna
const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
let earthOrbitAngle = 0;
const earthOrbitRadius = 8;
const earthLabel = createTextSprite('Earth');
earthLabel.position.y = 1.3;
earth.add(earthLabel);

const lunaGeometry = new THREE.SphereGeometry(0.15, 32, 32);
const lunaMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const luna = new THREE.Mesh(lunaGeometry, lunaMaterial);
earth.add(luna);
let lunaOrbitAngle = 0;
const lunaOrbitRadius = 1;
const lunaLabel = createTextSprite('Luna');
lunaLabel.position.y = 0.5;
luna.add(lunaLabel);

// Add Mars with Phobos and Deimos
const marsGeometry = new THREE.SphereGeometry(0.4, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff4500 });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);
let marsOrbitAngle = 0;
const marsOrbitRadius = 12;
const marsLabel = createTextSprite('Mars');
marsLabel.position.y = 1.2;
mars.add(marsLabel);

const phobosGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const phobosMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
const phobos = new THREE.Mesh(phobosGeometry, phobosMaterial);
mars.add(phobos);
let phobosOrbitAngle = 0;
const phobosOrbitRadius = 0.8;
const phobosLabel = createTextSprite('Phobos');
phobosLabel.position.y = 0.4;
phobos.add(phobosLabel);

const deimosGeometry = new THREE.SphereGeometry(0.08, 32, 32);
const deimosMaterial = new THREE.MeshBasicMaterial({ color: 0x696969 });
const deimos = new THREE.Mesh(deimosGeometry, deimosMaterial);
mars.add(deimos);
let deimosOrbitAngle = 0;
const deimosOrbitRadius = 1.2;
const deimosLabel = createTextSprite('Deimos');
deimosLabel.position.y = 0.4;
deimos.add(deimosLabel);

// Add Jupiter with 5 moons
const jupiterGeometry = new THREE.SphereGeometry(1, 32, 32);
const jupiterMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);
let jupiterOrbitAngle = 0;
const jupiterOrbitRadius = 18;
const jupiterLabel = createTextSprite('Jupiter');
jupiterLabel.position.y = 1.8;
jupiter.add(jupiterLabel);

const ganymedeGeometry = new THREE.SphereGeometry(0.25, 32, 32);
const ganymedeMaterial = new THREE.MeshBasicMaterial({ color: 0xb0c4de });
const ganymede = new THREE.Mesh(ganymedeGeometry, ganymedeMaterial);
jupiter.add(ganymede);
let ganymedeOrbitAngle = 0;
const ganymedeOrbitRadius = 2;
const ganymedeLabel = createTextSprite('Ganymede');
ganymedeLabel.position.y = 0.6;
ganymede.add(ganymedeLabel);

const callistoGeometry = new THREE.SphereGeometry(0.23, 32, 32);
const callistoMaterial = new THREE.MeshBasicMaterial({ color: 0x708090 });
const callisto = new THREE.Mesh(callistoGeometry, callistoMaterial);
jupiter.add(callisto);
let callistoOrbitAngle = 0;
const callistoOrbitRadius = 2.5;
const callistoLabel = createTextSprite('Callisto');
callistoLabel.position.y = 0.6;
callisto.add(callistoLabel);

const ioGeometry = new THREE.SphereGeometry(0.18, 32, 32);
const ioMaterial = new THREE.MeshBasicMaterial({ color: 0xffff99 });
const io = new THREE.Mesh(ioGeometry, ioMaterial);
jupiter.add(io);
let ioOrbitAngle = 0;
const ioOrbitRadius = 1.5;
const ioLabel = createTextSprite('Io');
ioLabel.position.y = 0.5;
io.add(ioLabel);

const europaGeometry = new THREE.SphereGeometry(0.16, 32, 32);
const europaMaterial = new THREE.MeshBasicMaterial({ color: 0xe0ffff });
const europa = new THREE.Mesh(europaGeometry, europaMaterial);
jupiter.add(europa);
let europaOrbitAngle = 0;
const europaOrbitRadius = 1.8;
const europaLabel = createTextSprite('Europa');
europaLabel.position.y = 0.5;
europa.add(europaLabel);

const amaltheaGeometry = new THREE.SphereGeometry(0.12, 32, 32);
const amaltheaMaterial = new THREE.MeshBasicMaterial({ color: 0xcd5c5c });
const amalthea = new THREE.Mesh(amaltheaGeometry, amaltheaMaterial);
jupiter.add(amalthea);
let amaltheaOrbitAngle = 0;
const amaltheaOrbitRadius = 1.2;
const amaltheaLabel = createTextSprite('Amalthea');
amaltheaLabel.position.y = 0.4;
amalthea.add(amaltheaLabel);

// Add Saturn with 3 moons
const saturnGeometry = new THREE.SphereGeometry(0.9, 32, 32);
const saturnMaterial = new THREE.MeshBasicMaterial({ color: 0xdeb887 });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturn);
let saturnOrbitAngle = 0;
const saturnOrbitRadius = 24;
const ringGeometry = new THREE.RingGeometry(1.2, 1.8, 32);
const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const saturnRing = new THREE.Mesh(ringGeometry, ringMaterial);
saturnRing.rotation.x = Math.PI / 2;
saturn.add(saturnRing);
const saturnLabel = createTextSprite('Saturn');
saturnLabel.position.y = 1.7;
saturn.add(saturnLabel);

const titanGeometry = new THREE.SphereGeometry(0.24, 32, 32);
const titanMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
const titan = new THREE.Mesh(titanGeometry, titanMaterial);
saturn.add(titan);
let titanOrbitAngle = 0;
const titanOrbitRadius = 2.2;
const titanLabel = createTextSprite('Titan');
titanLabel.position.y = 0.6;
titan.add(titanLabel);

const rheaGeometry = new THREE.SphereGeometry(0.18, 32, 32);
const rheaMaterial = new THREE.MeshBasicMaterial({ color: 0xd3d3d3 });
const rhea = new THREE.Mesh(rheaGeometry, rheaMaterial);
saturn.add(rhea);
let rheaOrbitAngle = 0;
const rheaOrbitRadius = 1.8;
const rheaLabel = createTextSprite('Rhea');
rheaLabel.position.y = 0.5;
rhea.add(rheaLabel);

const iapetusGeometry = new THREE.SphereGeometry(0.16, 32, 32);
const iapetusMaterial = new THREE.MeshBasicMaterial({ color: 0x696969 });
const iapetus = new THREE.Mesh(iapetusGeometry, iapetusMaterial);
saturn.add(iapetus);
let iapetusOrbitAngle = 0;
const iapetusOrbitRadius = 2.6;
const iapetusLabel = createTextSprite('Iapetus');
iapetusLabel.position.y = 0.5;
iapetus.add(iapetusLabel);

// Add Uranus with 5 moons
const uranusGeometry = new THREE.SphereGeometry(0.8, 32, 32);
const uranusMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);
let uranusOrbitAngle = 0;
const uranusOrbitRadius = 30;
const uranusLabel = createTextSprite('Uranus');
uranusLabel.position.y = 1.6;
uranus.add(uranusLabel);

const mirandaGeometry = new THREE.SphereGeometry(0.12, 32, 32);
const mirandaMaterial = new THREE.MeshBasicMaterial({ color: 0xd3d3d3 }); // Light gray
const miranda = new THREE.Mesh(mirandaGeometry, mirandaMaterial);
uranus.add(miranda);
let mirandaOrbitAngle = 0;
const mirandaOrbitRadius = 1.2;
const mirandaLabel = createTextSprite('Miranda');
mirandaLabel.position.y = 0.4;
miranda.add(mirandaLabel);

const arielGeometry = new THREE.SphereGeometry(0.16, 32, 32);
const arielMaterial = new THREE.MeshBasicMaterial({ color: 0xe0ffff }); // Light cyan
const ariel = new THREE.Mesh(arielGeometry, arielMaterial);
uranus.add(ariel);
let arielOrbitAngle = 0;
const arielOrbitRadius = 1.5;
const arielLabel = createTextSprite('Ariel');
arielLabel.position.y = 0.5;
ariel.add(arielLabel);

const umbrielGeometry = new THREE.SphereGeometry(0.15, 32, 32);
const umbrielMaterial = new THREE.MeshBasicMaterial({ color: 0x708090 }); // Slate gray
const umbriel = new THREE.Mesh(umbrielGeometry, umbrielMaterial);
uranus.add(umbriel);
let umbrielOrbitAngle = 0;
const umbrielOrbitRadius = 1.8;
const umbrielLabel = createTextSprite('Umbriel');
umbrielLabel.position.y = 0.5;
umbriel.add(umbrielLabel);

const titaniaGeometry = new THREE.SphereGeometry(0.20, 32, 32);
const titaniaMaterial = new THREE.MeshBasicMaterial({ color: 0xb0c4de }); // Light steel blue
const titania = new THREE.Mesh(titaniaGeometry, titaniaMaterial);
uranus.add(titania);
let titaniaOrbitAngle = 0;
const titaniaOrbitRadius = 2.2;
const titaniaLabel = createTextSprite('Titania');
titaniaLabel.position.y = 0.6;
titania.add(titaniaLabel);

const oberonGeometry = new THREE.SphereGeometry(0.19, 32, 32);
const oberonMaterial = new THREE.MeshBasicMaterial({ color: 0xa9a9a9 }); // Gray
const oberon = new THREE.Mesh(oberonGeometry, oberonMaterial);
uranus.add(oberon);
let oberonOrbitAngle = 0;
const oberonOrbitRadius = 2.5;
const oberonLabel = createTextSprite('Oberon');
oberonLabel.position.y = 0.5;
oberon.add(oberonLabel);

// Add Neptune with Triton
const neptuneGeometry = new THREE.SphereGeometry(0.75, 32, 32);
const neptuneMaterial = new THREE.MeshBasicMaterial({ color: 0x000080 });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);
let neptuneOrbitAngle = 0;
const neptuneOrbitRadius = 36;
const neptuneLabel = createTextSprite('Neptune');
neptuneLabel.position.y = 1.5;
neptune.add(neptuneLabel);

const tritonGeometry = new THREE.SphereGeometry(0.18, 32, 32);
const tritonMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb }); // Sky blue
const triton = new THREE.Mesh(tritonGeometry, tritonMaterial);
neptune.add(triton);
let tritonOrbitAngle = 0;
const tritonOrbitRadius = 2;
const tritonLabel = createTextSprite('Triton');
tritonLabel.position.y = 0.5;
triton.add(tritonLabel);

// Add Pluto with Charon
const plutoGeometry = new THREE.SphereGeometry(0.25, 32, 32);
const plutoMaterial = new THREE.MeshBasicMaterial({ color: 0xa9a9a9 });
const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
scene.add(pluto);
let plutoOrbitAngle = 0;
const plutoOrbitRadius = 42;
const plutoLabel = createTextSprite('Pluto');
plutoLabel.position.y = 1;
pluto.add(plutoLabel);

const charonGeometry = new THREE.SphereGeometry(0.13, 32, 32);
const charonMaterial = new THREE.MeshBasicMaterial({ color: 0x778899 }); // Light slate gray
const charon = new THREE.Mesh(charonGeometry, charonMaterial);
pluto.add(charon);
let charonOrbitAngle = 0;
const charonOrbitRadius = 0.8;
const charonLabel = createTextSprite('Charon');
charonLabel.position.y = 0.4;
charon.add(charonLabel);

// Add starry background
const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const starPositions = new Float32Array(starCount * 3);
const minDistance = 200;
const maxDistance = 1000;
for (let i = 0; i < starCount; i++) {
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos(2 * Math.random() - 1);
  const radius = minDistance + Math.random() * (maxDistance - minDistance);
  starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
  starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
  starPositions[i * 3 + 2] = radius * Math.cos(phi);
}
starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 });
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

camera.position.z = 50;

function animate() {
  requestAnimationFrame(animate);

  // Rotate the sun
  sun.rotation.y += 0.01;

  // Orbit Mercury
  mercuryOrbitAngle += 0.03;
  mercury.position.x = Math.cos(mercuryOrbitAngle) * mercuryOrbitRadius;
  mercury.position.z = Math.sin(mercuryOrbitAngle) * mercuryOrbitRadius;
  mercury.rotation.y += 0.06;

  // Orbit Venus
  venusOrbitAngle += 0.025;
  venus.position.x = Math.cos(venusOrbitAngle) * venusOrbitRadius;
  venus.position.z = Math.sin(venusOrbitAngle) * venusOrbitRadius;
  venus.rotation.y += 0.05;

  // Orbit Earth and Luna
  earthOrbitAngle += 0.02;
  earth.position.x = Math.cos(earthOrbitAngle) * earthOrbitRadius;
  earth.position.z = Math.sin(earthOrbitAngle) * earthOrbitRadius;
  earth.rotation.y += 0.05;
  lunaOrbitAngle += 0.1;
  luna.position.x = Math.cos(lunaOrbitAngle) * lunaOrbitRadius;
  luna.position.z = Math.sin(lunaOrbitAngle) * lunaOrbitRadius;

  // Orbit Mars, Phobos, and Deimos
  marsOrbitAngle += 0.015;
  mars.position.x = Math.cos(marsOrbitAngle) * marsOrbitRadius;
  mars.position.z = Math.sin(marsOrbitAngle) * marsOrbitRadius;
  mars.rotation.y += 0.04;
  phobosOrbitAngle += 0.15;
  phobos.position.x = Math.cos(phobosOrbitAngle) * phobosOrbitRadius;
  phobos.position.z = Math.sin(phobosOrbitAngle) * phobosOrbitRadius;
  deimosOrbitAngle += 0.08;
  deimos.position.x = Math.cos(deimosOrbitAngle) * deimosOrbitRadius;
  deimos.position.z = Math.sin(deimosOrbitAngle) * deimosOrbitRadius;

  // Orbit Jupiter and its moons
  jupiterOrbitAngle += 0.01;
  jupiter.position.x = Math.cos(jupiterOrbitAngle) * jupiterOrbitRadius;
  jupiter.position.z = Math.sin(jupiterOrbitAngle) * jupiterOrbitRadius;
  jupiter.rotation.y += 0.03;
  ganymedeOrbitAngle += 0.06;
  ganymede.position.x = Math.cos(ganymedeOrbitAngle) * ganymedeOrbitRadius;
  ganymede.position.z = Math.sin(ganymedeOrbitAngle) * ganymedeOrbitRadius;
  callistoOrbitAngle += 0.05;
  callisto.position.x = Math.cos(callistoOrbitAngle) * callistoOrbitRadius;
  callisto.position.z = Math.sin(callistoOrbitAngle) * callistoOrbitRadius;
  ioOrbitAngle += 0.08;
  io.position.x = Math.cos(ioOrbitAngle) * ioOrbitRadius;
  io.position.z = Math.sin(ioOrbitAngle) * ioOrbitRadius;
  europaOrbitAngle += 0.07;
  europa.position.x = Math.cos(europaOrbitAngle) * europaOrbitRadius;
  europa.position.z = Math.sin(europaOrbitAngle) * europaOrbitRadius;
  amaltheaOrbitAngle += 0.09;
  amalthea.position.x = Math.cos(amaltheaOrbitAngle) * amaltheaOrbitRadius;
  amalthea.position.z = Math.sin(amaltheaOrbitAngle) * amaltheaOrbitRadius;

  // Orbit Saturn and its moons
  saturnOrbitAngle += 0.008;
  saturn.position.x = Math.cos(saturnOrbitAngle) * saturnOrbitRadius;
  saturn.position.z = Math.sin(saturnOrbitAngle) * saturnOrbitRadius;
  saturn.rotation.y += 0.02;
  titanOrbitAngle += 0.06;
  titan.position.x = Math.cos(titanOrbitAngle) * titanOrbitRadius;
  titan.position.z = Math.sin(titanOrbitAngle) * titanOrbitRadius;
  rheaOrbitAngle += 0.07;
  rhea.position.x = Math.cos(rheaOrbitAngle) * rheaOrbitRadius;
  rhea.position.z = Math.sin(rheaOrbitAngle) * rheaOrbitRadius;
  iapetusOrbitAngle += 0.05;
  iapetus.position.x = Math.cos(iapetusOrbitAngle) * iapetusOrbitRadius;
  iapetus.position.z = Math.sin(iapetusOrbitAngle) * iapetusOrbitRadius;

  // Orbit Uranus and its moons
  uranusOrbitAngle += 0.006;
  uranus.position.x = Math.cos(uranusOrbitAngle) * uranusOrbitRadius;
  uranus.position.z = Math.sin(uranusOrbitAngle) * uranusOrbitRadius;
  uranus.rotation.y += 0.015;
  mirandaOrbitAngle += 0.09;
  miranda.position.x = Math.cos(mirandaOrbitAngle) * mirandaOrbitRadius;
  miranda.position.z = Math.sin(mirandaOrbitAngle) * mirandaOrbitRadius;
  arielOrbitAngle += 0.08;
  ariel.position.x = Math.cos(arielOrbitAngle) * arielOrbitRadius;
  ariel.position.z = Math.sin(arielOrbitAngle) * arielOrbitRadius;
  umbrielOrbitAngle += 0.07;
  umbriel.position.x = Math.cos(umbrielOrbitAngle) * umbrielOrbitRadius;
  umbriel.position.z = Math.sin(umbrielOrbitAngle) * umbrielOrbitRadius;
  titaniaOrbitAngle += 0.06;
  titania.position.x = Math.cos(titaniaOrbitAngle) * titaniaOrbitRadius;
  titania.position.z = Math.sin(titaniaOrbitAngle) * titaniaOrbitRadius;
  oberonOrbitAngle += 0.05;
  oberon.position.x = Math.cos(oberonOrbitAngle) * oberonOrbitRadius;
  oberon.position.z = Math.sin(oberonOrbitAngle) * oberonOrbitRadius;

  // Orbit Neptune and Triton
  neptuneOrbitAngle += 0.005;
  neptune.position.x = Math.cos(neptuneOrbitAngle) * neptuneOrbitRadius;
  neptune.position.z = Math.sin(neptuneOrbitAngle) * neptuneOrbitRadius;
  neptune.rotation.y += 0.015;
  tritonOrbitAngle += 0.07;
  triton.position.x = Math.cos(tritonOrbitAngle) * tritonOrbitRadius;
  triton.position.z = Math.sin(tritonOrbitAngle) * tritonOrbitRadius;

  // Orbit Pluto and Charon
  plutoOrbitAngle += 0.004;
  pluto.position.x = Math.cos(plutoOrbitAngle) * plutoOrbitRadius;
  pluto.position.z = Math.sin(plutoOrbitAngle) * plutoOrbitRadius;
  pluto.rotation.y += 0.01;
  charonOrbitAngle += 0.08;
  charon.position.x = Math.cos(charonOrbitAngle) * charonOrbitRadius;
  charon.position.z = Math.sin(charonOrbitAngle) * charonOrbitRadius;

  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});