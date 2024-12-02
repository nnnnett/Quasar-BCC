<template>
  <q-page>
    <instructorNavBar />
    <q-card-section
      class="text-h5 q-pl-lg"
      style="font-weight: 600; color: #4b4b4b"
    >
      Course
    </q-card-section>
    <div class="main-container">
      <q-card-section class="q-pa-md container-header">
        <!-- Search Bar -->
        <div style="width: 350px" class="q-pl-sm">
          <q-input
            v-model="searchQuery"
            label="Search"
            outlined
            rounded
            clearable
            @input="onSearchInput"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <q-space />
        <div style="width: 200px">
          <q-select outlined v-model="model" :options="options" label="A-Z">
            <template #prepend>
              <!-- The custom content (e.g., "Sort:") goes inside the append slot -->
              <div class="q-pl-sm text-caption">Sort:</div>
            </template>
          </q-select>
        </div>
      </q-card-section>
      <div class="diffCourseActive q-pl-lg">
        <div class="cssContainer q-mr-none q-pt-md activeCourseList">
          <!-- Loop through courses based on getCourses.count -->
          <div>
            <div
              class="q-mx-md"
              :style="{
                background: 'linear-gradient(180deg, #ffe3fc 0%, #e08dd7 100%)',
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
            <div style="height: 50px; display: flex; justify-content: flex-end">
              <q-btn icon="chevron_right" class="q-px-sm q-mr-md" flat />
            </div>
          </div>
        </div>
        <div class="cssContainer q-mr-none q-pt-md activeCourseList">
          <!-- Loop through courses based on getCourses.count -->
          <div>
            <div
              class="q-mx-md"
              :style="{
                background: 'linear-gradient(180deg, #ffe3fc 0%, #e08dd7 100%)',
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
            <div style="height: 50px; display: flex; justify-content: flex-end">
              <q-btn icon="chevron_right" class="q-px-sm q-mr-md" flat />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.main-container
  display: flex
  flex-direction: column
  height: 1000px
  width: 75vw

.container-header

  width: 100%
  display: flex
  height: 100px

.diffCourseActive
  display: flex
  flex-wrap: wrap
  column-gap: 15px
  row-gap: 20px
  justify-content: flex-start
  align-items: flex-start
  width: 100%
  max-width: 100%
  height: auto
.activeCourseList
  max-width: 210px
  min-width: 210px
  max-height: 260px
  border: 1px solid #8F9BB3
  border-radius: 14px
</style>

<script setup>
import instructorNavBar from "src/components/instructorNavBar.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

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
});
</script>
