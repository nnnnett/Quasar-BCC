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
          <div class="digitalLiteracy q-mr-none">
            <div
              class="q-mx-md"
              style="
                background: linear-gradient(180deg, #fff0e1 0%, #ff9a35 100%);
                width: 85%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
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
            <q-card-section class="q-pt-none text-caption">
              7 topics
            </q-card-section>
            <div style="height: 50px; display: flex; justify-content: flex-end">
              <q-btn>ewe </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.navbar-Profile
  display: flex

.main-dashboard
  border: 1px solid black
  width: 50%
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
  border: 1px solid red
  height: auto
  width: 90%

.viewAllactiveCourse-link
  text-decoration: none

.diffCourseActive
  height: auto
.digitalLiteracy
  width: 30%
  height: auto
  border: 1px solid black
</style>

<script setup>
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
</script>
