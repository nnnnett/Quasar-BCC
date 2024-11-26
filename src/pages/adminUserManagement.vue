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
          <!-- student Management Content -->
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
                      <q-item clickable @click="viewDetails = true">
                        <q-item-section>
                          <q-item-label>View Details</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        to="#"
                        v-close-popup
                        @click="onItemClick"
                      >
                        <q-item-section>
                          <q-item-label>Active</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        to="#"
                        v-close-popup
                        @click="onItemClick"
                      >
                        <q-item-section>
                          <q-item-label>Inactive</q-item-label>
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
          <!-- Instructor Management Content -->
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
                      <q-item clickable @click="viewDetails = true">
                        <q-item-section>
                          <q-item-label>View Details</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        to="#"
                        v-close-popup
                        @click="onItemClick"
                      >
                        <q-item-section>
                          <q-item-label>Active</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        to="#"
                        v-close-popup
                        @click="onItemClick"
                      >
                        <q-item-section>
                          <q-item-label>Inactive</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>
              </q-card-section>
            </div>
          </div>
        </div>
        <div>
          <q-dialog
            full-height
            full-width
            v-model="viewDetails"
            class="courseEdit-container"
          >
            <q-card style="display: flex">
              <div style="border: 1px solid red; width: 60%; color: #4b4b4b">
                <q-card-section>
                  <div class="text-h6 text-weight-medium">Personal Details</div>
                </q-card-section>
                <!-- first middle last name -->
                <q-card-section
                  class="q-py-none"
                  style="display: flex; justify-content: space-between"
                >
                  <div style="width: 30%">
                    <div>First Name</div>
                    <q-input
                      outlined
                      rounded
                      v-model="firstName"
                      clearable
                      type="text"
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Middle Name</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="middleName"
                      type="text"
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Last Name</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="lastName"
                      type="text"
                    />
                  </div>
                </q-card-section>
                <!-- gender contact birthdate -->
                <q-card-section
                  class=" "
                  style="display: flex; justify-content: space-between"
                >
                  <div style="width: 30%">
                    <div>Gender</div>
                    <q-select
                      outlined
                      rounded
                      clearable
                      v-model="gender"
                      :options="genderOptions.option"
                      type="text"
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Birthdate</div>
                    <q-input type="date" rounded v-model="date" outlined />
                  </div>
                  <div style="width: 30%">
                    <div>Contact</div>
                    <q-input
                      outlined
                      clearable
                      rounded
                      v-model="contact"
                      type="number"
                    />
                  </div>
                </q-card-section>
                <!-- address -->
                <q-card-section>
                  <div class="text-h6">Address</div>
                </q-card-section>
                <q-card-section
                  class="q-py-none"
                  style="display: flex; justify-content: space-between"
                >
                  <div style="width: 25%">
                    <div>Country</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="country"
                      type="text"
                    />
                  </div>
                  <div style="width: 20%">
                    <div>Zip Code</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="zipCode"
                      type="number"
                    />
                  </div>
                  <div style="width: 25%">
                    <div>Province</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="province"
                      type="text"
                    />
                  </div>
                  <div style="width: 25%">
                    <div>Municipality</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="municipality"
                      type="text"
                    />
                  </div>
                </q-card-section>
                <q-card-section
                  class=" "
                  style="display: flex; justify-content: space-between"
                >
                  <div style="width: 30%">
                    <div>Barangay</div>
                    <q-input
                      clearable
                      outlined
                      rounded
                      v-model="barangay"
                      type="text"
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Street Name</div>
                    <q-input
                      outlined
                      clearable
                      rounded
                      v-model="streetName"
                      type="text"
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Block & Lot</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="blockAndLot"
                      type="text"
                    />
                  </div>
                </q-card-section>
                <!-- guardian details -->
                <q-card-section>
                  <div class="text-h6">Guardian</div>
                </q-card-section>
                <q-card-section
                  class="q-py-none"
                  style="display: flex; justify-content: space-between"
                >
                  <div style="width: 30%">
                    <div>First Name</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="guardianFirstName"
                      type="text"
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Middle Name</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="guardianMiddleName"
                      type="text"
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Last Name</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="guardianLastName"
                      type="text"
                    />
                  </div>
                </q-card-section>
              </div>

              <div style="border: 1px solid black; width: 40%">
                <!-- user Profile -->
                <q-card-section
                  class="flex flex-center q-mt-xl"
                  style="display: flex; flex-direction: column"
                >
                  <q-img src="/src/assets/lee.png" style="max-width: 450px" />
                  <div style="width: auto" class="q-mt-md">
                    <q-file
                      v-model="file"
                      label="Upload Photo"
                      label-style="text-align:center"
                      accept="image/*"
                      filled
                      outlined
                      clearable
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" />
                      </template>
                    </q-file>
                  </div>
                </q-card-section>
                <!-- Account Details -->
                <q-card-section
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <div style="width: 45%; margin-bottom: 1rem">
                    <div>Username</div>
                    <q-input
                      outlined
                      clearable
                      rounded
                      v-model="userName"
                      type="text"
                    />
                  </div>
                  <div style="width: 45%; margin-bottom: 1rem">
                    <div>email</div>
                    <q-input
                      outlined
                      clearable
                      rounded
                      v-model="email"
                      type="email"
                    />
                  </div>
                  <div style="width: 45%; margin-bottom: 1rem">
                    <div>Password</div>
                    <q-input
                      v-model="password"
                      filled
                      :type="isPwd ? 'password' : 'text'"
                      hint="Password with toggle"
                    >
                      <template v-slot:append>
                        <q-icon
                          :name="isPwd ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd = !isPwd"
                        />
                      </template>
                    </q-input>
                  </div>
                </q-card-section>
                <q-card-actions align="right" class="text-primary">
                  <q-btn flat label="Save" @click="secondDialog = true" />
                  <q-btn flat label="Close" v-close-popup />
                </q-card-actions>
              </div>
            </q-card>
          </q-dialog>
          <q-dialog
            v-model="secondDialog"
            persistent
            transition-show="scale"
            transition-hide="scale"
          >
            <q-card class="bg-teal text-white" style="width: 300px">
              <q-card-section>
                <div class="text-h6">Persistent</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                Click/Tap on the backdrop.
              </q-card-section>
              <q-card-actions align="right" class="bg-white text-teal">
                <q-item
                  clickable
                  v-close-popup
                  @click="closepopup"
                  class="q-pl-xl q-mt-md"
                >
                  <q-item-section>
                    <q-item-label>Save</q-item-label>
                  </q-item-section>
                </q-item>
                <q-btn flat label="CANCEL" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
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
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();
const router = useRouter();
const studentLink = ref(true);
const instructorLink = ref(false);
const searchQuery = ref("");
const viewDetails = ref(true);
const secondDialog = ref(false);
const firstName = ref("");
const middleName = ref("");
const lastName = ref("");
const gender = ref("");
const genderOptions = {
  option: ["Male", "Female", "LGBTQIA+"],
};
const date = ref("");
const contact = ref("");
const country = ref("");
const zipCode = ref("");
const province = ref("");
const municipality = ref("");
const barangay = ref("");
const streetName = ref("");
const blockAndLot = ref("");
const guardianFirstName = ref("");
const guardianMiddleName = ref("");
const guardianLastName = ref("");
const file = ref("");
const userName = ref("");
const email = ref("");
const password = ref("");
const isPwd = ref(true);

const showStudent = () => {
  studentLink.value = true;
  instructorLink.value = false;
};
const showInstructor = () => {
  studentLink.value = false;
  instructorLink.value = true;
};

function closepopup() {
  viewDetails.value = false; // Close the dialog
  router.replace("/adminUserManagement"); // Navigate back
}

// Define reactive variables

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
