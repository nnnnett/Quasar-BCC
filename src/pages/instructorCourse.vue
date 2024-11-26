<template>
  <q-page>
    <instructorNavBar />
    <div class="main-container">
      <q-card-section>
        <div class="q-pl-lg text-subtitle1">Course > Music</div>
      </q-card-section>
      <!--  -->
      <div class="main-dashboard q-pl-xl">
        <q-card class="main-content q-px-xl q-py-lg">
          <div class="imgCourse q-px-md">
            <q-img cover src="/src/assets/lee.png" class="responsive-img">
            </q-img>
          </div>
          <!-- Course activity details -->
          <div class="q-px-md courseActDetails">
            <q-card-section
              class="q-mt-md q-pb-none q-pl-none text-h6"
              style="text-transform: capitalize"
            >
              Sample Name</q-card-section
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
                <div class="showDescription">
                  <q-card-section>Description</q-card-section>
                </div>
              </div>
              <!-- Description Section: Visible when descriptionLink is true -->
              <q-card-section
                class="courseDescription q-px-lg"
                style="text-align: justify"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur ratione excepturi amet, iste odit, quasi velit vel
                ullam eaque suscipit obcaecati repellendus blanditiis facilis,
                modi optio eum vero odio aperiam!
              </q-card-section>
            </div>
            <div
              style="border: 1px solid #925fe2; border-radius: 14px"
              class="q-mt-lg"
            >
              <q-btn
                flat
                to="instructorAddActivity"
                label="Add  Activity"
                style="width: 100%; text-transform: capitalize; color: #925fe2"
              />
            </div>
          </div>
        </q-card>
        <q-card class="publishedActivities-container q-py-md q-px-md">
          <!-- submited act -->
          <q-card-section
            class="text-subtitle1"
            style="color: #4b4b4b; font-weight: 600"
          >
            Published Activity
          </q-card-section>
          <q-card-section
            style="row-gap: 14px; display: flex; flex-direction: column"
          >
            <div
              class="acivityList q-py-md q-pl-md text-subtitle1 text-weight-medium"
            >
              Activity 1
            </div>
          </q-card-section>
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
  max-height: 800px
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

.publishedActivities-container
  width: 33%
  border-radius: 24px
  height: auto
.imgExpertise
  border: 1px solid #EBE9FB
  width: 80%
  height: 250px
  border-radius: 14px
.publishedAct
  border: 1px solid #EBE9FB
  width: 80%
  height: 100px
  border-radius: 14px
  overflow: hidden

.acivityList
  border: 1px solid #979797
  text-transform: capitalize
  border-radius: 14px
  color: #4B4B4B
</style>

<script setup>
import instructorNavBar from "src/components/instructorNavBar.vue";
</script>
