// Code for Three.js particle movements
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('particle-container').appendChild(renderer.domElement);

const geometry = new THREE.Geometry();

// Create particle vertices
for (let i = 0; i < 1000; i++) {
  const vertex = new THREE.Vector3();
  vertex.x = Math.random() * 2000 - 1000;
  vertex.y = Math.random() * 2000 - 1000;
  vertex.z = Math.random() * 2000 - 1000;
  geometry.vertices.push(vertex);
}

const material = new THREE.PointsMaterial({
  size: 5,
  color: new THREE.Color('#0A64BC'), // Trust Blue
});
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Update particle movements
function animate() {
  requestAnimationFrame(animate);
  particles.rotation.x += 0.001;
  particles.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();

console.log('three.js moving particles created!');