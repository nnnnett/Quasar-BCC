<template class="">
  <div>
    <q-page>
      <div class=" ">
        <!-- navbar -->
        <q-toolbar
          class="text-white headerSection flex q-py-xl"
          style="justify-content: space-evenly"
        >
          <div class="nav-txt-logo">
            <q-avatar class="logo-bcc">
              <img src="~assets/logo_bcc.png" />
            </q-avatar>
            <q-card-section class="text-bcc text-subtitle1">
              Bacoor Computer Clubhose Hub
            </q-card-section>
          </div>
          <div class="q-mr-xl">
            <NavBar />
          </div>
          <div class=" ">
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
                    <span v-if="getMembers">
                      {{ getMembers.count }}
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

            <div>
              <ImgCarousel />
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<style lang="sass" scoped>


.nav-txt-logo
  display: flex
  width: 25%
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
</style>

<script setup>
import ImgCarousel from "src/components/imgCarousel.vue";
import NavBar from "src/components/navBar.vue";
import axios from "axios";
import { ref } from "vue";
defineOptions({
  name: "IndexPage",
});

const getMembers = ref(null);
axios.get("http://localhost:3000/courses").then((response) => {
  getMembers.value = response.data;
});
</script>
