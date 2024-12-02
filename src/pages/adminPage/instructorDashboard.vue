<template>
  <q-page>
    <div style="display: flex">
      <div class="q-pb-xl">
        <instructorNavBar />
      </div>
      <q-space />
      <div class="q-pt-lg">
        <notifProfile />
      </div>
    </div>
    <q-card-section
      class="text-h5 q-pl-lg"
      style="font-weight: 600; color: #4b4b4b"
    >
      Dashboard
    </q-card-section>
    <div class="main-container">
      <!-- Container 1 -->
      <div class="container-1 q-pl-lg">
        <div class="activeCompleteCourse-container">
          <!-- active -->
          <div class="activeCourse q-mt-md">
            <q-item-section avatar class="q-pl-lg">
              <q-icon name="library_books" style="color: #925fe2" />
            </q-item-section>
            <div class="q-pl-none">
              <q-card-section class="q-pb-none q-pl-none">
                <span v-if="courses">
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
        <div class="activeCourse-container q-mt-md">
          <div class="flex activeCourseAndLink">
            <q-card-section class="q-pl-none text-h6">
              Active Courses
            </q-card-section>
            <q-space />
            <RouterLink
              to="instructorCoursePage"
              class="q-pt-md viewAllactiveCourse-link text-subtitle1"
            >
              View All
            </RouterLink>
          </div>
          <div v-if="courses" class="diffCourseActive">
            <div
              v-for="course in courses"
              :key="course._id"
              class="cssContainer q-mr-none q-pt-md activeCourseList"
            >
              <!-- Loop through courses based on getCourses.count -->
              <div>
                <span v-if="courses">{{ courses.name }}</span>
                <div
                  class="q-mx-md"
                  :style="{
                    background:
                      'linear-gradient(180deg, #ffe3fc 0%, #e08dd7 100%)',
                    width: '85%',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '14px',
                  }"
                >
                  <q-img
                    :src="course.courseFile"
                    style="width: 150px; border-radius: 14px"
                  ></q-img>

                  <!-- icon container -->
                </div>

                <!-- Course name displayed dynamically -->
                <q-card-section
                  class="q-pb-none text-subtitle1"
                  style="font-size: 1em; text-transform: capitalize"
                >
                  <span v-if="courses">{{ course.name }}</span>
                </q-card-section>

                <!-- Topic count (replace this with dynamic topic count if needed) -->
                <q-card-section class="q-pt-none q-pb-sm text-caption">
                  5 topics
                </q-card-section>

                <!-- Button to navigate to a dynamic course page -->
                <div
                  style="height: 50px; display: flex; justify-content: flex-end"
                >
                  <q-btn
                    icon="chevron_right"
                    class="q-px-sm"
                    flat
                    :to="'/instructorAddActivity/' + course._id"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- container 2 -->
      <div class="container-2">
        <q-card style="border-radius: 14px" class="">
          <q-card-section style="display: flex; justify-content: space-between"
            ><div
              class="text-h6 q-pl-lg"
              style="font-weight: 600; color: #4b4b4b"
            >
              Course Statistics
            </div>
            <div style="width: 30%">
              <q-select
                filled
                v-model="mentors"
                :options="optionMentors.AssignedMentor"
                label="Select Course"
              />
            </div>
          </q-card-section>
          <q-card-section class="pieChart flex flex-center q-py-none">
            <InstructorDashboardChart />
          </q-card-section>
        </q-card>
        <q-card class="q-mt-md recentActivity-container">
          <q-card-section style="display: flex; justify-content: space-between">
            <div
              class="text-h6 q-pl-lg"
              style="font-weight: 600; color: #4b4b4b"
            >
              Recent Activity
            </div>
            <div style="width: 30%">
              <q-select
                filled
                v-model="mentors"
                :options="optionMentors.AssignedMentor"
                label="Select Course"
              />
            </div>
          </q-card-section>
          <q-card-section>
            <div class="logAndNotif-content text-h6" style="color: #4b4b4b">
              <div
                class="q-px-md"
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                "
              >
                <q-img
                  src="/src/assets/yanami.png"
                  style="
                    width: 40px;
                    height: 40px;
                    border-radius: 50px;
                    flex-shrink: 0;
                  "
                />
                <div class="q-px-md">
                  <q-card-section
                    class="text-subtitle2 q-pa-none"
                    style="max-width: 650px; text-align: justify"
                    >Name, Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Minima Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Minima Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Minima
                  </q-card-section>
                  <q-card-section class="text-overline q-pa-none">
                    {{ formattedDate }}
                  </q-card-section>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="sass">
.main-container
  display: flex
  height: 1000px
  width: 80vw
.activeCompleteCourse-container
  display: flex
  flex-direction: row
.activeCourse
  border: 2px solid #925FE2
  border-radius: 14px
  width: 45%
  display: flex
.completedCourse
  border: 2px solid #5CE1E6
  border-radius: 14px
  width: 45%
  display: flex
.container-1
  width: 50%
.container-2
  width: 50%
.diffCourseActive
  display: flex
  width: auto
  height: 260px
  column-gap: 30px
  flex-wrap: wrap
  row-gap: 20px
.activeCourseList
  width: 30%
  max-height: 260px
  border: 1px solid #8F9BB3
  border-radius: 14px
.activeCourse-container
  height: auto
  width: 90%
.viewAllactiveCourse-link
  text-decoration: none
.pieChart
  height: 300px
.recentActivity-container
  height: 500px
.logAndNotif-content
  width: 100%
  height: auto
  border-radius: 14px
</style>

<script setup>
import InstructorDashboardChart from "src/components/instructorDashboardChart.vue";
import instructorNavBar from "src/components/instructorNavBar.vue";
import notifProfile from "src/components/notifProfile.vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const mentors = ref("");
const optionMentors = {
  AssignedMentor: ["nnet", "jules", "khris"],
};
const formattedDate = ref("");
const router = useRouter();
const courses = ref(null);

async function getCourses() {
  try {
    await axios.get(`${process.env.api_host}/courses`).then((response) => {
      courses.value = response.data;
      console.log(response.data);
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
    }
  } catch (err) {
    console.error(err);
  }
}

onMounted(() => {
  isLogin();
  getCourses();
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  formattedDate.value = today.toLocaleDateString("en-US", options);
});
</script>
