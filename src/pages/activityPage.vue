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
        <q-card-section class="q-px-none">Music</q-card-section>
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
            <div class="submittedFile q-mt-md">
              <q-file
                v-model="activityFile"
                label="Attach Activity File/s"
                clearable
                style="width: 35%"
              />
            </div>
            <div>
              <div class="flex flex-center">
                <q-btn
                  class="q-mt-md q-py-md"
                  label="submit"
                  no-caps
                  type="submit"
                  color="accent"
                  style="background-color: #925fe2; width: 100%"
                  rounded
                >
                </q-btn>
              </div>
            </div>
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

const route = useRoute();
const router = useRouter();
const activityFile = ref("");
const courseId = route.params.courseId;
const activityId = route.params.activityId;
const activity = ref(null);

async function getCourses() {
  try {
    axios
      .get(`${process.env.api_host}/courses/activity/${courseId}/${activityId}`)
      .then((response) => {
        activity.value = response.data;
        console.log(activity.value);
      });
  } catch {
    console.log("failed to get courses");
  }
}

onMounted(() => {
  getCourses();
});
</script>
