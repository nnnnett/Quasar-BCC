<template>
  <div ref="canvasContainer" class="canvas-container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import "@google/model-viewer";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Reactive variables
const canvasContainer = ref(null);
const fileUrl = ref("");
const fileType = ref("");
const activityId = "YOUR_ACTIVITY_ID"; // Replace with the actual activity ID

// Function to load the activity data
const loadActivity = async () => {
  try {
    const { data: activity } = await axios.get(
      `${process.env.api_host}/courses/activity/6744ba0e847e9856dbe3aac1/6744c4c0847e9856dbe3abcb`
    );
    console.log("Activity Data:", activity);
    fileUrl.value = `${process.env.api_host}/${activity.activityFile}`;
    console.log("File URL:", fileUrl.value);
  } catch (error) {
    console.error("Error fetching activity:", error);
  }
};

// Load the activity data when the component is mounted
onMounted(async () => {
  await loadActivity(); // Ensure the data is fetched before proceeding

  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 40); // Adjust camera position for a good initial view

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
  canvasContainer.value.appendChild(renderer.domElement);

  // Add ambient light
  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 7.5);
  directionalLight.castShadow = true; // Enable shadows
  scene.add(directionalLight);

  // Add OrbitControls for interactivity
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Smooths the interaction
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 20; // Minimum zoom distance
  controls.maxDistance = 50; // Maximum zoom distance
  controls.maxTargetRadius = 40;
  controls.target.set(0, 1, 0); // Center the controls on the model

  // Load the 3D model
  const loader = new GLTFLoader();
  loader.load(
    fileUrl.value, // Use the dynamic file URL
    (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Animate the scene
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update(); // Update the controls each frame
        renderer.render(scene, camera);
      };
      animate();
    },
    undefined,
    (error) => {
      console.error("Error loading the model:", error);
    }
  );

  // Resize handler
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
});
</script>

<style scoped>
.canvas-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
