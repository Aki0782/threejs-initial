import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene(); // Scene
const renderer = new THREE.WebGLRenderer(); // Renderer

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x595959, 1);
document.body.prepend(renderer.domElement);

// Camera

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const orbitControl = new OrbitControls(camera, renderer.domElement); // Scene Controller
const resetCameraEle = document.querySelector(".reset");

camera.position.set(-30, 30);
const initialPosition = camera.position.clone();
const initialRotation = camera.rotation.clone();

resetCameraEle.addEventListener("click", () => {
  gsap.to(camera.position, {
    duration: 1, // Animation duration in seconds
    x: initialPosition.x,
    y: initialPosition.y,
    z: initialPosition.z,
    onUpdate: () => orbitControl.update() // Update OrbitControls after each tween
  });

  gsap.to(camera.rotation, {
    duration: 1, // Animation duration in seconds
    x: initialRotation.x,
    y: initialRotation.y,
    z: initialRotation.z,
    onUpdate: () => orbitControl.update() // Update OrbitControls after each tween
  });
});

orbitControl.update();

// Grid Helper

const gripHeler = new THREE.GridHelper(25, 100, "#737373", "#a6a6a6");

scene.add(gripHeler);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
  new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
  new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
  new THREE.MeshBasicMaterial({ color: 0x00ffff }) // Cyan
];
const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);

// // box.position.set(-20, -0);

function animate() {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
