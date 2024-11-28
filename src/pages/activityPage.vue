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
              <template v-if="activity && isImage(activity.file)">
                <!-- Show image if the source is an image -->
                <q-img
                  cover
                  style="border-radius: 14px"
                  :src="activity.file"
                  class="responsive-img"
                ></q-img>
              </template>

              <template v-else-if="activity">
                <!-- Show download link for non-image files -->
                <q-btn
                  @click="downloadFile(activity.file)"
                  target="_blank"
                  style="text-decoration: none; color: var(--q-primary)"
                >
                  Download File
                </q-btn>
              </template>
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
              v-for="(submissions, i) in activity.submissions"
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
                        @click="pass(activity.submissions[i])"
                      >
                        <q-item-section>
                          <q-item-label style="color: #218334"
                            >Pass</q-item-label
                          >
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
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

async function pass(submission) {
  console.log(submission._id);
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.put(
      `${process.env.api_host}/course/submission/update/${courseId}/${activityId}/${submission._id}`,
      {
        isCompleted: true,
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
  } catch (err) {
    console.error(err);
  }
}

onMounted(async () => {
  await getUserInfo();
  await memberValidation();
  await getCourses();
  await getActivity();
  // await getSubmission();
});
</script>
