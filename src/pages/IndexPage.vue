<template>
  <div>
    <q-page>
      <div class="main-container">
        <!-- navbar -->
        <q-toolbar
          class="text-white headerSection flex q-py-xl q-px-xl"
          style="justify-content: space-between"
        >
          <div class="nav-txt-logo q-ml-xl">
            <div style="width: 350px">
              <q-img src="/src/assets/logo_banner_bcc.png" />
            </div>
            <q-avatar class="logo-bcc">
              <img src="~assets/logo_bcc.png" />
            </q-avatar>
            <q-card-section class="text-bcc text-h6 text-weight-bold">
              Bacoor Computer <br />Clubhose Hub
            </q-card-section>
          </div>

          <div class="q-mr-xl">
            <q-btn
              class="q-px-xl"
              label="Sign In"
              to="loginPage"
              no-caps
              color="#FFFFFF"
              style="background-color: #925fe2; width: 150px; height: 40px"
              rounded
            >
            </q-btn>
          </div>
        </q-toolbar>
        <!-- Landing Page Content -->
        <!-- First content -->
        <div class="flex" style="height: 80vh">
          <!-- left container-->
          <q-card-section
            class="q-pl-xl q-pr-none q-pt-none q-pb-xl"
            style="width: 50%"
          >
            <div style="" class="q-ml-xl">
              <q-card-section
                class="text-h3 q-ml-xl q-pt-xl"
                style="line-height: 1.5"
              >
                Empowering
                <span style="color: #5ce1e6; font-style: italic">Youth</span
                >,<br />
                One Byte at a Time
              </q-card-section>
              <q-card-section
                class="text-body1 q-ml-xl"
                style="text-align: justify; width: 90%"
              >
                Bacoor Computer Center is a unit of the City Government of
                Bacoor under the Office of the Mayor. We provide free computer
                trainings, workshops for Bacooreños.
              </q-card-section>
              <div class="q-ml-xl q-pl-md">
                <q-btn
                  label="Get Started"
                  no-caps
                  to="loginPage"
                  color="#FFFFFF"
                  style="background-color: #925fe2; width: 130px; height: 40px"
                  rounded
                />
              </div>
              <div class="flex q-ml-xl" style="width: 33%">
                <q-card-section class="q-px-none mentorStudent-counter">
                  <!-- Mentors -->
                  <q-card-section class="q-pt-none">8</q-card-section>
                  <q-card-section class="q-pt-none">Mentors</q-card-section>
                </q-card-section>
                <!-- students -->
                <q-card-section class="q-px-none mentorStudent-counter">
                  <q-card-section class="q-pt-none">
                    <span v-if="users">
                      {{ users.length }}
                    </span></q-card-section
                  >
                  <q-card-section class="q-pt-none">Students</q-card-section>
                </q-card-section>
              </div>
            </div>
          </q-card-section>
          <!-- right container -->
          <q-card-section style="width: 50%" class="q-pt-none">
            <!-- fixxxxxxx -->
            <q-responsive :ratio="16 / 9" class="banner-png">
              <div class="q-pa-md">
                <q-img src="~assets/bcc-banner.png" />
              </div>
            </q-responsive>
          </q-card-section>

          <!-- second content -->
          <div
            class="q-mt-xl"
            style="
              height: 70vh;
              background: linear-gradient(
                154deg,
                #b592ec 8%,
                #a79eeb 22%,
                #5ce1e6 100%
              );
              width: 100vw;
            "
          >
            <q-card-section style="text-align: center" class="q-pa-xl text-h4">
              As
              <span style="color: #ffffff; font-style: italic">Mentors</span>,
              We Inspire,<br />
              We Guide, We Empower.
            </q-card-section>
            <!-- List of Mentors -->
            <div style="width: 100%">
              <ImgCarousel />
            </div>
          </div>
          <!-- Offered activities -->
          <q-card-section class="offeredActivities-container">
            <div
              style="
                width: 1000px;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                column-gap: 24px;
                row-gap: 34px;
              "
            >
              <div
                class="text-h4 text-weight-medium"
                style="
                  height: 250px;
                  width: 300px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  text-align: justify;
                "
              >
                <q-card-section style="width: 240px; color: #4b4b4b">
                  Our
                  <span style="color: #925fe2; font-style: italic"
                    >Offered </span
                  >Activities
                </q-card-section>
              </div>

              <div
                style="
                  height: 250px;
                  width: 300px;
                  background-color: #925fe2;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <q-img
                  src="/src/assets/headphones.svg"
                  style="width: 100px; height: 100px; color: #ffffff"
                />
              </div>

              <div
                style="
                  height: 250px;
                  width: 300px;
                  background-color: #63dbe7;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <q-img
                  src="/src/assets/desktop.svg"
                  style="width: 100px; height: 100px; color: #ffffff"
                />
              </div>
              <div
                style="
                  height: 250px;
                  width: 300px;
                  background-color: #d5b3fb;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <q-img
                  src="/src/assets/desktop.svg"
                  style="width: 100px; height: 100px; color: #ffffff"
                />
              </div>
              <div
                style="
                  height: 250px;
                  width: 300px;
                  background-color: #8ab9e9;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <q-img
                  src="/src/assets/andriod.svg"
                  style="width: 100px; height: 100px; color: #ffffff"
                />
              </div>
              <div
                style="
                  height: 250px;
                  width: 300px;
                  background-color: #b693ec;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <q-img
                  src="/src/assets/camera.svg"
                  style="width: 100px; height: 100px; color: #ffffff"
                />
              </div>
            </div>
          </q-card-section>
          <!-- congressman -->
          <q-card-section class="congressman q-pa-none">
            <q-img
              src="/src/assets/congressman.png"
              style="width: 100%; height: auto; object-fit: cover"
            ></q-img>
          </q-card-section>
          <!-- our mission -->
          <q-card-section
            class="mission"
            style="
              display: flex;
              flex-direction: column;
              text-align: center;
              align-items: center;
            "
          >
            <div
              class="text-h3 text-weight-medium q-py-xl"
              style="color: #4b4b4b"
            >
              Our Mission
            </div>
            <div
              class="text-subtitle1 q-pb-xl"
              style="color: #4b4b4b; font-style: italic"
            >
              The Bacoor Computer Clubhouse Network provides a creative and safe
              after-school learning environment where young people from
              under-served communities work with adult mentors to explore their
              own ideas, develop skills, and build confidence in themselves
              through the use of technology. Using the "original" Clubhouse as a
              model, the Clubhouse Network supports community based Clubhouses
              around the world, providing thousands of youth with access to
              resources, skills and experiences to help them succeed in their
              careers, contribute to their communities, and lead outstanding
              lives.
            </div>
            <div
              class="text-subtitle1 q-pb-xl"
              style="color: #4b4b4b; font-style: italic"
            >
              The ongoing vision of the The Clubhouse Network is to proliferate
              the highly successful Clubhouse learning approach and establish it
              as replicable model for technology learning in community-based
              organizations around the world. The Clubhouse learning approach is
              designed to empower youth from all backgrounds to become more
              capable, creative, and confident learners. This approach is
              grounded in research from the fields of education, developmental
              and social psychology, cognitive science and youth development. It
              builds on research on the role of affect and motivation in the
              learning process, the importance of social context, and the
              interplay between Individual and community development. It
              leverages new technologies to support new types of learning
              experiences and engage young people who have been alienated by
              traditional educational approaches.
            </div>
          </q-card-section>
          <!-- tech4ed logo etc -->
          <q-card-section class="tech4dEtc">
            <div
              style="
                display: flex;
                width: 850px;
                height: 200px;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div style="width: 200px">
                <q-img src="/src/assets/tech4ed.png" />
              </div>
              <div style="width: 250px">
                <q-img src="/src/assets/strike.png" />
              </div>
              <div style="width: 200px">
                <q-img src="/src/assets/bacoor_logo.png" />
              </div>
            </div>
          </q-card-section>
          <q-card-section class="tech4dEtc q-pt-none">
            <div
              style="
                display: flex;
                width: 850px;
                height: 200px;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div style="width: 200px">
                <q-img src="/src/assets/logo_bcc.png" />
              </div>
              <div style="width: 600px">
                <q-img src="/src/assets/logo_banner_bcc.png" />
              </div>
            </div>
          </q-card-section>
          <!-- footer -->
          <q-card-section class="footer-container">
            <div class="sub-footer1">
              <div>
                <q-card-section
                  style="color: #4b4b4b"
                  class="text-h4 text-weight-medium"
                >
                  Elevate <span style="color: #ffffff">your </span
                  ><br />skills<span style="color: #ffffff"> now at BCC!</span>
                </q-card-section>
                <div
                  style="
                    display: flex;
                    width: 80%;
                    justify-content: space-evenly;
                  "
                >
                  <div style="width: 130px">
                    <q-img src="/src/assets/logo_bcc.png" />
                  </div>
                  <div style="width: 130px">
                    <q-img src="/src/assets/tech4ed.png" />
                  </div>
                </div>
                <div class="q-ml-lg q-mt-md" style="width: 250px">
                  <q-img src="/src/assets/logo_banner_bcc.png" />
                </div>
              </div>
            </div>
            <div class="sub-footer2">
              <q-card-section
                style="color: #ffffff"
                class="text-h5 text-weight-medium"
              >
                <div>
                  <div class="">Bacoor Computer Center</div>
                  <div
                    class="q-py-md"
                    style="display: flex; align-items: center"
                  >
                    <div style="width: 30px">
                      <q-img src="/src/assets/call.svg" />
                    </div>
                    <div>(046) 450 9293</div>
                  </div>
                  <div
                    class="q-pb-md"
                    style="display: flex; align-items: center"
                  >
                    <div style="width: 30px">
                      <q-img src="/src/assets/mail.svg" />
                    </div>
                    <div clickable @click="sendEmail" class="cursor-pointer">
                      bacoorcomputercenter@gmail.com
                    </div>
                  </div>
                  <div
                    class="q-pb-md"
                    style="display: flex; align-items: flex-start"
                  >
                    <div style="width: 50px">
                      <q-img src="/src/assets/location.svg" />
                    </div>
                    <div>
                      Gen. Evangelista St. Barangay Alima, Bacoor, Philippines
                    </div>
                  </div>
                </div>
              </q-card-section>
            </div>
            <div class="sub-footer3">
              <q-card-section
                class="text-h5 text-weight-medium"
                style="
                  width: 50%;
                  color: #ffffff;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                "
              >
                <div class="q-mt-md">About Us</div>
                <div class="text-h6 text-weight-regular q-py-sm">Mentors</div>
                <div class="text-h6 text-weight-regular q-pb-sm">
                  Activities
                </div>
                <div class="text-h6 text-weight-regular q-pb-sm">Mission</div>
              </q-card-section>
              <q-card-section
                class="text-h5 text-weight-medium"
                style="
                  width: 50%;
                  color: #ffffff;
                  height: 100px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                "
              >
                <div class="q-mt-md">Social Link</div>
                <div
                  style="
                    display: flex;
                    width: 80px;
                    justify-content: space-between;
                  "
                >
                  <div style="width: 30px">
                    <q-img
                      clickable
                      class="courser-pointer"
                      @click="facebookLink"
                      src="/src/assets/facebook.png"
                    />ewew
                  </div>
                  <div class=" " style="width: 30px">
                    <q-img src="/src/assets/youtube.png" />
                  </div>
                </div>
              </q-card-section>
            </div>
          </q-card-section>
        </div>
      </div>
    </q-page>
  </div>
  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<style lang="sass" scoped>
.main-container
  width: 100%

.nav-txt-logo
  display: flex
  width: 30%
  align-content: center
  align-items: center
.logo-bcc
  height: 70px
  width: 70px

.text-bcc
  color: #4b4b4b
  width: 70%

.mentorStudent-counter
  text-align: center
.banner-img
  width: 50px
.banner-png
  width: 70%
  height: 100px

.offeredActivities-container
  width: 100%
  height: 600px
  display: flex
  align-items: center
  justify-content: space-around
.congressman
  width: 100%
  height: auto
.mission
  width: 100%
  height: 500px
.tech4dEtc
  width: 100%
  height: 300px
  display: flex
  justify-content: center

.footer-container
  height: 500px
  width: 100%
  background: linear-gradient(170deg, #B592EC 8%, #5CE1E6 100%)
  display: flex
  justify-content: space-evenly
.sub-footer1
  width: 400px
  height: 400px
  display: flex
  align-items: center
  justify-content: center
.sub-footer2
  width: 500px
  height: 300px
  display: flex
  align-items: center

.sub-footer3
  width: 500px
  height: 200px
  display: flex
</style>

<script setup>
import ImgCarousel from "src/components/imgCarousel.vue";
import NavBar from "src/components/navBar.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const users = ref(null);
const sendEmail = () => {
  window.location.href = "mailto:bacoorcomputercenter@gmail.com";
};
const facebookLink = () => {
  window.open("https://www.facebook.com/bacoorcomputercenter", "_blank");
};
const youtubeLink = () => {
  window.location.href = "mailto:bacoorcomputercenter@gmail.com";
};
async function getUsers() {
  try {
    const getMembers = ref(null);
    axios.get(`${process.env.api_host}/courses`).then((response) => {
      users.value = response.data;
    });
  } catch {
    console.log("failed to get users");
  }
}

onMounted(() => {
  getUsers();
});
</script>
