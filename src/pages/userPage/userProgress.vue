<template>
  <q-page>
    <div class="navbar-Profile">
      <div class="q-pb-xl">
        <UserNavBar />
      </div>
      <q-space />
      <div class="q-pt-lg">
        <notifProfile />
      </div>
    </div>
    <!-- Dashboard Content -->
    <div class="main-container q-pl-xl q-py-md">
      <div class="sub-container">
        <q-card-section
          class="text-h5 q-pl-none"
          style="font-weight: 600; color: #4b4b4b"
        >
          Progress
        </q-card-section>
        <div class="header-content">
          <div class="header-content1 q-pl-xl q-pt-lg">
            <span v-if="myProfile">
              <q-img :src="imageSrc" style="width: 180px; height: 180px" />
            </span>
          </div>
          <div class="header-content2">
            <div class="headerNameProgress q-py-lg">
              <q-card-section class="text-h6 q-pt-none">
                <span v-if="myProfile"
                  >Welcome back, {{ myProfile.firstName }}!</span
                >
              </q-card-section>
              <q-card-section class="text-h6 q-pb-none q-pt-none">
                Proficient
              </q-card-section>
              <div class="q-px-md" style="min-width: 0">
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
            <div
              style="
                align-items: center;
                display: flex;

                width: 30%;
              "
            >
              <q-card-section class="q-pa-none">
                You’ve learned
                <span style="color: #ffe20d; font-style: italic"
                  >70% of your</span
                >
                goal this week!
              </q-card-section>
            </div>
          </div>
        </div>
      </div>
      <!-- Progress Badges Certificates -->
      <q-card class="sub-container2 q-mt-md q-px-md q-py-lg">
        <!-- nav -->
        <div>
          <div class="sub-container2Nav">
            <div @click="showProgress" class="showProgress">
              <q-card-section
                class="text-subtitle2 clickDescAct"
                :class="{ active: progressLink }"
              >
                Progress
              </q-card-section>
            </div>
            <div @click="showBadges" class="showBadges">
              <q-card-section
                class="text-subtitle2 clickDescAct"
                :class="{ active: badgesLink }"
              >
                Badges
              </q-card-section>
            </div>
            <div @click="showCertificate" class="showCertificate">
              <q-card-section
                class="text-subtitle2 clickDescAct"
                :class="{ active: certificateLink }"
              >
                Certificates
              </q-card-section>
            </div>
          </div>
          <!-- Course Expertise -->

          <div
            class="sub-container2CourseExpertise q-ml-lg"
            v-if="progressLink"
          >
            <q-card-section class="text-subtitle1" style="font-weight: 500"
              >My Course Expertise</q-card-section
            >
            <!-- Course Progress -->
            <div class="titleProgressIndicator q-pl-none">
              <div class="courseTitle">
                <q-card-section>
                  CSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSS
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
          </div>
          <!-- badges -->
          <div class="badgeContainer q-px-md" v-if="badgesLink">
            <div class="userBadges">
              <div
                class="noviceBadge"
                :class="{
                  progressRank: myProfile && myProfile.rank >= 0,
                }"
              >
                <q-img src="/src/assets/novice.png" class="q-pa-none" />
                <q-card-section class="q-py-none"> Novice </q-card-section>
              </div>
              <div
                class="intermidiateBadge"
                :class="{
                  progressRank: myProfile && myProfile.rank >= 1,
                }"
              >
                <q-img src="/src/assets/intermidiate.png" class="q-pa-none" />
                <q-card-section class="q-py-none">
                  Intermediate
                </q-card-section>
              </div>
              <div
                class="proficientBadge"
                :class="{
                  progressRank: myProfile && myProfile.rank >= 2,
                }"
              >
                <q-img src="/src/assets/proficient.png" class="q-pa-none" />
                <q-card-section class="q-py-none"> Proficient </q-card-section>
              </div>
              <div
                class="advanceBadge"
                :class="{
                  progressRank: myProfile && myProfile.rank >= 3,
                }"
              >
                <q-img src="/src/assets/advance.png" class="q-pa-none" />
                <q-card-section class="q-py-none"> Advance </q-card-section>
              </div>
              <div
                class="expertBadge"
                :class="{
                  progressRank: myProfile && myProfile.rank >= 4,
                }"
              >
                <q-img src="/src/assets/expert.png" class="q-pa-none" />
                <q-card-section class="q-py-none"> Expert </q-card-section>
              </div>
            </div>

            <span
              v-if="myProfile"
              class="userCurrentBadge"
              :class="backgroundColorClass"
            >
              <q-img :src="imageSrc" style="width: 250px" />
            </span>
          </div>
          <!-- certificates -->
          <div class="certificateContainer" v-if="certificateLink">
            <div class="certificate1 certificateImg">
              <q-img
                src="/src/assets/waw.jpg"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
            <div class="certificate2 certificateImg">
              <q-img
                src="/src/assets/waw.jpg"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
            <div class="certificate3 certificateImg">
              <q-img
                src="/src/assets/waw.jpg"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
            <div class="certificate4 certificateImg">
              <q-img
                src="/src/assets/waw.jpg"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.navbar-Profile
  display: flex
.main-container
  width: 80vw

  height:  auto
.sub-container
  width: 100%

.header-content
  display: flex
  justify-content: flex-start
  align-items: center
  background: linear-gradient(175deg, #b592ec 8%, #5ce1e6 100%)
  border-radius: 24px
.header-content1
  width: 15%
.header-content2
  height: auto
  width: 80%
  display: flex
  justify-content: space-between
  color: #FFFFFF
.headerNameProgress
  width: 50%
.sub-container2
  height: auto
  width: 100%
  border-radius: 24px

.sub-container2Nav
  display: flex
.sub-container2CourseExpertise
  height: auto
  width: 60%
.progressIndicator
  display: flex
  width: 100%
  flex-direction: column
.rankIndicator
  display: flex
  flex-direction: row
  justify-content: space-between
  height: auto
  min-width: 550px
  width: 630px
.courseProgress
  height: auto
  width: 625px
.courseTitle
  width: 159px
  min-width: 100px
  font-size: 0.8em
  max-height: 50px
  overflow: hidden
  text-overflow: ellipsis
  text-align: center
.titleProgressIndicator
  display: flex
  display: flex
  white-space: nowrap
.badgeContainer
  width: 100%
  height: auto
  display: flex
.userBadges
  width: 70%
  height: auto
  display: flex
  flex-wrap: wrap
  justify-content: space-evenly
  row-gap: 30px
  column-gap: 60px
.userCurrentBadge
  width: 30%
  border-radius: 24px
  height: auto
  background-color: #828783
  display: flex
  justify-content: center
  align-items: center
.proficientBadge
  width: 200px
  height: 200px
  text-align: center
  border-radius: 24px
  color: #925FE2
.noviceBadge
  width: 200px
  height: 200px
  text-align: center
  border-radius: 24px
  color: #925FE2
.intermidiateBadge
  width: 200px
  height: 200px
  text-align: center
  border-radius: 24px
  color: #925FE2
.advanceBadge
  width: 210px
  height: 200px
  text-align: center
  border-radius: 24px
  color: #925FE2
.userCurrentBadge.novice
  background: linear-gradient(90deg, #ACACAC 0%, #DFE3EA 100%)
.userCurrentBadge.intermediate
  background: linear-gradient(90deg, #C76030 0%, #FCBC8B 100%)
.userCurrentBadge.proficient
  background: linear-gradient(90deg, #209220 0%, #7AF17A 100%)
.userCurrentBadge.advanced
  background: linear-gradient(90deg, #F6CD62 0%, #FFE9B8 100%)
.userCurrentBadge.expert
  background: linear-gradient(90deg, #966FD6 0%, #C696F9 100%)
.userCurrentBadge.default
  background-color: #9E9E9E/* gray */

.progressRank
  border: 2px solid #925FE2
.expertBadge
  width: 190px
  height: 200px
  text-align: center
  border-radius: 24px
  color: #925FE2
.certificateContainer
  height: auto
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  row-gap: 50px
.certificate1
  width: 30%
  height: 300px
  background-color: #D9D9D9
  border-radius: 24px
  overflow: hidden
.certificate2
  width: 30%
  height: 300px
  background-color: #D9D9D9
  border-radius: 24px
  overflow: hidden
.certificate3
  width: 30%
  height: 300px
  background-color: #D9D9D9
  border-radius: 24px
  overflow: hidden
.certificate4
  width: 30%
  height: 300px
  background-color: #D9D9D9
  border-radius: 24px
  overflow: hidden



.showProgress .clickDescAct,
.showBadges .clickDescAct,
.showCertificate .clickDescAct
  text-decoration: none
  cursor: pointer
  color: #979797  /* Default color for unselected links */
  transition: all 0.3s ease /* Smooth transition for color change */
// active
.showProgress .clickDescAct.active,
.showBadges .clickDescAct.active,
.showCertificate .clickDescAct.active
  color: #925FE2 /* Change text color when active (blue for example) */
  font-weight: bold /* Optionally make it bold */
@media (max-width:1526px)
  .main-container
    width: 70vw
  .rankIndicator
    display: flex
    flex-direction: row
    justify-content: space-between
    height: auto
    min-width: 330px
    width: 330px
  .courseProgress
    height: auto
    width: 460px
  .header-content1
    min-width: 20%
  .header-content2
    min-width: 60%
  .certificateImg
    min-width: 297px
@media (max-width:1322px)
  .header-content1
    min-width: 30%
  .header-content2
    min-width: 70%
@media (max-width:1008px)
  .main-container
    width: 95vw
  .header-content2
    max-height: 174px
  .certificateContainer
    justify-content: space-evenly
@media (max-width:810px)
  .badgeContainer

    flex-direction: column-reverse
    justify-content: center
    align-items: center
  .userCurrentBadge
    margin-bottom: 5%
    width: 190px
    height: 200px
  .userBadges
    min-width: 197px
@media (max-width:685px)
  .header-content
    flex-direction: column
    text-align: center
    height: 450px
  .header-content1
    padding: 0
    width: auto
  .header-content2
    flex-direction: column
    justify-content: center
    align-items: center
  .sub-container2CourseExpertise
    overflow-x: scroll
    width: 90%
</style>
<script setup>
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
import { ref, computed } from "vue";
import axios from "axios";
const progressLink = ref(false);
const badgesLink = ref(true);
const certificateLink = ref(false);

// Methods to toggle between the two sections
const showProgress = () => {
  progressLink.value = true;
  badgesLink.value = false;
  certificateLink.value = false;
};
const showBadges = () => {
  progressLink.value = false;
  badgesLink.value = true;
  certificateLink.value = false;
};

const showCertificate = () => {
  progressLink.value = false;
  badgesLink.value = false;
  certificateLink.value = true;
};

const myProfile = ref(null);
const token = localStorage.getItem("authToken");
// Check if token exists before making the request
if (token) {
  axios
    .get("http://localhost:3000/users/myProfile", {
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

const backgroundColorClass = computed(() => {
  if (myProfile.value.rank <= 0) {
    return "novice"; // Novice: light gray
  } else if (myProfile.value.rank === 1) {
    return "intermediate"; // Intermediate: yellow
  } else if (myProfile.value.rank === 2) {
    return "proficient"; // Proficient: green
  } else if (myProfile.value.rank === 3) {
    return "advanced"; // Advanced: blue
  } else if (myProfile.value.rank === 4) {
    return "expert"; // Expert: red
  } else {
    return "default"; // Default: gray
  }
});
</script>
