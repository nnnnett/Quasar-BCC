<template>
  <q-page style="overflow: hidden">
    <!-- NavBar Component -->
    <adminNavBar />
    <!-- content -->

    <div class="main-contaier q-mt-xl q-py-md q-px-md">
      <div class="q-mt-xl">
        <q-card-section
          class="text-h5 text-weight-bold q-pl-none"
          style="color: #4b4b4b"
        >
          Course Management
        </q-card-section>
        <q-card-section class="text-subtitle2 q-pt-none" style="color: #6c7275">
          Manage the lessons and activities included in each courses.
        </q-card-section>
      </div>
      <div class="courseManagement-container">
        <div class="courseManagement-header q-pb-sm">
          <q-card-section class="text-subtitle1" style="color: #925fe2">
            Course
          </q-card-section>
          <q-space />
          <div>
            <q-select
              outlined
              v-model="courseFilter"
              :options="courseOption.courses"
              label-style="color:#4B4B4B"
              style="width: auto; text-overflow: ellipsis"
            >
              <template v-slot:prepend>
                <q-card-section class="q-pa-none" style="font-size: 14px"
                  >Show: All</q-card-section
                >
              </template>
            </q-select>
          </div>
          <div class="q-ml-md">
            <q-btn
              class="q-py-md"
              label="Create Course"
              no-caps
              to="adminAddCourse"
              color="accent"
              style="background-color: #925fe2; width: 200px"
            />
          </div>
        </div>
        <hr />
        <div>
          <q-card class="courseList-container q-pa-lg">
            <div class="courseList-header q-pl-lg q-pr-xl">
              <q-card-section class="q-pl-none"> Course Name </q-card-section>
              <q-card-section class="q-pr-xl" style="width: 160px">
                Status
              </q-card-section>
            </div>
            <!-- List of course -->
            <div>
              <div class="courseList q-mt-md q-px-xl">
                <!-- icon and course name -->
                <div style="display: flex; align-items: center">
                  <div class="courseList-icon">
                    <q-img
                      src="/src/assets/courseIcon.svg"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <div>
                    <q-card-section class="q-py-none">
                      Digital Literacy
                    </q-card-section>
                    <q-card-section class="q-py-none">
                      10 Items
                    </q-card-section>
                  </div>
                </div>
                <!-- course status -->
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    width: 150px;
                    align-items: center;
                  "
                >
                  <div class="statusCourse draftStatus">
                    <div class="q-pl-md">
                      <q-img
                        src="/src/assets/draft.svg"
                        style="width: 30px; height: 30px; color: #2584e9"
                      />
                    </div>
                    <div class="q-pr-xl">
                      <q-card-section class="q-pl-sm"> Draft </q-card-section>
                    </div>
                  </div>
                  <div class="statusBtn">
                    <q-btn-dropdown
                      flat
                      dropdown-icon="more_vert"
                      class="q-px-none"
                    >
                      <q-list>
                        <q-item clickable @click="inception = true">
                          <q-item-section>
                            <q-item-label>Edit</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          to="#"
                          v-close-popup
                          @click="onItemClick"
                        >
                          <q-item-section>
                            <q-item-label>Publish</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          to="#"
                          v-close-popup
                          @click="onItemClick"
                        >
                          <q-item-section>
                            <q-item-label>Archieve</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-btn-dropdown>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <!-- second course -->
            <div>
              <div class="courseList q-mt-md q-px-xl">
                <!-- icon and course name -->
                <div style="display: flex; align-items: center">
                  <div class="courseList-icon">
                    <q-img
                      src="/src/assets/courseIcon.svg"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <div>
                    <q-card-section class="q-py-none">
                      Digital Literacy
                    </q-card-section>
                    <q-card-section class="q-py-none">
                      10 Items
                    </q-card-section>
                  </div>
                </div>
                <!-- course status -->
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    width: 150px;
                    align-items: center;
                  "
                >
                  <div class="statusCourse publishedStatus">
                    <div class="q-pl-md">
                      <q-img
                        src="/src/assets/post.svg"
                        style="width: 30px; height: 30px"
                      />
                    </div>
                    <div class="q-pr-xl">
                      <q-card-section class="q-pl-sm"> Draft </q-card-section>
                    </div>
                  </div>
                  <div class="statusBtn">
                    <statusCourseNavBar />
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <!-- third -->
            <div>
              <div class="courseList q-mt-md q-px-xl">
                <!-- icon and course name -->
                <div style="display: flex; align-items: center">
                  <div class="courseList-icon">
                    <q-img
                      src="/src/assets/courseIcon.svg"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <div>
                    <q-card-section class="q-py-none">
                      Digital Literacy
                    </q-card-section>
                    <q-card-section class="q-py-none">
                      10 Items
                    </q-card-section>
                  </div>
                </div>
                <!-- course status -->
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    width: 150px;
                    align-items: center;
                  "
                >
                  <div class="statusCourse archivedStatus">
                    <div class="q-pl-md">
                      <q-img
                        src="/src/assets/archived.svg"
                        style="width: 30px; height: 30px"
                      />
                    </div>
                    <div class="q-pr-lg">
                      <q-card-section class="q-pl-sm">
                        Archived
                      </q-card-section>
                    </div>
                  </div>
                  <div class="statusBtn">
                    <statusCourseNavBar />
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <!-- Popup edit -->
            <div>
              <q-dialog
                full-height="80vh"
                full-width
                v-model="inception"
                class="courseEdit-container"
              >
                <q-card class="courseEdit">
                  <q-card-section style="display: flex">
                    <div class="text-h6 q-pt-md" style="width: 100%">
                      Edit Course
                    </div>
                    <div
                      class="q-mr-lg"
                      style="display: flex; align-items: flex-end"
                    >
                      <q-btn v-close-popup>X </q-btn>
                    </div>
                  </q-card-section>

                  <div class="createCoures-container q-px-xl">
                    <q-form>
                      <div>
                        <q-card-section class="q-pt-none q-pb-sm q-pl-none">
                          Course Tumbnail
                        </q-card-section>
                      </div>
                      <div class=" ">
                        <q-card style="border: 1px dashed black">
                          <q-card-section class="flex flex-center">
                            <q-file
                              name="imageFile"
                              for="imageFile"
                              v-model="imageFile"
                              label="Choose File"
                              filled
                              accept="image/*"
                              clearable
                            >
                              <template v-slot:prepend>
                                <q-icon name="upload" />
                              </template>
                            </q-file>
                          </q-card-section>
                        </q-card>
                      </div>

                      <div>
                        <q-card-section class="q-pl-none q-pb-sm"
                          >Course Title</q-card-section
                        >

                        <q-input
                          name="courseName"
                          v-model="courseName"
                          type="text"
                          rounded
                          outlined
                          placeholder="Course Name"
                          no-error-icon
                        />
                      </div>
                      <!-- Assigning -->
                      <div class="assignedContainer">
                        <!-- mentors -->
                        <div style="width: 45%">
                          <q-card-section class="q-pl-none q-pb-sm">
                            Mentors
                          </q-card-section>
                          <q-select
                            filled
                            v-model="mentors"
                            :options="optionMentors.AssignedMentor"
                            label="Select Mentors"
                          />
                        </div>
                        <!-- durations -->
                        <div style="width: 45%">
                          <q-card-section class="q-pl-none q-pb-sm">
                            Set Durations
                          </q-card-section>
                          <q-select
                            filled
                            v-model="durations"
                            :options="optionDurations.setDuration"
                            label="Set Durations"
                          />
                        </div>
                      </div>
                      <div>
                        <q-card-section class="q-pl-none q-pb-sm"
                          >Description</q-card-section
                        >

                        <q-input
                          name="courseDescription"
                          v-model="courseDescription"
                          type="textarea"
                          rounded
                          outlined
                          placeholder="Course Description"
                          no-error-icon
                        />
                      </div>
                    </q-form>
                  </div>
                  <q-card-actions align="right" class="q-mr-xl">
                    <q-btn
                      flat
                      style="color: #26a69a"
                      label="Save"
                      @click="secondDialog = true"
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>

              <q-dialog
                v-model="secondDialog"
                persistent
                transition-show="scale"
                transition-hide="scale"
              >
                <q-card class="dark" style="width: 300px">
                  <q-card-section>
                    <div class="text-h6">Are you sure?</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Double check the details before saving
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn
                      flat
                      style="color: #26a69a"
                      label="Save"
                      v-close-popup
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style lang="sass" scoped>
.main-contaier
  width: 80vw
.courseManagement-container

  height: auto
.courseManagement-header
  display: flex
  align-items: center
.courseList-container
  height: 600px
  border-radius: 14px
  overflow-y: scroll
.courseList-header
  border-radius: 14px
  background-color: #F2F7FF
  display: flex
  justify-content: space-between
.courseList
  display: flex
  align-items: center
  justify-content: space-between

.courseList-icon
  border-radius: 14px
  width: 60px
  height: 60px
  display: flex
  align-items: center
  justify-content: center
  background: linear-gradient(180deg, #E9E3FF 0%, #9360E2 98%)
.draftStatus
  align-items: center
  justify-content: center
  display: flex
  width: 100%
  background-color: #8DF0F3
  border-radius: 14px
  color: #2584E9
.statusBtn
  width: 100%
.publishedStatus
  align-items: center
  justify-content: center
  display: flex
  width: 100%
  background-color: #EBDEFF
  border-radius: 14px
  color: #925FE2
.archivedStatus
  align-items: center
  justify-content: center
  display: flex
  width: 100%
  background-color: #F8D9D0
  border-radius: 14px
  color: #F36942
.courseEdit

.assignedContainer
  display: flex
  width: 100%
  justify-content: space-between
</style>
<script setup>
import adminNavBar from "src/components/adminNavBar.vue";
import statusCourseNavBar from "src/components/statusCourseNavBar.vue";
import { ref } from "vue";

const courseFilter = ref("");

const courseOption = {
  courses: ["Digital LiteracyLiteracyLiteracy", "Css", "Music"],
};

const inception = ref(false);
const secondDialog = ref(false);

const courseName = ref("");
const courseDescription = ref("");
const mentors = ref("");
const imageFile = ref("");
const durations = ref("");

const optionMentors = {
  AssignedMentor: ["nnet", "jules", "khris"],
};

const optionDurations = {
  setDuration: [1, 2, 3, 4],
};
</script>
