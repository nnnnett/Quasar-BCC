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

    <div class="main-container">
      <div class="main-dashboard q-pl-xl">
        <q-card-section class="text-h5 q-pl-none"> Dashboard </q-card-section>
        <div class="mindstorm-container q-pl-xl q-pb-lg">
          <q-card-section> Mindstorm </q-card-section>
          <q-btn
            class=" "
            label="view"
            no-caps
            type="submit"
            color="accent"
            style="background-color: #925fe2; width: 100px"
            rounded
          />
        </div>
        <!-- active/completed courses -->
        <div class="activeCompleteCourse-container">
          <!-- active -->
          <div class="activeCourse q-mt-md">
            <q-item-section avatar class="q-pl-lg">
              <q-icon name="library_books" style="color: #925fe2" />
            </q-item-section>
            <div class="q-pl-none">
              <q-card-section class="q-pb-none q-pl-none"> 6 </q-card-section>
              <q-card-section class="q-pt-none q-pl-none">
                Active Courses
              </q-card-section>
            </div>
          </div>
          <!-- complete -->
          <div class="completedCourse q-mt-md q-ml-md">
            <q-item-section avatar class="q-pl-lg">
              <q-icon name="library_books" style="color: #5ce1e6" />
            </q-item-section>
            <div class="q-pl-none">
              <q-card-section class="q-pb-none q-pl-none"> 10 </q-card-section>
              <q-card-section class="q-pt-none q-pl-none">
                Completed Courses
              </q-card-section>
            </div>
          </div>
        </div>
        <!-- Active Courses Container -->
        <div class="activeCourse-container q-mt-md">
          <div class="flex">
            <q-card-section class="q-pl-none text-h6">
              Active Courses
            </q-card-section>
            <q-space />
            <RouterLink
              to="#"
              class="q-pt-md viewAllactiveCourse-link text-subtitle1"
            >
              View All
            </RouterLink>
          </div>
          <!-- different active courses -->
          <div class="diffCourseActive">
            <!-- first active //digitalLiteracy-->
            <div class="digitalLiteracyContainer q-mr-none activeCourseList">
              <div
                class="q-mx-md"
                style="
                  background: linear-gradient(180deg, #fff0e1 0%, #ff9a35 100%);
                  width: 85%;
                  height: 100px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 14px;
                "
              >
                <!-- icon container -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="54px"
                  viewBox="0 -960 960 960"
                  width="54px"
                  fill="white"
                  class="computerIcon"
                >
                  <path
                    d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"
                  />
                </svg>
              </div>
              <q-card-section class="q-pb-none text-subtitle1">
                Digital Literacy
              </q-card-section>
              <q-card-section class="q-pt-none q-pb-sm text-caption">
                7 topics
              </q-card-section>
              <div
                style="height: 50px; display: flex; justify-content: flex-end"
              >
                <q-btn icon="chevron_right" class="q-px-sm" flat />
              </div>
            </div>
            <!-- Second Active //CSS-->
            <div class="cssContainer q-mr-none activeCourseList">
              <div
                class="q-mx-md"
                style="
                  background: linear-gradient(180deg, #ffe3fc 0%, #e08dd7 100%);
                  width: 85%;
                  height: 100px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 14px;
                "
              >
                <!-- icon container -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="54px"
                  viewBox="0 -960 960 960"
                  width="54px"
                  fill="white"
                >
                  <path
                    d="M120-80v-280h120v-160h200v-80H320v-280h320v280H520v80h200v160h120v280H520v-280h120v-80H320v80h120v280H120Zm280-600h160v-120H400v120ZM200-160h160v-120H200v120Zm400 0h160v-120H600v120ZM480-680ZM360-280Zm240 0Z"
                  />
                </svg>
              </div>
              <q-card-section class="q-pb-none text-subtitle1">
                CSS
              </q-card-section>
              <q-card-section class="q-pt-none q-pb-sm text-caption">
                5 topics
              </q-card-section>
              <div
                style="height: 50px; display: flex; justify-content: flex-end"
              >
                <q-btn icon="chevron_right" class="q-px-sm" flat />
              </div>
            </div>
            <!-- Third Active -->
            <div class="animationsContainer q-mr-none activeCourseList">
              <div
                class="q-mx-md"
                style="
                  background: linear-gradient(180deg, #e5f3ff 0%, #5b9ce3 100%);
                  width: 85%;
                  height: 100px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 14px;
                "
              >
                <!-- icon container -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48px"
                  viewBox="0 -960 960 960"
                  width="48px"
                  fill="#FFFFFF"
                >
                  <path
                    d="M354-80q-56 0-106-20.5T159-160q-38-38-58.5-87.5T80-354q0-80 41.5-146T232-598q20-42 53-75t77-55q32-71 97.5-111.5T607-880q56 0 105.5 20.5T800-800q38 39 59 88t21 105q0 84-38.5 146.5T728-362q-20 44-52.5 76.5T598-232q-32 71-97.5 111.5T354-80Zm0-60q45 0 86.5-19.5T508-211q-63 7-120.5-12.5T286-286q-44-43-63-101t-12-121q-33 26-52 67.5T140-354q0 45 16 84t46 68q30 29 68.5 45.5T354-140Zm126-127q45 0 86-19t69-52q-63 7-120-13.5T415-416q-44-45-64-102.5T339-639q-40 38-56 73.5T267-480q0 44 16 83t46 69q29 29 68 45t83 16Zm131-129q17 0 34.5-3.5T683-411q21-59 7-116.5T631-630q-42-42-105.5-57T408-683q-5 17-7.5 35t-2.5 41q0 42 16 81t46 70q30 32 69 46t82 14Zm143-54q34-29 50-67t16-90q0-43-16-81.5T758-757q-31-31-69.5-47T607-820q-49 0-89 16.5T446-752q63-7 122 13.5T673-673q46 45 67 102.5T754-450Z"
                  />
                </svg>
              </div>
              <q-card-section class="q-pb-none text-subtitle1">
                Animations
              </q-card-section>
              <q-card-section class="q-pt-none q-pb-sm text-caption">
                3 topics
              </q-card-section>
              <div
                style="height: 50px; display: flex; justify-content: flex-end"
              >
                <q-btn icon="chevron_right" class="q-px-sm" flat />
              </div>
            </div>
          </div>
          <!-- My Course Expertise -->
          <q-card class="courseExpertiseContainer">
            <div class="header-ExpertiseContainer">
              <q-card-section class="text-h6">
                My Course Expertise
              </q-card-section>
              <q-space />
              <q-card-section
                ><router-link to="#" style="text-decoration: none"
                  >View All</router-link
                ></q-card-section
              >
            </div>
            <div class="courseTitleAndProgress">
              <div class="courseTitle">
                <q-card-section> Digital Literacy </q-card-section>
              </div>
              <div class="courseProgress">
                <div class="q-py-xl q-mx-none" style="border: 1px solid red">
                  <q-linear-progress
                    class="courseProgressBar"
                    v-for="size in ['md']"
                    :key="size"
                    :size="size"
                    :value="0.5"
                    @click="randomize"
                  />
                  <q-linear-progress
                    class="courseProgressBar"
                    v-for="size in ['md']"
                    :key="size"
                    :size="size"
                    :value="0.5"
                    @click="randomize"
                  />
                  <q-linear-progress
                    class="courseProgressBar"
                    v-for="size in ['md']"
                    :key="size"
                    :size="size"
                    :value="0.5"
                    @click="randomize"
                  />
                  <q-linear-progress
                    class="courseProgressBar"
                    v-for="size in ['md']"
                    :key="size"
                    :size="size"
                    :value="0.5"
                    @click="randomize"
                  />
                </div>
              </div>
            </div>
            <div class="progressIndicator">
              <q-card-section>Noivice</q-card-section>
              <q-card-section>Intermidiate</q-card-section>
              <q-card-section>Proficient</q-card-section>
              <q-card-section>Advance</q-card-section>
              <q-card-section>Expert</q-card-section>
            </div>
          </q-card>
        </div>
      </div>
      <!-- Statistics -->
      <div class="statisticsCont">
        <q-card-section class="text-h5">Statistics</q-card-section>
        <div class="statsProfileContainer">
          <q-card class="statsProfile">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            officia labore eum placeat, excepturi nulla quod soluta delectus sit
            animi corporis libero voluptatum maxime aliquam accusantium minima.
            Nostrum, debitis laudantium?
          </q-card>

          <q-avatar> {{}} </q-avatar>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.main-container
  display: flex
  justify-content: space-around
.navbar-Profile
  display: flex

.main-dashboard
  border: 1px solid black
  width: 50%
  height: 1000px
.mindstorm-container
  border: 4px solid #925FE2
  background-color: rgba(156, 111, 228, 0.3) /* Adjust the alpha value (0.7) to your preference */
  width: 90%
  border-radius: 14px
  height: 220px
  display: flex
  flex-direction: column
  align-content: flex-end
  justify-content: flex-end

.activeCompleteCourse-container
  display: flex
  flex-direction: row
.activeCourse
  border: 2px solid #925FE2
  border-radius: 14px
  width: 44%
  display: flex

.completedCourse
  border: 2px solid #5CE1E6
  border-radius: 14px
  width: 44%
  display: flex
.activeCourse-counter
  display: flex
  flex-direction: column

.activeCourse-container
  height: auto
  width: 90%

.viewAllactiveCourse-link
  text-decoration: none

.diffCourseActive
  display: flex
  height: 250px
  justify-content: space-between
  flex-wrap: wrap
  row-gap: 40px
  overflow: hidden

.activeCourseList
  width: 30%
  height: 230px
  border: 1px solid #8F9BB3

.courseExpertiseContainer
  border-radius: 14px
  height: auto

.ExpertiseChart
  display: flex
  flex-direction: column

.header-ExpertiseContainer
  display: flex

.courseProgress
  height: auto
  width: 70%
  d

  border: 1px solid blue
.courseTitle
  width: 30%
  height: auto
.courseTitleAndProgress
  display: flex

.progressIndicator
  display: flex
  justify-content: flex-end

.courseProgressBar

  color: #925fe2



.statisticsCont
  display: flex
  flex-direction: column
  align-items: center /* Center horizontally */
  width: 40%
  border-radius: 14px
  background-color: #f2f7ff


.statsProfileContainer
  display: flex
  justify-content: center /* Center the card inside the container */
  width: 100% /* Ensure the container takes the full width */


.statsProfile
  width: 80%
</style>

<script setup>
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
import registerPage from "./registerPage.vue";
import { ref } from "vue";

const progress = ref(0.65);

const randomize = () => {
  progress.value = Math.random();
};
</script>
