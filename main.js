import * as THREE from "three";

const scene = new THREE.Scene(); // Scene
const renderer = new THREE.WebGLRenderer(); // Renderer

// renderer.autoClear = false;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x595959, 1);
document.body.prepend(renderer.domElement);

// Camera

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(-30, 30);

// Grid Helper

const gripHeler = new THREE.GridHelper(25, 100, "#737373", "#a6a6a6");

scene.add(gripHeler);

renderer.render(scene, camera);
