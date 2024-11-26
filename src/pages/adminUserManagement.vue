<template>
  <q-page>
    <!-- components -->
    <adminNavBar />
    <div class="main-contaier q-mt-xl q-py-md q-px-md">
      <div class="q-mt-xl">
        <q-card-section
          class="text-h5 text-weight-bold q-pl-none"
          style="color: #4b4b4b"
        >
          User Management
        </q-card-section>
        <q-card-section class="text-subtitle2 q-pt-none" style="color: #6c7275">
          Manage user accounts.
        </q-card-section>
      </div>

      <!-- student and Instructor NavBar -->
      <q-card-section class="studentInstructorNav">
        <div class="text-subtitle2 showStudent" @click="showStudent">
          <q-card-section
            class="q-py-none clickDescAct"
            :class="{ active: studentLink }"
            >Student</q-card-section
          >
        </div>
        <div class="text-subtitle2 showInstructor" @click="showInstructor">
          <q-card-section
            class="q-py-none clickDescAct"
            :class="{ active: instructorLink }"
            >Instructor</q-card-section
          >
        </div>
      </q-card-section>
      <q-separator />

      <q-card class="userManagement-container q-mt-md">
        <!-- student -->
        <div v-if="studentLink">
          <div class="q-pa-md" style="width: 100%; display: flex">
            <!-- Search Bar -->
            <div style="width: 350px">
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
              <q-select outlined v-model="model" :options="options" label="All">
                <template #prepend>
                  <!-- The custom content (e.g., "Sort:") goes inside the append slot -->
                  <div class="q-pl-sm text-caption">Sort:</div>
                </template>
              </q-select>
            </div>
          </div>
          <!-- user Management Content -->
          <div class="q-px-md">
            <!-- Header -->
            <q-card-section class="userManagement-header">
              <div style="width: 350px">Name</div>
              <div style="width: 350px">Registration Date</div>
              <div style="width: 350px">Status</div>
              <div style="width: 350px">Action</div>
            </q-card-section>
            <!-- content -->
            <div>
              <q-card-section class="userManagement-content">
                <div style="width: 350px">Miyawaki, Sakura</div>
                <div style="width: 350px">2023-02-14</div>
                <div style="width: 350px">Active</div>
                <div style="width: 350px">
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
              </q-card-section>
            </div>
          </div>
        </div>
        <!-- Instructor -->
        <div v-if="instructorLink">
          <div class="q-pa-md" style="width: 100%; display: flex">
            <!-- Search Bar -->
            <div style="width: 350px">
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
              <q-select outlined v-model="model" :options="options" label="All">
                <template #prepend>
                  <!-- The custom content (e.g., "Sort:") goes inside the append slot -->
                  <div class="q-pl-sm text-caption">Sort:</div>
                </template>
              </q-select>
            </div>
            <div class="q-ml-lg">
              <q-btn
                class="q-py-md"
                label="Add New Instructor"
                no-caps
                to="instructorRegisterPage"
                color="accent"
                style="background-color: #925fe2; width: 200px"
              />
            </div>
          </div>
          <!-- user Management Content -->
          <div class="q-px-md">
            <!-- Header -->
            <q-card-section class="userManagement-header">
              <div style="width: 350px">Name</div>
              <div style="width: 350px">Registration Date</div>
              <div style="width: 350px">Status</div>
              <div style="width: 350px">Action</div>
            </q-card-section>
            <!-- content -->
            <div>
              <q-card-section class="userManagement-content">
                <div style="width: 350px">Miyawaki, Sakura</div>
                <div style="width: 350px">2023-02-14</div>
                <div style="width: 350px">Active</div>
                <div style="width: 350px">
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
              </q-card-section>
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<style lang="sass" scoped>

.main-contaier
  width: 80vw

.studentInstructorNav
  display: flex
  width: 18%
  justify-content: space-between
  color: #4B4B4B

.userManagement-container
  height: auto
  min-height: 650px
  width: 100%
  border-radius: 14px
.userManagement-header
  background-color: #F2F7FF
  border-radius: 14px
  display: flex
  justify-content: space-between
  text-align: center

.userManagement-content
  display: flex
  justify-content: space-between
  text-align: center

.showStudent .clickDescAct,
.showInstructor .clickDescAct
  text-decoration: none
  cursor: pointer
  color: #979797  /* Default color for unselected links */
  transition: all 0.2s ease /* Smooth transition for color change */
// active
.showStudent .clickDescAct.active,
.showInstructor .clickDescAct.active
  color: #925FE2 /* Change text color when active (blue for example) */
  font-weight: bold /* Optionally make it bold */
</style>

<script setup>
import adminNavBar from "src/components/adminNavBar.vue";
import { ref, watch } from "vue";

const studentLink = ref(true);
const instructorLink = ref(false);

const showStudent = () => {
  studentLink.value = true;
  instructorLink.value = false;
};

const showInstructor = () => {
  studentLink.value = false;
  instructorLink.value = true;
};

// Define reactive variables
const searchQuery = ref("");
// const dataList = ref([
//   "Apple",
//   "Banana",
//   "Cherry",
//   "Date",
//   "Grape",
//   "Lemon",
//   "Orange",
//   "Peach",
//   "Pineapple",
//   "Strawberry",
// ]);
// const filteredResults = ref(dataList.value);

// // Watch the search query and update the filtered results
// watch(searchQuery, (newQuery) => {
//   filteredResults.value = dataList.value.filter((item) =>
//     item.toLowerCase().includes(newQuery.toLowerCase())
//   );
// });

// // Method for handling search input (you can add logic here if needed)
// function onSearchInput() {
//   // Additional logic can go here if needed
// }
</script>
