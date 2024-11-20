<template>
  <q-page>
    <!-- components -->
    <div class="navbar-Profile">
      <div class="q-pb-xl">
        <UserNavBar />
      </div>
      <q-space />
      <div class="q-pt-lg">
        <notifProfile />
      </div>
    </div>
    <div class="main-container q-ml-lg q-pb-lg">
      <!-- Mindstorm Container -->
      <div class="mindstorm-container q-pl-xl">
        <q-card-section class="text-h6 q-pa-none"> Mindstorm </q-card-section>
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
            <q-card-section class="q-pb-none q-pl-none"
              ><span v-if="getCourses">
                {{ getCourses.count }}
              </span>
            </q-card-section>
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
        <div class="flex activeCourseAndLink">
          <q-card-section class="q-pl-none text-h6">
            Active Courses
          </q-card-section>
          <q-space />
        </div>
        <!-- different active courses -->
        <div v-if="getCourses" class="diffCourseActive">
          <!-- first active //digitalLiteracy-->
          <div
            v-for="course in getCourses.course"
            :key="course._id"
            class="digitalLiteracyContainer q-mr-none q-pt-md activeCourseList"
          >
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
            <q-card-section class="q-pb-none" style="font-size: 1em">
              <span v-if="getCourses"> {{ course.name }} </span>
            </q-card-section>
            <q-card-section class="q-pt-none q-pb-sm text-caption">
              7 topics
            </q-card-section>
            <div style="height: 50px; display: flex; justify-content: flex-end">
              <q-btn icon="chevron_right" class="q-px-sm" flat />
            </div>
          </div>
          <!-- Second Active //CSS-->

          <!-- Third Active -->
        </div>
      </div>
      <!-- Continue lerning -->
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.navbar-Profile
  display: flex
.main-container

  height:  auto
  width: 80vw
.mindstorm-container
  border: 4px solid #925FE2
  background-color: rgba(156, 111, 228, 0.3) /* Adjust the alpha value (0.7) to your preference */
  width: auto
  border-radius: 14px
  height: 220px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: baseline
  row-gap: 5%
  color: #925FE2
.activeCompleteCourse-container
  display: flex
  flex-direction: row
.activeCourse
  border: 2px solid #925FE2
  border-radius: 14px
  width: 54%
  display: flex
.completedCourse
  border: 2px solid #5CE1E6
  border-radius: 14px
  width: 54%
  display: flex

.diffCourseActive
  display: flex
  height: auto
  column-gap: 20px
  flex-wrap: wrap
  row-gap: 40px

.activeCourseList
  width: 15%
  max-height: 260px
  border: 1px solid #8F9BB3
  border-radius: 14px


.continueLearning-header
  width: 100%
  height: 80px
  display: flex
  justify-content: space-between
  border-radius: 14px 14px 0px  0px
.courseName
  border-radius: 14px
  background-color: #F2F7FF
.continueLearningHeader-txt
  width: 20%
.learningHeaderNavAndLink
  display: flex
  width: 40%

  justify-content: space-between
.continueLearningHeader-nav
  display: flex
  width: 60%
  justify-content: space-between
  border: 1px solid #C5CBD6
  border-radius: 24px 24px 14px 14px
.courseDetails
  display: flex
  flex-direction: column

@media (max-width:1680px)
  .main-container
    width: 70vw
  .activeCourseList
    min-width: 22%
  .continueLearningHeader-txt
    min-width: 30%
  .learningHeaderNavAndLink
    min-width: 55%
@media (max-width:1203px)
  .main-container
    width: 60vw
  .activeCourseList
    min-width: 28%
  .continueLearningHeader-txt
    min-width: 225px
  .learningHeaderNavAndLink
    min-width: 390px
    padding: 0
  .continueLearningHeader-nav
    min-width: 300px
@media (max-width:1023px)
  .main-container
    width: 90vw
    margin-left:5%

@media (max-width:676px)
  .activeCompleteCourse-container
    display: flex
    flex-direction: column
  .activeCourse
    width: 100%
  .completedCourse
    width: 100%
    margin-left: 0
  .activeCourse-container

  .activeCourseAndLink
    display: flex
    padding: 0
    flex-direction: column
    width: 100%
  .diffCourseActive
    width: 600px
  .activeCourseList
    min-width: 28%


  .continueLearning-header
    min-width: 650px
  .courseName
    min-width: 600px
  .courseList
    min-width: 600px
</style>

<script setup>
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
import axios from "axios";
import { ref } from "vue";

const getCourses = ref(null);
axios.get("http://localhost:3000/courses").then((response) => {
  getCourses.value = response.data;
});
</script>
