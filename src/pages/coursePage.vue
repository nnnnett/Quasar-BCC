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
    <div class="main-container q-pb-md">
      <div class="text-subtitle1 q-ml-xl flex">
        <q-card-section class="q-px-none">Course</q-card-section>
        <q-card-section class="q-px-sm">></q-card-section>
        <q-card-section class="q-px-none">
          <span v-if="course">{{ course.name }}</span></q-card-section
        >
      </div>
      <!-- main dashboard -->
      <div class="main-dashboard q-ml-xl q-mt-md">
        <q-card class="main-content q-px-xl q-py-lg">
          <div class="q-mb-md flex">
            <q-btn class=" " no-caps @click="router.replace(`/course`)"
              >Back
            </q-btn>
            <q-space />
            <q-btn no-caps @click="addActivity = true" v-if="!isMember"
              >Add Activity</q-btn
            >
          </div>
          <div class="imgCourse q-px-md">
            <q-img
              cover
              :src="course.file"
              class="responsive-img"
              v-if="course"
            >
            </q-img>
          </div>
          <!-- Course activity details -->
          <div class="q-px-md courseActDetails">
            <q-card-section
              v-if="course"
              class="q-mt-md q-pb-none text-h6"
              style="text-transform: capitalize"
            >
              {{ course.name }}</q-card-section
            >
            <q-card-section v-if="course" class="q-pt-sm text-body2">
              {{ course.activities.length }} Activities
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
                <div @click="showDescription" class="showDescription">
                  <q-card-section
                    class="clickDescAct"
                    :class="{ active: descriptionLink }"
                    >Description</q-card-section
                  >
                </div>
                <div @click="showActivity" class="showActivity">
                  <q-card-section
                    class="clickDescAct"
                    :class="{ active: activityLink }"
                    >Activity</q-card-section
                  >
                </div>
              </div>

              <!-- Description Section: Visible when descriptionLink is true -->
              <div v-if="descriptionLink">
                <q-card-section
                  class="courseDescription q-px-lg"
                  style="text-align: justify"
                  v-if="course"
                >
                  {{ course.description }}
                </q-card-section>
              </div>

              <!-- Activity Section: Visible when activityLink is true -->
              <q-card-section
                class="courseActivity q-px-lg"
                style="text-align: justify"
                v-if="activityLink"
              >
                <div
                  class="cursor-pointer"
                  style="border: 1px solid #ebe9fb"
                  v-for="activities in course.activities"
                  :key="activities._id"
                  @click="
                    router.replace(
                      `/activityPage/${course._id}/${activities._id}`
                    )
                  "
                >
                  <q-card-section>{{ activities.name }}</q-card-section>
                </div>
              </q-card-section>
            </div>
          </div>
          <!-- Add Activity -->
          <q-dialog v-model="addActivity" persistent>
            <q-card style="width: 700px; max-width: 80vw" class="q-pa-md">
              <div>
                <q-card-section
                  class="text-h6 text-weight-medium q-py-sm"
                  style="color: #4b4b4b"
                >
                  Create New Activity
                </q-card-section>
              </div>
              <div>
                <q-card-section class="q-pt-none">
                  Fill in the details below to create a new activity.
                </q-card-section>
              </div>
              <q-card class="q-px-md">
                <div>
                  <q-form @submit.prevent="submitActivity">
                    <!-- details info -->
                    <div>
                      <q-card-section
                        style="color: #4b4b4b"
                        class="text-h6 q-pb-md q-pl-none"
                      >
                        Details Information
                      </q-card-section>
                    </div>
                    <!-- thumbnail -->
                    <div>
                      <q-card-section class="q-pt-none q-pb-sm q-pl-none">
                        Activity Tumbnail
                      </q-card-section>
                    </div>
                    <!-- course image -->
                    <div class=" ">
                      <q-card style="border: 1px dashed black">
                        <q-card-section class="flex flex-center">
                          <q-file
                            name="file"
                            for="file"
                            v-model="file"
                            label="Choose File"
                            filled
                            clearable
                          >
                            <template v-slot:prepend>
                              <q-icon name="upload" />
                            </template>
                          </q-file>
                        </q-card-section>
                      </q-card>
                    </div>
                    <!-- course Title -->
                    <div>
                      <q-card-section class="q-pl-none q-pb-sm"
                        >Activity Title</q-card-section
                      >
                      <q-input
                        name="activityName"
                        v-model="activityName"
                        type="text"
                        rounded
                        outlined
                        placeholder="Activity Name"
                        no-error-icon
                      />
                    </div>
                    <!-- description -->
                    <div>
                      <q-card-section class="q-pl-none q-pb-sm"
                        >Description</q-card-section
                      >

                      <q-input
                        name="description"
                        v-model="description"
                        type="textarea"
                        rounded
                        outlined
                        placeholder="Activity Description"
                        no-error-icon
                      />
                    </div>

                    <q-card-actions align="right" class="bg-white text-teal">
                      <q-btn
                        flat
                        type="submit"
                        label="Submit"
                        @click="addActivity"
                        :loading="loading"
                      />
                      <q-btn flat label="Cancel" v-close-popup />
                    </q-card-actions>
                  </q-form>
                </div>
              </q-card>
            </q-card>
          </q-dialog>
        </q-card>
        <q-card class="courseExpertise q-py-md q-px-md">
          <div
            style="
              display: flex;

              justify-content: center;
            "
          ></div>
          <!-- submited act -->
          <q-card-section
            class="text-subtitle1"
            style="color: #4b4b4b; font-weight: 600"
          >
            Submitted Activity
          </q-card-section>
          <div
            style="
              display: flex;

              justify-content: center;
            "
          >
            <div
              class="submittedAct"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
              "
            >
              <q-card-section>No data to show.</q-card-section>
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

.main-container
  height: auto
  width: 80vw

.main-dashboard
  display: flex
  justify-content: space-between
.main-content
  height: auto
  width: 65%
  border-radius: 24px
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
// courseExpertise
.courseExpertise
  width: 33%
  border-radius: 24px
  height: auto

.submittedAct
  border: 1px solid #EBE9FB
  width: 80%
  height: 500px
  border-radius: 14px
  overflow: hidden

@media (max-width:1530px)
  .main-container
    width: 70vw
@media (max-width:1096px)
  .responsive-img
    min-width: 350px
    max-height: 450px
    object-fit: contain
    border-radius: 14px
@media (max-width:1023px)
  .main-container
    width: 95vw
@media (max-width:695px)
  .main-dashboard
    display: flex
    flex-direction: column
  .main-content
    width: 90vw
    margin-left: -2%
  .courseExpertise
    width: 90vw
    margin-left: -2%
    margin-top: 5%
@media (max-width:458px)
  .main-content
    margin-left: -5%
  .courseExpertise
    margin-left: -5%
  .responsive-img
    min-width: 320px
  .courseActDetails
    padding: 0
</style>
<script setup>
import { colors } from "quasar";
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";

const loading = ref(false);
const isMember = ref();
const $q = useQuasar();
const addActivity = ref(false);
const route = useRoute();
const router = useRouter();
const courseId = route.params.courseId;
const course = ref(null);
const myProfile = ref(null);
const activityName = ref("");
const description = ref("");
const file = ref("");

async function getCourses() {
  try {
    axios
      .get(`${process.env.api_host}/courses?query=${courseId}`)
      .then((response) => {
        course.value = response.data[0];
      });
  } catch {
    console.log("failed to get courses");
  }
}

console.log("log");

const descriptionLink = ref(true);
const activityLink = ref(false);

// Methods to toggle between the two sections
const showDescription = () => {
  descriptionLink.value = true;
  activityLink.value = false; // Hide activity when showing description
};

const showActivity = () => {
  activityLink.value = true;
  descriptionLink.value = false; // Hide description when showing activity
};
async function isLogin() {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      `${process.env.api_host}/users/tokenValidation`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (!response.data.isValid) {
      router.replace(`/loginPage`);
    } else {
      const myProfile = await axios.get(
        `${process.env.api_host}/users/myProfile`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      roleValidation(myProfile.data[0].title);
    }
  } catch (err) {
    console.error(err);
  }
}

// async function memberValidation() {
//   console.log(myProfile.value);
//   if (myProfile.value.title === "instructor") {
//     router.replace(`/instructorAddActivity/${courseId}`);
//   }
// }

async function roleValidation(title) {
  try {
    console.log(title);
    if (title === "member") {
      return (isMember.value = true);
    }
  } catch (err) {
    console.error(err);
  }
}

async function submitActivity() {
  const token = localStorage.getItem("authToken");
  try {
    loading.value = true;
    await axios.put(
      ` ${process.env.api_host}/courses/activity/add/${courseId}`,
      {
        name: activityName.value,
        description: description.value,
        file: file.value,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      }
    );
    addActivity.value = false;
    getCourses();
    $q.notify({
      type: "positive",
      message: "Course Created Successfully.",
    });

    // Reset the form after successful submission
    activityName.value = "";
    description.value = "";
    file.value = "";
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "Failed to create course. Please try again.";
    $q.notify({
      type: "negative",
      message: errorMessage,
    });
    console.error("Error:", error);
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await isLogin();
  await getCourses();
});
</script>
