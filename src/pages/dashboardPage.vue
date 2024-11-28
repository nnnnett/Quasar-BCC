<template>
  <q-page>
    <!-- Components -->
    <div class="navbar-Profile">
      <div class="q-pb-xl">
        <UserNavBar />
      </div>

      <div class="q-pt-lg">
        <notifProfile />
      </div>
    </div>
    <!-- Dashboard Content -->

    <div class="main-container q-pb-xl">
      <div class="main-dashboard q-pl-xl">
        <q-card-section
          class="text-h5 q-pl-none dashboard-txt"
          style="font-weight: 600; color: #4b4b4b"
        >
          Dashboard
        </q-card-section>
        <div class="mindstorm-container q-pl-xl q-pb-lg">
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
              <q-card-section class="q-pb-none q-pl-none">
                <span v-if="courses">
                  {{ courses.length }}
                </span></q-card-section
              >
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
            <RouterLink
              to="course"
              class="q-pt-md viewAllactiveCourse-link text-subtitle1"
            >
              View All
            </RouterLink>
          </div>
          <!-- different active courses -->
          <div v-if="courses" class="diffCourseActive">
            <!-- Second Active //CSS-->
            <div
              v-for="courses in courses"
              :key="courses._id"
              class="cssContainer q-mr-none q-pt-md activeCourseList"
            >
              <!-- Loop through courses based on getCourses.count -->
              <div>
                <div
                  class="q-mx-md"
                  :style="{
                    width: '85%',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '14px',
                  }"
                >
                  <!-- icon container -->
                  <q-img
                    cover
                    style="border-radius: 14px"
                    :src="courses.file"
                    class="responsive-img"
                    v-if="courses"
                  >
                  </q-img>
                </div>

                <!-- Course name displayed dynamically -->
                <q-card-section
                  class="q-pb-none text-subtitle1"
                  style="font-size: 1em; text-transform: capitalize"
                >
                  <span v-if="courses">
                    {{ courses.name }}
                  </span>
                </q-card-section>

                <!-- Topic count (replace this with dynamic topic count if needed) -->
                <q-card-section class="q-pt-none q-pb-sm text-caption">
                  {{ courses.activities.length }} Activities
                </q-card-section>

                <!-- Button to navigate to a dynamic course page -->
                <div
                  style="height: 50px; display: flex; justify-content: flex-end"
                >
                  <q-btn
                    icon="chevron_right"
                    class="q-px-sm q-mr-md"
                    :to="'/cssCourse/' + courses._id"
                    flat
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- My Course Expertise -->
        <!-- <q-card class="courseExpertiseContainer q-mt-md">
          <div class="header-ExpertiseContainer">
            <q-card-section class="text-h6">
              My Course Expertise
            </q-card-section>
          </div>
          <div class="titleProgressIndicator q-pr-md">
            <div class="courseTitle">
              <q-card-section
                style="
                  font-size: 0.8em;
                  max-height: 50px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  text-align: center;
                  text-transform: capitalize;
                "
              >
                <span v-if="courses">{{ courses.name }} </span>
              </q-card-section>
            </div>

            <div class="progressIndicator">
              <div class="courseProgress q-pb-none">
                <div class="q-py-lg q-px-md" style="min-width: 0">
                  <q-linear-progress
                    v-for="size in ['md']"
                    :key="size"
                    :size="size"
                    :value="0.5"
                    @click="randomize"
                    style="color: #925fe2"
                  />
                </div>
              </div>
              <div class="rankIndicator" style="font-size: 1em">
                <q-card-section>Noivice</q-card-section>
                <q-card-section>Intermediate</q-card-section>
                <q-card-section>Proficient</q-card-section>
                <q-card-section>Advance</q-card-section>
                <q-card-section>Expert</q-card-section>
              </div>
            </div>
          </div>
        </q-card> -->
      </div>
      <!-- statistics -->
      <div class="statisticsCont qp">
        <!-- <q-card-section
          v-if="isMember"
          class="text-h5"
          style="align-self: flex-start"
          >Statistics</q-card-section> -->
        <div class="statsProfileContainer" v-if="isMember">
          <q-card
            class="statsProfile q-py-md"
            style="
              background: linear-gradient(150deg, #b592ec 8%, #5ce1e6 100%);
              height: auto;
              border-radius: 14px;
              background-image: (url('/src/assets/profileDecor.png'));
              background-size: cover; /* Adjust as needed */
              background-position: center; /* Center the image */
            "
          >
            <div class="statisticsDetails" style="height: auto">
              <div class="q-mt-md badge-container">
                <span v-if="myProfile">
                  <q-avatar class="sampleBadge">
                    <q-img :src="imageSrc" />
                  </q-avatar>
                </span>
                <span v-if="myProfile">
                  <q-avatar class="mainAvatar">
                    <q-img
                      :src="getProfileImg(myProfile.userImage)"
                      style="width: 90px; height: 90px; border-radius: 100px"
                    />
                  </q-avatar>
                </span>
              </div>
              <div class="statisticsText" style="color: #ffffff">
                <q-card-section class="text-h6 q-pt-none">
                  Welcome back,
                  <span v-if="myProfile" style="text-transform: capitalize">
                    {{ myProfile.firstName }}!</span
                  >
                </q-card-section>
              </div>
            </div>
            <div class="logAndNotif-container q-px-md">
              <q-card
                class="logAndNotif-content text-h6"
                style="
                  color: #4b4b4b;
                  background-color: transparent;
                  border: 1px solid #f2f7ff;
                  border-radius: 14px;
                "
              >
                <q-card-section>Logs and Notifications</q-card-section>

                <q-scroll-area style="height: 400px; width: 550px">
                  <div
                    v-for="n in 100"
                    :key="n"
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
                        style="max-width: 550px; text-align: justify"
                        >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Minima Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Minima Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Minima
                      </q-card-section>
                      <q-card-section class="text-overline q-pa-none">
                        {{ formattedDate }}
                      </q-card-section>
                    </div>
                  </div>
                </q-scroll-area>
              </q-card>
            </div>
          </q-card>
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
  justify-content: space-between
.main-dashboard

  width: 50%
  height: auto
.mindstorm-container
  border: 4px solid #925FE2
  background-color: rgba(156, 111, 228, 0.3) /* Adjust the alpha value (0.7) to your preference */
  width: 90%
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
  width: 44%
  display: flex

.completedCourse
  border: 2px solid #5CE1E6
  border-radius: 14px
  width: 44%
  display: flex
// .activeCourse-counter
//   display: flex
//   flex-direction: column

.activeCourse-container
  height: auto
  width: 90%

.viewAllactiveCourse-link
  text-decoration: none

.diffCourseActive
  display: flex
  width: auto
  height: 260px
  column-gap: 30px
  overflow: hidden

.activeCourseList
  min-width: 30%
  max-height: 260px
  border: 1px solid #8F9BB3
  border-radius: 14px

.courseExpertiseContainer
  border-radius: 14px
  height: auto
  width: 90%

.ExpertiseChart
  display: flex
  flex-direction: column

.header-ExpertiseContainer
  display: flex

.courseProgress
  height: auto
  width: 480px

.courseTitle
  width: 209px
  height: 50px


.titleProgressIndicator
  display: flex
  display: flex
  white-space: nowrap

.progressIndicator
  display: flex
  width: 100%
  flex-direction: column


.rankIndicator
  display: flex
  flex-direction: row
  justify-content: space-around
  height: auto
  width: 490px

.statisticsCont
  display: flex

  align-items: center /* Center horizontally */
  width: 40%
  border-radius: 14px
  background-color: #f2f7ff
  height: auto
  min-height: 700px

  // border: 1px solid red
.statsProfileContainer
  display: flex
  justify-content: center /* Center the card inside the container */
  width: 100% /* Ensure the container takes the full width */

.statsProfile
  width: auto
  height: auto

.statisticsDetails
  display: flex
  flex-direction: column
  align-items: center
  text-align: center

.badge-container
  border: 1px solid #e2d4f7
  background-color: #e2d4f7
  height: auto
  width: auto
  border-radius: 50px
  position: relative // Set the container to relative positioning
  display: flex
  justify-content: center // Center the avatars horizontally
  align-items: center // Center the avatars vertically

.sampleBadge
  width: 85px
  height: 85px
  z-index: 10
  position: absolute // Keep it absolute to position it freely
  top: -15% // Adjust positioning as needed
  left: 45% // Adjust positioning as needed
.mainAvatar
  width: 100px
  height: 100px

.logAndNotif-container
  height: auto
  width: 90%
  display: flex
// screen responsive

@media (max-width: 1720px)
  .main-dashboard
    min-width: 1000px
  .courseTitle
    width: 30% // Make title responsive
    height: auto // Allow height to adjust


  .progressIndicator
    width: 100% // Make progress indicator responsive
    display: flex
  .courseProgress
    width: 95%

  .rankIndicator
    width: 100% // Make rank indicator responsive
    display: flex
    justify-content: space-around


@media (max-width:1644px)
  .statisticsCont
    margin-left:-6%


@media (max-width:1543px)
  .main-container
    display: flex
    flex-direction: column-reverse
    align-items: center
    margin-top: 25%
  .main-dashboard
    min-width: 1000px

  .statisticsCont
    min-width: 1000px
    margin-left:0%
    padding-bottom: 3%
  .dashboard-txt
    magin-top:5%
    margin-left: -5%
    width: 100%
@media (max-width:1387px)
  .main-container
    margin-top:30%
  .main-dashboard
    min-width: 850px

  .statisticsCont
    min-width: 850px

@media (max-width:1166px)
  .main-container
    margin-top:35%
  .main-dashboard
    min-width: 750px

  .statisticsCont
    min-width: 750px
  .progressIndicator
    overflow-x: scroll
  .courseProgress
    width: 100%
  .rankIndicator
    width: 100%
  .dashboard-txt
    margin-left: -7%

@media (max-width:1120px)
  .main-container
    margin-top:40%
  .main-dashboard

    min-width: 700px
  .statisticsCont
    min-width: 700px
  .courseProgress
    width: 115%
  .rankIndicator
    width: 100%

@media (max-width:1023px)
  .main-dashboard
    min-width: 700px
  .statisticsCont
    min-width: 700px


@media (max-width:805px)
  .main-container
    margin-top:45%
  .main-dashboard
    min-width: 600px
  .statisticsCont
    min-width: 600px
  .courseProgress
    width: 135%


@media (max-width:630px)
  .main-container
    margin-top:85%
  .statisticsCont
    min-width: 400px
  .main-dashboard
    min-width: 400px
  .dashboard-txt
    margin-left: -9%
  .activeCompleteCourse-container
    display: flex
    flex-direction: column
    width: 100%
  .activeCourse
    width: 90%
  .completedCourse
    width: 90%
    margin-left: -0.5%
  .activeCourse-container
    overflow-x: scroll
  .activeCourseAndLink
    display: flex
    padding: 0
    flex-direction: column
    width: 100%
  .diffCourseActive
    width: 500px
  .courseProgress
    width: 220%
@media (max-width:582px)
  .main-container
    margin-top:90%
@media (max-width:544px)
  .main-container
    margin-top:105%
@media (max-width:480px)
  .main-container
    margin-top:125%

@media (max-width:396px)
  .main-container
    margin-top:135%
</style>

<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
import { useRouter } from "vue-router";

const progress = ref(0.65);
const courses = ref(null);
const myProfile = ref(null);
const router = useRouter();
const isMember = ref(true);
const formattedDate = ref("");
const logs = ref(null);

const randomize = () => {
  progress.value = Math.random();
};

async function getCourses() {
  try {
    axios.get(`${process.env.api_host}/courses`).then((response) => {
      courses.value = response.data;
    });
  } catch {
    console.log("failed to get courses");
  }
}

const token = localStorage.getItem("authToken");
// Check if token exists before making the request
if (token) {
  axios
    .get(`${process.env.api_host}/users/myProfile`, {
      headers: {
        authorization: `${token}`,
      },
    })
    .then((response) => {
      myProfile.value = response.data[0];
    })
    .catch((error) => {
      console.error("API call failed:", error);
    });
} else {
  console.log("No token found in localStorage");
}

const getProfileImg = () => {
  return myProfile.value.userImage;
};

const imageSrc = computed(() => {
  if (myProfile.value.rank <= 0) {
    return "/src/assets/novice.png"; // Image for rank <= 0
  } else if (myProfile.value.rank === 1) {
    return "/src/assets/intermidiate.png"; // Image for rank = 1
  } else if (myProfile.value.rank === 2) {
    return "/src/assets/proficient.png"; // Image for rank = 2
  } else if (myProfile.value.rank === 3) {
    return "/src/assets/advance.png"; // Image for rank = 2
  } else if (myProfile.value.rank === 4) {
    return "/src/assets/expert.png"; // Image for rank = 2
  } else {
    return "/src/assets/Default.png"; // Default image for other ranks
  }
});

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

async function getLogs() {
  try {
    const response = await axios.get(`${process.env.api_host}/users/logs`);
    logs.value = response.data;
    console.log(logs.value);
  } catch (err) {
    console.error(err);
  }
}

onMounted(() => {
  isLogin();
  getCourses();
  getLogs();
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  formattedDate.value = today.toLocaleDateString("en-US", options);
  console.log(process.env.api_host);
});
</script>
