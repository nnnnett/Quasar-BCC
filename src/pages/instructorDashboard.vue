<template>
  <q-page>
    <instructorNavBar />
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
              <q-card-section class="q-pb-none q-pl-none"> 0 </q-card-section>
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
              to="#"
              class="q-pt-md viewAllactiveCourse-link text-subtitle1"
            >
              View All
            </RouterLink>
          </div>
          <div class="diffCourseActive">
            <div class="cssContainer q-mr-none q-pt-md activeCourseList">
              <!-- Loop through courses based on getCourses.count -->
              <div>
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

                <!-- Course name displayed dynamically -->
                <q-card-section
                  class="q-pb-none text-subtitle1"
                  style="font-size: 1em; text-transform: capitalize"
                >
                  try
                </q-card-section>

                <!-- Topic count (replace this with dynamic topic count if needed) -->
                <q-card-section class="q-pt-none q-pb-sm text-caption">
                  5 topics
                </q-card-section>

                <!-- Button to navigate to a dynamic course page -->
                <div
                  style="height: 50px; display: flex; justify-content: flex-end"
                >
                  <q-btn icon="chevron_right" class="q-px-sm q-mr-md" flat />
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const mentors = ref("");
const optionMentors = {
  AssignedMentor: ["nnet", "jules", "khris"],
};
const formattedDate = ref("");
const router = useRouter();

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
    console.log("here", response);
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
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  formattedDate.value = today.toLocaleDateString("en-US", options);
});
</script>
