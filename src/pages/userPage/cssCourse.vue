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
          <span v-if="course">{{ course.data.name }}</span></q-card-section
        >
      </div>
      <!-- main dashboard -->
      <div class="main-dashboard q-ml-xl q-mt-md">
        <q-card class="main-content q-px-xl q-py-lg">
          <div class="imgCourse q-px-md">
            <q-img cover src="/src/assets/lee.png" class="responsive-img">
            </q-img>
          </div>
          <!-- Course activity details -->
          <div class="q-px-md courseActDetails">
            <q-card-section
              class="q-mt-md q-pb-none text-h6"
              style="text-transform: capitalize"
            >
              <span v-if="course">{{ course.data.name }}</span></q-card-section
            >
            <q-card-section class="q-pt-sm text-body2"
              >5 Activities</q-card-section
            >

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
              <q-card-section
                class="courseDescription q-px-lg"
                style="text-align: justify"
                v-if="course"
              >
                {{ course.data.description }}
              </q-card-section>

              <!-- Activity Section: Visible when activityLink is true -->
              <q-card-section
                class="courseActivity q-px-lg"
                style="text-align: justify"
                v-if="activityLink"
              >
                <router-link to="activitySample" style="text-decoration: none">
                  <div style="border: 1px solid #ebe9fb">
                    <q-card-section>Activity Name</q-card-section>
                  </div>
                </router-link>
              </q-card-section>
            </div>
          </div>
        </q-card>
        <q-card class="courseExpertise q-py-md q-px-md">
          <q-card-section
            class="text-subtitle1"
            style="color: #4b4b4b; font-weight: 600"
          >
            Course Expertise
          </q-card-section>

          <div
            style="
              display: flex;

              justify-content: center;
            "
          >
            <div
              class="imgExpertise"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
              "
            >
              <q-card-section>No data to show.</q-card-section>

              <q-img
                src="/src/assets/sampleBadge.png"
                style="width: 150px; height: 150px"
              />

              <div
                style="
                  width: 70%;
                  display: flex;
                  align-items: center;
                  margin-top: -5%;
                "
              >
                <q-linear-progress
                  v-for="size in ['md']"
                  :key="size"
                  :size="size"
                  :value="0.9"
                  @click="randomize"
                />
                <q-card-section> 5% </q-card-section>
              </div>
            </div>
          </div>
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
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";

const route = useRoute();
const courseId = route.params.courseId;
const course = ref(null);

async function getCourse() {
  try {
    await axios
      .get(`${process.env.api_host}/courses/${courseId}`)
      .then((response) => {
        course.value = response;
        console.log(course);
      });
  } catch {}
}

onMounted(() => {
  getCourse();
});
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
</script>
