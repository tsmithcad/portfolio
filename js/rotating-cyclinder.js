// Define variables for the scene, camera, renderer, and cylinder
let scene, camera, renderer, cylinder;

// Initialize the scene, camera, and renderer
function init() {
  // Create a new scene
  scene = new THREE.Scene();

  // Create a new perspective camera with suitable settings
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create a new WebGL renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Append the renderer's DOM element to the container
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  // Create a cylinder geometry
  const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);

  // Create a basic material for the cylinder
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  // Create the cylinder mesh
  cylinder = new THREE.Mesh(geometry, material);

  // Add the cylinder to the scene
  scene.add(cylinder);
}

// Animate the cylinder
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cylinder on the y-axis
  cylinder.rotation.y += 0.01;

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Initialize the scene, camera, and renderer
init();

// Start the animation loop
animate();
