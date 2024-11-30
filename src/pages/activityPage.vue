<template>
  <q-page>
    <!-- Components -->
    <div class="navbar-Profile">
      <div class="q-pb-xl">
        <UserNavBar />
      </div>
      <q-space />
      <div class="q-pt-lg q-mr-lg">
        <notifProfile />
      </div>
    </div>
    <!-- Dashboard Content -->
    <div class="main-container q-px-md q-pb-md">
      <div class="text-subtitle1 q-ml-xl flex">
        <q-card-section class="q-px-none">Course</q-card-section>
        <q-card-section class="q-px-sm">></q-card-section>
        <q-card-section
          ><span v-if="course"> {{ course.name }} </span> ></q-card-section
        >
        <q-card-section class="q-px-sm">></q-card-section>
        <q-card-section class="q-px-none" v-if="activity">{{
          activity.name
        }}</q-card-section>
      </div>
      <div class="main-dashboard q-ml-xl q-mt-md">
        <q-card class="main-content q-px-xl q-py-lg">
          <div class=" ">
            <q-btn
              class="q-mb-md"
              no-caps
              @click="router.replace(`/cssCourse/${courseId}`)"
              >Back
            </q-btn>
          </div>
          <div class="imgCourse q-px-md"></div>
          <!-- Course activity details -->
          <div class="q-px-md courseActDetails">
            <q-card-section>
              <div v-if="isImageFile">
                <!-- Show image if the source is an image -->
                <q-img
                  cover
                  style="border-radius: 14px"
                  :src="activity.file"
                  class="responsive-img"
                ></q-img>
              </div>

              <div v-if="isDocuFile">
                <q-btn
                  @click="downloadFile(activity.file)"
                  target="_blank"
                  style="text-decoration: none; color: var(--q-primary)"
                >
                  Download File
                </q-btn>
              </div>

              <div v-if="isRenderFile">
                <q-card-section>
                  <div ref="canvasContainer" class="canvas-container"></div>
                </q-card-section>
              </div>
            </q-card-section>

            <q-card-section
              class="q-mt-md q-pb-none text-h6"
              style="text-transform: capitalize"
              v-if="activity"
            >
              {{ activity.name }}
            </q-card-section>

            <div class="courseActivityAndDescript">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 25%;
                "
                class="q-ml-sm"
              >
                <div class="showDescription">
                  <q-card-section>Description</q-card-section>
                </div>
              </div>

              <!-- Description Section: Visible when descriptionLink is true -->
              <q-card-section
                class="courseDescription q-px-lg"
                style="text-align: justify"
                v-if="activity"
              >
                {{ activity.description }}
              </q-card-section>
            </div>
            <!-- add activity -->
            <q-form @submit.prevent="submitActivity">
              <div class="submittedFile q-mt-md" v-if="isMember">
                <q-file
                  v-model="file"
                  label="Attach Activity File/s"
                  clearable
                  style="width: 50%"
                />
              </div>
              <div>
                <div class="flex flex-center" v-if="isMember">
                  <q-btn
                    class="q-mt-md q-py-md"
                    label="submit"
                    no-caps
                    type="submit"
                    :loading="loading"
                    color="accent"
                    style="background-color: #925fe2; width: 100%"
                    rounded
                  >
                  </q-btn>
                </div>
              </div>
            </q-form>
          </div>
        </q-card>
        <q-card class="submittedAct-container q-py-md q-px-md">
          <!-- submited act -->
          <q-card-section
            class="text-subtitle1"
            style="color: #4b4b4b; font-weight: 600"
          >
            Submitted Activity
          </q-card-section>
          <div
            v-if="activity"
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            "
          >
            <div
              class="submittedAct q-py-none"
              v-for="submissions in activity.submissions"
              :key="submissions._id"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
              "
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  gap: 10px;
                "
              >
                <!-- File Name Section -->
                <q-card-section
                  @click="downloadFile(submissions.file)"
                  style="
                    flex: 1;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    cursor: pointer;
                  "
                >
                  <span style="color: var(--q-primary)">
                    {{ submissions.file.split("/").pop() }}
                  </span>
                </q-card-section>

                <!-- Button Section -->
                <div style="flex-shrink: 0">
                  <q-btn-dropdown
                    flat
                    dropdown-icon="more_vert"
                    class="q-px-none"
                  >
                    <q-list>
                      <q-item
                        clickable
                        v-close-popup
                        @click="pass(submissions._id)"
                      >
                        <q-item-section>
                          <q-item-label style="color: #218334"
                            >Pass</q-item-label
                          >
                        </q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-close-popup
                        @click="redu(submissions._id)"
                      >
                        <q-item-section>
                          <q-item-label style="color: #fa4032"
                            >Redo</q-item-label
                          >
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<style lang="sass" scoped>
.navbar-Profile
  display: flex
.main-content
  height: auto
  width: 65%
  border-radius: 24px
.canvas-container
  width: 100%

  overflow: hidden

.main-dashboard
  display: flex
  justify-content: space-between
.imgCourse
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: auto

.responsive-img
  min-width: 450px
  max-height: 450px
  object-fit: contain
  border-radius: 14px
.courseActivityAndDescript
  border: 2px solid #EBE9FB
  border-radius: 14px

  // not active
.showDescription .clickDescAct,
.showActivity .clickDescAct
  text-decoration: none
  cursor: pointer
  color: #979797  /* Default color for unselected links */
  transition: all 0.3s ease /* Smooth transition for color change */
// active
.showDescription .clickDescAct.active,
.showActivity .clickDescAct.active
  color: #925FE2 /* Change text color when active (blue for example) */
  font-weight: bold /* Optionally make it bold */
.submittedAct-container
  width: 33%
  border-radius: 24px
  height: auto
.imgExpertise
  border: 1px solid #EBE9FB
  width: 80%
  height: 250px
  border-radius: 14px
.submittedAct
  border: 1px solid #EBE9FB
  width: 80%
  height: 100px
  border-radius: 14px
  overflow: hidden
.submittedFile
  width: 100%
  max-height: 50px
  color: #925fe2
  border: 1px solid #925fe2
  border-radius: 14px
  display: flex
  justify-content: center
  overflow: hidden
@media (max-width:1170px)
  .responsive-img
    min-width: 350px
@media (max-width:1023px)
  .main-dashboard
    display: flex
    flex-direction: column
  .main-container
    margin-left: -2%
  .main-content
    width: 90vw
  .submittedAct-container
    width: 90vw
    margin-top: 3%
@media (max-width:643px)
  .main-container
    margin-left: -5%

@media (max-width:469px)
  .main-container
    margin-left: -8%
  .responsive-img
    min-width: 250px
  .courseActDetails
    padding: 0
</style>
<script setup>
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Viewer from "src/components/3dViewer.vue";

const canvasContainer = ref(null);
const loading = ref(false);
const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const file = ref("");
const courseId = route.params.courseId;
const activityId = route.params.activityId;
const getSubmission = ref("");
const activity = ref(null);
const myProfile = ref();
const isMember = ref(false);
const course = ref(null);
const isImageFile = ref(false);
const isRenderFile = ref(false);
const isDocuFile = ref(false);
const allowedExtensionImage = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "svg",
  "webp",
];

async function fileExtension(file) {
  // Check if the file contains an extension
  const fileChecker = file.split(".").pop().toLowerCase();

  // If the file doesn't have an extension or is not allowed, return early
  if (allowedExtensionImage.includes(fileChecker)) {
    isImageFile.value = true;
    isRenderFile.value = false;
    isDocuFile.value = false;
  } else if (fileChecker === "glb") {
    isRenderFile.value = true;
    isImageFile.value = false;
    isDocuFile.value = false;
  } else {
    isDocuFile.value = true;
    isImageFile.value = false;
    isRenderFile.value = false;
  }
  console.log({
    docu: isDocuFile.value,
    img: isImageFile.value,
    rend: isRenderFile.value,
  });
}

async function getCourses() {
  try {
    await axios
      .get(`${process.env.api_host}/courses?query=${courseId}`)
      .then((response) => {
        course.value = response.data[0];
      });
  } catch {
    console.log("failed to get courses");
  }
}

async function getActivity() {
  try {
    const response = await axios
      .get(`${process.env.api_host}/courses/activity/${courseId}/${activityId}`)
      .then((response) => {
        activity.value = response.data;
        fileExtension(activity.value.file);
      });
  } catch (error) {
    console.error("Failed to get activity:", error);
  }
}

async function submitActivity() {
  const token = localStorage.getItem("authToken");
  try {
    loading.value = true;
    const response = await axios.post(
      `${process.env.api_host}/courses/activity/submit/${courseId}/${activityId}`,
      {
        file: file.value,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      }
    );
    file.value = "";
    $q.notify({
      type: "positive",
      message: "Submitted Succesfull",
    });
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
    getActivity();
  }
}

function isImage(file) {
  if (typeof file !== "string") {
    // Return false if the input is not a valid string
    return false;
  }

  // Check the file extension for common image types
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp"];
  const extension = file.split(".").pop().toLowerCase();
  return imageExtensions.includes(extension);
}

function downloadFile(fileUrl) {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.target = "_blank";
  link.click();
}
async function getUserInfo() {
  const token = localStorage.getItem("authToken");
  // Check if token exists before making the request
  if (token) {
    await axios
      .get(`${process.env.api_host}/users/myProfile`, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        myProfile.value = response.data[0];
      })
      .catch((error) => {
        console.error("API call failed:", error);
      });
  } else {
    console.log("No token found in localStorage");
  }
}

async function memberValidation() {
  if (myProfile.value.title === "member") {
    return (isMember.value = true);
  }
}

async function pass(submissionId) {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.put(
      `${process.env.api_host}/courses/submission/update/${courseId}/${activityId}/${submissionId}`,
      {
        isCompleted: true,
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
    console.log("here", submissionId);
    $q.notify({
      type: "positive",
      message: "Activity Passed",
    });
  } catch (err) {
    console.error(err);
  }
}

async function redu(submissionId) {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.put(
      `${process.env.api_host}/courses/submission/update/${courseId}/${activityId}/${submissionId}`,
      {
        isArchived: true,
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
    $q.notify({
      type: "positive",
      message: "Activity Redo",
    });
  } catch (err) {
    console.error(err);
  }
}

async function render() {
  console.log("render runnning");
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
    `${activity.value.file}`,
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
      console.error("An error occurred while loading the model:", error);
    }
  );

  // Resize handler
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}

onMounted(async () => {
  await getUserInfo();
  await memberValidation();
  await getCourses();
  await getActivity();
  if (isRenderFile.value) {
    await render();
  }

  // await getSubmission();
});
</script>
