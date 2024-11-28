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
      <q-card-section
        class="text-h5 q-pl-none dashboard-txt"
        style="font-weight: 600; color: #4b4b4b"
      >
        Courses
      </q-card-section>
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
              ><span v-if="courses">
                {{ courses.length }}
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
            <q-card-section v-if="!isMember">
              <q-btn @click="addCourse = true"> Add Course </q-btn>
            </q-card-section>
          </q-card-section>
        </div>
        <!-- different active courses -->
        <div v-if="courses" class="diffCourseActive">
          <!-- first active //digitalLiteracy-->
          <div
            v-for="course in courses"
            :key="course._id"
            class="digitalLiteracyContainer q-mr-none q-pt-md activeCourseList"
          >
            <div
              class="q-mx-md q-pt-sm"
              style="
                width: 85%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 14px;
              "
            >
              <!-- icon container -->
              <q-img
                cover
                :src="course.file"
                class="responsive-img"
                v-if="course"
                style="border-radius: 14px; max-width: 200px; max-height: 130px"
              >
              </q-img>
            </div>
            <q-card-section
              class="q-pb-none"
              style="font-size: 1em; text-transform: capitalize"
            >
              <span v-if="courses"> {{ course.name }} </span>
            </q-card-section>
            <q-card-section class="q-pt-none q-pb-sm text-caption">
              {{ course.activities.length }} Activities
            </q-card-section>
            <div style="height: 50px; display: flex; justify-content: flex-end">
              <q-btn
                icon="chevron_right"
                class="q-px-sm"
                flat
                :to="'/cssCourse/' + course._id"
              />
            </div>
          </div>
          <!-- Add course -->
          <q-dialog v-model="addCourse" persistent>
            <q-card style="width: 700px; max-width: 80vw" class="q-pa-md">
              <div>
                <q-card-section
                  class="text-h6 text-weight-medium q-py-sm"
                  style="color: #4b4b4b"
                >
                  Create New Course
                </q-card-section>
              </div>
              <div>
                <q-card-section class="q-pt-none">
                  Fill in the details below to create a new course.
                </q-card-section>
              </div>
              <q-card class="q-px-md">
                <div>
                  <q-form @submit.prevent="submitCourse">
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
                        Course Tumbnail
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
                            accept="image/*"
                            clearable
                            hint="landscape photo Only"
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
                        placeholder="Course Description"
                        no-error-icon
                      />
                    </div>

                    <q-card-actions align="right" class="bg-white text-teal">
                      <q-btn
                        flat
                        type="submit"
                        label="Submit"
                        @click="addCourse"
                      />
                      <q-btn flat label="Cancel" v-close-popup />
                    </q-card-actions>
                  </q-form>
                </div>
              </q-card>
            </q-card>
          </q-dialog>
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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const isMember = ref();
const $q = useQuasar();
const file = ref("");
const router = useRouter();
const courses = ref(null);
const addCourse = ref(false);
const courseName = ref("");
const description = ref("");
const photoUrl = ref(null);
const deletePhotoUrl = ref(null);

async function getCourses() {
  try {
    await axios.get(`${process.env.api_host}/courses`).then((response) => {
      courses.value = response.data;
      console.log(courses.value);
    });
  } catch {
    console.log("failed to get courses");
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

      roleValidation(myProfile.data[0].title);
    }
  } catch (err) {
    console.error(err);
  }
}

async function submitCourse() {
  try {
    await axios.post(
      ` ${process.env.api_host}/courses`,
      {
        name: courseName.value,
        description: description.value,
        file: file.value,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    addCourse.value = false;
    getCourses();
    $q.notify({
      type: "positive",
      message: "Course Created Successfully.",
    });

    // Reset the form after successful submission
    courseName.value = "";
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
  }
}

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

onMounted(() => {
  isLogin();

  getCourses();
});
</script>
