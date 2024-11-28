<template>
  <q-page>
    <instructorNavBar />
    <div class="main-container">
      <q-card-section>
        <div class="q-pl-lg text-subtitle1" style="display: flex">
          <q-card-section>Course ></q-card-section>

          <q-card-section
            ><span v-if="course"> {{ course.name }} </span> ></q-card-section
          >
        </div>
      </q-card-section>
      <!--  -->
      <div class="main-dashboard q-pl-xl">
        <q-card class="main-content q-px-xl q-py-lg q-mt-md">
          <q-form @submit.prevent="addActivity">
            <div class="imgCourse q-px-md">
              <q-card-section class="q-pl-none">
                Add Activity Thumbnail
              </q-card-section>
              <q-card-section
                class="flex flex-center"
                style="border: 1px dashed black; width: 100%"
              >
                <q-file
                  name="activityFile"
                  for="activityFile"
                  v-model="activityFile"
                  label="Choose File"
                  filled
                  clearable
                >
                  <template v-slot:prepend>
                    <q-icon name="upload" />
                  </template>
                </q-file>
              </q-card-section>
            </div>
            <!-- Course activity details -->
            <div class="q-px-md courseActDetails">
              <q-card-section
                class="q-mt-md q-p-none q-pl-md text-h6"
                style="text-transform: capitalize; width: 240px"
              >
                <q-input
                  name="name"
                  type="text"
                  v-model="name"
                  label="Activity Name"
                ></q-input
              ></q-card-section>
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
                  class="courseDescription q-px-lg q-pb-md q-pt-none"
                  style="text-align: justify"
                >
                  <q-input
                    name="description"
                    type="textarea"
                    outlined
                    v-model="description"
                  >
                  </q-input>
                </q-card-section>
              </div>
              <div
                style="background-color: #925fe2; border-radius: 14px"
                class="q-mt-lg"
              >
                <q-btn
                  flat
                  type="submit"
                  label="Published  Activity"
                  :loading="loading"
                  style="
                    width: 100%;
                    text-transform: capitalize;
                    color: #ffffff;
                  "
                />
              </div>
            </div>
          </q-form>
        </q-card>
        <q-card class="publishedActivities-container q-py-md q-px-md">
          <q-scroll-area style="height: 100%; width: 100%">
            <div v-for="n in 1" :key="n" class="q-py-xs">
              <div v-if="course">
                <q-card-section
                  class="text-subtitle1"
                  style="color: #4b4b4b; font-weight: 600"
                >
                  Published Activity
                </q-card-section>
                <q-card-section
                  style="row-gap: 14px; display: flex; flex-direction: column"
                  v-for="activities in course.activities"
                  :key="activities._id"
                  @click="
                    router.replace(
                      `/activityPage/${course._id}/${activities._id}`
                    )
                  "
                >
                  <router-link style="text-decoration: none" to="editActivity">
                    <div
                      class="acivityList q-py-md q-pl-md text-subtitle1 text-weight-medium"
                    >
                      {{ activities.name }}
                    </div>
                  </router-link>
                </q-card-section>
              </div>
            </div>
          </q-scroll-area>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.main-container
  width: 80vw

.main-dashboard
  display: flex
  justify-content: space-between
.main-content
  height: auto
  width: 65%
  border-radius: 24px
  max-height: 600px
.imgCourse


.responsive-img
  min-width: 450px
  max-height: 450px
  object-fit: contain
  border-radius: 14px
.courseActivityAndDescript
  border: 2px solid #EBE9FB
  border-radius: 14px

.publishedActivities-container
  width: 33%
  border-radius: 24px
  height: auto

.acivityList
  border: 1px solid #979797
  text-transform: capitalize
  border-radius: 14px
  color: #4B4B4B
</style>

<script setup>
import instructorNavBar from "src/components/instructorNavBar.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();
const loading = ref(false);
const activityFile = ref("");
const name = ref("");
const description = ref("");
const route = useRoute();
const router = useRouter();
const course = ref(null);
const courseId = route.params.courseId;

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
// Create FormData object

async function addActivity() {
  try {
    loading.value = true;
    const response = await axios.put(
      `${process.env.api_host}/courses/addActivity/${courseId}`,
      {
        name: name.value,
        description: description.value,
        activityFile: activityFile.value,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    $q.notify({ type: "positive", message: "Added Succesfull!" });
    (name.value = ""), (description.value = ""), (activityFile.value = "");
  } catch (error) {
    $q.notify({ type: "negative", message: "Please Complete All Fields." });
    console.error(error);
  } finally {
    loading.value = false;
  }
}

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
      if (myProfile.data[0].title !== "instructor") {
        router.replace(`/loginPage`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

onMounted(() => {
  isLogin();
  getCourses();
});
</script>
