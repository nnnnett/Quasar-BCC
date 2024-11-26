<template>
  <q-page style="overflow: hidden">
    <!-- Navbar component -->
    <adminNavBar />

    <div class="main-contaier q-mt-xl q-py-md q-px-md">
      <div class="q-mt-xl">
        <q-card-section
          class="text-h5 text-weight-bold q-pl-none"
          style="color: #4b4b4b"
        >
          Welcome back, Admin
        </q-card-section>
      </div>

      <!-- Overview Container -->
      <div class="overview-container q-px-lg q-py-lg">
        <div class="overview-header q-py-sm">
          <div>
            <!-- Overview text -->
            <q-card-section
              class="text-h6 text-weight-medium q-pl-none"
              style="color: #4b4b4b"
            >
              Overview
            </q-card-section>
          </div>
          <!-- Calendar -->
          <div>
            <q-input filled v-model="formattedDate">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="formattedDate">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <!-- Overview for active user, total course, total user -->
        <div class="overview-content-container">
          <!-- active user -->
          <div class="overview-content" style="border: 2px solid #925fe2">
            <q-item-section avatar class="q-pl-lg">
              <q-icon name="library_books" style="color: #925fe2" />
            </q-item-section>
            <div>
              <q-card-section class="q-py-none"> 6 </q-card-section>
              <q-card-section class="q-py-none"> Active User </q-card-section>
            </div>
            <!-- total courses -->
          </div>
          <div class="overview-content" style="border: 2px solid #2584e9">
            <q-item-section avatar class="q-pl-lg">
              <q-icon name="library_books" style="color: #2584e9" />
            </q-item-section>
            <div>
              <q-card-section class="q-py-none">
                <span v-if="getCourses">{{
                  getCourses.count
                }}</span></q-card-section
              >
              <q-card-section class="q-py-none"> Total Courses </q-card-section>
            </div>
          </div>
          <!-- total users -->
          <div class="overview-content" style="border: 2px solid #5ce1e6">
            <q-item-section avatar class="q-pl-lg">
              <q-icon name="library_books" style="color: #5ce1e6" />
            </q-item-section>
            <div>
              <q-card-section class="q-py-none"
                ><span v-if="getTotalUsers">{{
                  getTotalUsers.number_of_users
                }}</span></q-card-section
              >
              <q-card-section class="q-py-none"> Total Users </q-card-section>
            </div>
          </div>
        </div>
      </div>
      <!-- Log and Notification -->

      <div class="logAndNotif-container q-pt-md">
        <q-card class="logAndNotif-content text-h6" style="color: #4b4b4b">
          <q-card-section>Log</q-card-section>

          <div
            class="q-px-md"
            style="display: flex; flex-direction: row; align-items: flex-start"
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
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              </q-card-section>
              <q-card-section class="text-overline q-pa-none">
                {{ formattedDate }}
              </q-card-section>
            </div>
          </div>
        </q-card>
        <q-card class="logAndNotif-content text-h6" style="color: #4b4b4b">
          <q-card-section>Notifications</q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>

.main-contaier
  width: 80vw

.overview-container
  height: auto
  width: 90%
  border-radius: 24px
  border: 2px solid transparent /* Set transparent border */
  border-image: linear-gradient(8deg, #B592EC, #5CE1E6) 1
  box-shadow: 0 0 0 2px transparent, 0 0 0 2px linear-gradient(8deg, #B592EC, #5CE1E6)
.overview-header
  display: flex
  justify-content: space-between
.overview-content-container
  width: 98%
  height: auto
  display: flex
  column-gap: 14px
.overview-content
  width: 30%
  height: 110px
  border-radius: 14px
  display: flex
  justify-content: flex-start
  align-items: center
.logAndNotif-container
  height: auto
  width: 90%
  display: flex
  justify-content: space-between
.logAndNotif-content
  width: 45%
  height: 500px
  border-radius: 14px
  overflow-y: scroll
</style>

<script setup>
import adminNavBar from "src/components/adminNavBar.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const formattedDate = ref("");
onMounted(() => {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  formattedDate.value = today.toLocaleDateString("en-US", options);
  console.log(process.env.api_host);
});

const getCourses = ref(null);
axios.get(`${process.env.api_host}/courses`).then((response) => {
  getCourses.value = response.data;
});

const getTotalUsers = ref(null);
axios.get(`${process.env.api_host}/users`).then((response) => {
  getTotalUsers.value = response.data;
});
</script>
