<template>
  <q-page>
    <!-- components -->
    <userNavBar />
    <div class="main-contaier q-py-md q-px-md">
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
            :class="{ active: activeTab === 'student' }"
            @click="changeTab('student')"
            >Student</q-card-section
          >
        </div>
        <div class="text-subtitle2 showInstructor" @click="showInstructor">
          <q-card-section
            class="q-py-none clickDescAct"
            :class="{ active: activeTab === 'instructor' }"
            @click="changeTab('instructor')"
            >Instructor</q-card-section
          >
        </div>
      </q-card-section>
      <q-separator />

      <q-card class="userManagement-container q-mt-md">
        <!-- Instructor -->

        <div class="q-pa-md row">
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
          <div style="width: 200px" v-if="activeTab === 'instructor'">
            <q-select outlined v-model="model" :options="options" label="All">
              <template #prepend>
                <!-- The custom content (e.g., "Sort:") goes inside the append slot -->
                <div class="q-pl-sm text-caption">Sort:</div>
              </template>
            </q-select>
          </div>

          <div class="q-ml-lg" v-if="activeTab === 'instructor'">
            <q-btn
              class="q-py-md"
              label="Add New Instructor"
              no-caps
              @click="addInstructor = true"
              color="accent"
              style="background-color: #925fe2; width: 200px"
            />
          </div>

          <div v-if="activeTab === 'student'">
            <q-item
              clickable
              @click="router.replace(`/qrAttendancePage`)"
              class="q-pl-xl q-mt-md"
            >
              <q-item-section avatar>
                <q-icon name="qr_code_scanner" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Qr Scanner</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row" v-if="activeTab === 'student'">
          <!-- from date -->
          <q-card-section class="col-3">
            <div>From date</div>
            <div>
              <q-input filled v-model="fromDate">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="fromDate">
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
          </q-card-section>
          <!-- To date -->
          <q-card-section class="col-3">
            <div>From date</div>
            <div>
              <q-input filled v-model="toDate">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="toDate">
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
          </q-card-section>
          <q-card-section class="col-3">
            <div>Sort By</div>
            <div style="width: 350px">
              <q-select
                outlined
                v-model="sortLetters"
                :options="options"
                label="Alphabetical"
              />
            </div>
          </q-card-section>
          <q-card-section class="col-3">
            <div>Show</div>
            <div style="width: 350px">
              <q-select
                outlined
                v-model="model"
                :options="options"
                label="All Students"
              />
            </div>
          </q-card-section>
        </div>
        <!-- Instructor Management Content -->
        <div class="q-px-md">
          <!-- Header -->
          <q-card-section class="userManagement-header row">
            <div class="col-3">Name</div>
            <div class="col-2">Number of Attendance</div>
            <div class="col-2">Rank</div>
            <div class="col-2">Status</div>
            <div class="col-3">Action</div>
          </q-card-section>
          <!-- content -->
          <div>
            <q-card-section
              class="userManagement-content row"
              v-for="(row, idx) in rows"
              :key="idx"
            >
              <div class="col-3">{{ row.firstName }} {{ row.lastName }}</div>
              <div class="col-2">{{ row.attendanceCount }}</div>
              <div class="col-2">{{ row.rank }}</div>
              <div class="col-2">{{ row.status ? "ACTIVE" : "INACTIVE" }}</div>
              <div class="col-3">
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
                    <q-item clickable to="#" v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Active</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable to="#" v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Inactive</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>

              <!-- <div style="width: 20%">nnet</div>
                <div style="width: 20%">1</div>
                <div style="width: 20%">novice</div>
                <div style="width: 20%; color: #46af4b">Present</div>
                <div style="width: 350px"></div> -->
            </q-card-section>
          </div>
        </div>

        <!-- dialog View Details -->
        <div>
          <q-dialog
            full-width
            v-model="viewDetails"
            class="courseEdit-container"
          >
            <q-card style="display: flex" class="q-pa-xl">
              <div style="width: 60%; color: #4b4b4b">
                <q-card-section>
                  <div class="text-h6 text-weight-medium q">
                    Personal Details
                  </div>
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

              <div style="width: 40%">
                <!-- user Profile -->
                <q-card-section
                  class="flex flex-center"
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
        <!-- Add new Instructor -->
        <div>
          <q-dialog v-model="addInstructor">
            <q-card style="width: 900px; max-width: 96vw">
              <div class="registerInstructor-container q-mt-xl">
                <q-form @submit.prevent="submitSignup">
                  <q-card-section> Add Instructor </q-card-section>
                  <div style="width: 100%">
                    <div style="display: flex">
                      <q-card-section class="q-pb-none" style="width: 30%">
                        First Name
                        <q-input
                          name="instructorFirstName"
                          for="instructorFirstName"
                          v-model="instructorFirstName"
                          type="text"
                          rounded
                          outlined
                        />
                      </q-card-section>
                      <q-card-section class="q-pb-none" style="width: 30%">
                        Middle Name
                        <q-input
                          name="instructorMiddleName"
                          for="instructorMiddleName"
                          v-model="instructorMiddleName"
                          type="text"
                          rounded
                          outlined
                        />
                      </q-card-section>
                      <q-card-section class="q-pb-none" style="width: 30%">
                        Last Name
                        <q-input
                          name="instructorLastName"
                          for="instructorLastName"
                          v-model="instructorLastName"
                          type="text"
                          rounded
                          outlined
                        />
                      </q-card-section>
                    </div>
                    <div class="row">
                      <div style="width: 30%">
                        <q-card-section style="width: auto">
                          Gender
                          <q-select
                            rounded
                            outlined
                            v-model="instructorGenderOption"
                            :options="instructorGender.option"
                            label="Select Gender"
                            type="text"
                            name="gender"
                            for="gender"
                            style="width: 100%"
                          />
                        </q-card-section>
                      </div>
                      <div style="width: 30%" class="q-px-md">
                        <q-card-section class="q-pb-none">
                          Contact
                        </q-card-section>
                        <q-input
                          outlined
                          rounded
                          clearable
                          v-model="instructorContact"
                          type="number"
                        />
                      </div>
                    </div>
                    <div style="display: flex">
                      <q-card-section class="q-pb-none" style="width: 30%">
                        Username
                        <q-input
                          name="instructorUsername"
                          for="instructorUsername"
                          v-model="instructorUsername"
                          type="text"
                          rounded
                          outlined
                          placeholder="Juan"
                        />
                      </q-card-section>
                      <q-card-section class="q-pb-none" style="width: 30%">
                        password
                        <q-input
                          name="instructorPassword"
                          for="instructorPassword"
                          v-model="instructorPassword"
                          type="password"
                          rounded
                          outlined
                        />
                      </q-card-section>
                      <q-card-section class="q-pb-none" style="width: 30%">
                        email
                        <q-input
                          name="instructorEmail"
                          for="instructorEmail"
                          v-model="instructorEmail"
                          type="email"
                          rounded
                          outlined
                        />
                      </q-card-section>
                    </div>
                    <q-card-section class="q-pl-md q-pb-sm"
                      >Upload Profile Picture</q-card-section
                    >
                    <div class="q-px-xl">
                      <q-card style="border: 1px dashed black">
                        <q-card-section class="flex flex-center">
                          <q-file
                            name="instructorImage"
                            for="instructorImage"
                            v-model="instructorImage"
                            label="Choose File"
                            filled
                            accept="image/*"
                            clearable
                          >
                            <template v-slot:prepend>
                              <q-icon name="upload" />
                            </template>
                          </q-file>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      column-gap: 24px;
                    "
                  >
                    <q-btn
                      class="q-my-xl q-py-md"
                      label="Cancel"
                      no-caps
                      v-close-popup
                      style="width: 350px"
                      rounded
                    />
                    <q-btn
                      class="q-my-xl q-py-md"
                      label="Add Instructor"
                      no-caps
                      type="submit"
                      color="accent"
                      style="background-color: #925fe2; width: 350px"
                      rounded
                    />
                  </div>
                </q-form>
              </div>
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
import userNavBar from "src/components/userNavBar.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { onMounted } from "vue";
import axios from "axios";

const $q = useQuasar();
const router = useRouter();
const studentLink = ref(true);
const instructorLink = ref(false);
const searchQuery = ref("");
const viewDetails = ref(false);
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

// instructor
const addInstructor = ref(false);
const instructorFirstName = ref("");
const instructorMiddleName = ref("");
const instructorLastName = ref("");
const instructorGenderOption = ref("");
const instructorUsername = ref("");
const instructorPassword = ref("");
const instructorEmail = ref("");
const instructorImage = ref("");
const instructorContact = ref("");
const instructorGender = ref({
  option: ["Male", "Female", "LGBTQIA+"],
});

const activeTab = ref("student");

function changeTab(tab) {
  activeTab.value = tab;

  if (tab === "student") rows.value = STUDENT;
  else if (tab === "instructor") rows.value = INSTRUCTOR;
}

function closepopup() {
  viewDetails.value = false; // Close the dialog
  router.replace("/attendanceManagement"); // Navigate back
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
      if (myProfile.data[0].title !== "admin") {
        router.replace(`/loginPage`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

const submitSignup = async () => {
  if (
    !instructorUsername.value ||
    !instructorPassword.value ||
    !instructorEmail.value ||
    !instructorFirstName.value ||
    !instructorMiddleName.value ||
    !instructorLastName.value ||
    !instructorGender.value ||
    !instructorImage.value ||
    !instructorContact.value
  ) {
    $q.notify({
      type: "warning",
      messeage: "Please fill in all required fields.",
    });
    return;
  }

  const formData = new FormData();
  formData.append("username", instructorUsername.value);
  formData.append("password", instructorPassword.value);
  formData.append("email", instructorEmail.value);
  formData.append("firstName", instructorFirstName.value);
  formData.append("middleName", instructorMiddleName.value);
  formData.append("lastName", instructorLastName.value);
  formData.append("gender", instructorGenderOption.value);
  formData.append("userImage", instructorImage.value);
  formData.append("contactNumber", instructorContact.value);

  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      ` ${process.env.api_host}/instructors/signup`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      }
    );
    // Show a positive notification
    $q.notify({ type: "positive", message: "Signup successful!" });
    // Redirect user to another page (e.g., the home page or dashboard)
  } catch (err) {
    // Show an error notification
    $q.notify({ type: "negative", message: "Error during signup." });
    console.error(err);
  }
};

const STUDENT = [
  {
    firstName: "Juan",
    lastName: "Dela Cruz",
    attendanceCount: 5,
    rank: "Novice",
    status: false,
  },
  {
    firstName: "Ana",
    lastName: "Santos",
    attendanceCount: 8,
    rank: "Intermediate",
    status: true,
  },
  {
    firstName: "Lara",
    lastName: "Garcia",
    attendanceCount: 10,
    rank: "Advanced",
    status: true,
  },
  {
    firstName: "Marco",
    lastName: "Torres",
    attendanceCount: 3,
    rank: "Novice",
    status: false,
  },
  {
    firstName: "Sofia",
    lastName: "Lopez",
    attendanceCount: 12,
    rank: "Expert",
    status: true,
  },
];

const INSTRUCTOR = [
  {
    firstName: "Mario",
    lastName: "Dela Cruz",
    attendanceCount: 15,
    rank: "Novice",
    status: true,
  },
  {
    firstName: "Carla",
    lastName: "Reyes",
    attendanceCount: 20,
    rank: "Intermediate",
    status: true,
  },
  {
    firstName: "Luis",
    lastName: "Martinez",
    attendanceCount: 25,
    rank: "Advanced",
    status: true,
  },
  {
    firstName: "Karen",
    lastName: "Rivera",
    attendanceCount: 30,
    rank: "Expert",
    status: true,
  },
  {
    firstName: "Victor",
    lastName: "Fernandez",
    attendanceCount: 5,
    rank: "Novice",
    status: false,
  },
  {
    firstName: "Isabel",
    lastName: "Cruz",
    attendanceCount: 18,
    rank: "Intermediate",
    status: true,
  },
  {
    firstName: "Ricardo",
    lastName: "Gomez",
    attendanceCount: 22,
    rank: "Advanced",
    status: true,
  },
  {
    firstName: "Monica",
    lastName: "Morales",
    attendanceCount: 28,
    rank: "Expert",
    status: true,
  },
  {
    firstName: "Eduardo",
    lastName: "Castro",
    attendanceCount: 3,
    rank: "Novice",
    status: false,
  },
];

const rows = ref(STUDENT);

onMounted(() => {
  isLogin();
});
</script>
