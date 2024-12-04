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
            :class="{ active: activeTab === 'member' }"
            @click="changeTab('member')"
            >Student</q-card-section
          >
        </div>
        <div v-if="isAdmin">
          <div class="text-subtitle2 showInstructor" @click="showInstructor">
            <q-card-section
              class="q-py-none clickDescAct"
              :class="{ active: activeTab === 'instructor' }"
              @click="changeTab('instructor')"
              >Instructor</q-card-section
            >
          </div>
        </div>
      </q-card-section>
      <q-separator />

      <q-card class="userManagement-container q-mt-md">
        <!-- Instructor -->

        <div class="q-pa-md row">
          <!-- Search Bar -->
          <!-- <div style="width: 350px">
            <q-input
              v-model="searchQuery"
              label="Search"
              outlined
              rounded
              clearable
            >
              <template v-slot:append>
                <q-icon name="search" clickable @click="getUser()" />
              </template>
            </q-input>
          </div> -->
          <q-space />
          <!-- <div style="width: 200px" v-if="activeTab === 'instructor'">
            <q-select outlined v-model="model" :options="options" label="All">
              <template #prepend>

                <div class="q-pl-sm text-caption">Sort:</div>
              </template>
            </q-select>
          </div> -->

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

          <div v-if="activeTab === 'member'" class="q-pt-sm">
            <q-btn
              class="q-pl-lg q-mt-md"
              label="Generate Code"
              @click="genCode()"
              flat
              icon="vpn_key"
            />
          </div>
          <div v-if="activeTab === 'member'">
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
        <!-- date -->
        <!-- <q-form @submit.prevent="getDate">
          <div class="row" v-if="activeTab === 'member'">

            <q-card-section class="col-2">
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
                        <q-date v-model="fromDate" mask="YYYY-MM-DD">
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

            <q-card-section class="col-2">
              <div>To date</div>
              <div>
                <q-input filled v-model="toDate">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="toDate" mask="YYYY-MM-DD">
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
            <q-space />
            <q-card-section class="q-pt-xl">
              <q-btn
                flat
                label="Submit"
                type="submit"
                class="bg-primary text-white"
              />
            </q-card-section>
          </div>
        </q-form> -->
        <!-- Instructor Management Content -->
        <div class="q-px-md">
          <!-- Header -->
          <q-card-section class="userManagement-header row">
            <div class="col-3">Name</div>
            <div class="col-2">Number of Attendance</div>
            <div class="col-2">Rank</div>
            <!-- <div class="col-2">Status</div> -->
            <div class="col-3">Action</div>
          </q-card-section>
          <!-- content -->
          <div v-if="!loading">
            <q-card-section
              class="userManagement-content row"
              v-for="(user, idx) in showUser"
              :key="idx"
            >
              <div class="col-3">{{ user.firstName }} {{ user.lastName }}</div>
              <div class="col-2">{{ user.attendanceCounter }}</div>
              <div class="col-2">{{ user.rank }}</div>
              <!-- <div class="col-2">{{ user.status ? "ACTIVE" : "INACTIVE" }}</div> -->
              <div class="col-3">
                <q-btn-dropdown
                  flat
                  dropdown-icon="more_vert"
                  class="q-px-none"
                >
                  <q-list>
                    <q-item clickable @click="viewBtn(user._id)">
                      <q-item-section>
                        <q-item-label>View Details</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </q-card-section>
          </div>
          <div v-else class="row justify-center" style="padding-top: 8vh">
            <q-spinner size="7rem" color="primary" />
          </div>
        </div>
        <!-- Generate Code -->
        <q-dialog v-model="generateCode" persistent>
          <q-card style="width: 50vw">
            <q-card-section class="flex flex-center">
              <div v-if="copyGenerated">{{ copyGenerated }}</div>
            </q-card-section>
            <div align="right">
              <q-btn v-close-popup @click="copyText(copyGenerated)">Copy</q-btn>

              <q-btn v-close-popup>Back</q-btn>
            </div>
          </q-card>
        </q-dialog>
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
                  <div class="text-h6 text-weight-medium q">User Details</div>
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
                      v-model="profileViewer.firstName"
                      clearable
                      disable
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Middle Name</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="profileViewer.middleName"
                      type="text"
                      disable
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Last Name</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="profileViewer.lastName"
                      disable
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
                      v-model="profileViewer.gender"
                      :options="genderOptions.option"
                      disable
                    />
                  </div>

                  <div style="width: 30%">
                    <div>Birthdate</div>
                    <q-input
                      type="date"
                      rounded
                      v-model="profileViewer.date"
                      outlined
                      disable
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Contact</div>
                    <q-input
                      outlined
                      clearable
                      rounded
                      v-model="profileViewer.contactNumber"
                      type="number"
                      disable
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
                      v-model="profileViewer.country"
                      type="text"
                      disable
                    />
                  </div>
                  <div style="width: 20%">
                    <div>Zip Code</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="profileViewer.zipCode"
                      type="number"
                      disable
                    />
                  </div>
                  <div style="width: 25%">
                    <div>Province</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="profileViewer.province"
                      type="text"
                      disable
                    />
                  </div>
                  <div style="width: 25%">
                    <div>Municipality</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="profileViewer.municipality"
                      type="text"
                      disable
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
                      v-model="profileViewer.barangay"
                      type="text"
                      disable
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Street Name</div>
                    <q-input
                      outlined
                      clearable
                      rounded
                      v-model="profileViewer.street"
                      type="text"
                      disable
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Block & Lot</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="profileViewer.blockAndLot"
                      type="text"
                      disable
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
                      v-model="profileViewer.guardianFirstName"
                      type="text"
                      disable
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Middle Name</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="profileViewer.guardianMiddleName"
                      type="text"
                      disable
                    />
                  </div>
                  <div style="width: 30%">
                    <div>Last Name</div>
                    <q-input
                      outlined
                      rounded
                      clearable
                      v-model="profileViewer.guardianLastName"
                      type="text"
                      disable
                    />
                  </div>
                </q-card-section>
              </div>

              <div style="width: 40%">
                <!-- user Profile -->
                <div style="display: flex; width: 100%">
                  <q-card-section
                    class="flex flex-center"
                    style="display: flex; flex-direction: column"
                  >
                    Profile
                    <q-img
                      :src="profileViewer.userImage"
                      style="max-width: 200px; width: 200px"
                    />
                    <div style="width: auto" class="q-mt-md"></div>
                  </q-card-section>

                  <q-card-section
                    v-if="isViewMember"
                    class="flex flex-center"
                    style="display: flex; flex-direction: column"
                  >
                    Parent Id
                    <q-img
                      :src="profileViewer.parentId"
                      style="max-width: 200px; width: 200px"
                    />
                    <div style="width: auto" class="q-mt-md"></div>
                  </q-card-section>
                  <q-card-section
                    v-if="isViewMember"
                    class="flex flex-center"
                    style="display: flex; flex-direction: column"
                  >
                    School Id
                    <q-img
                      :src="profileViewer.schoolId"
                      style="max-width: 200px; width: 200px"
                    />
                    <div style="width: auto" class="q-mt-md"></div>
                  </q-card-section>
                </div>
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
                      v-model="profileViewer.username"
                      type="text"
                      disable
                    />
                  </div>
                  <div style="width: 45%; margin-bottom: 1rem">
                    <div>email</div>
                    <q-input
                      outlined
                      clearable
                      rounded
                      v-model="profileViewer.email"
                      type="email"
                      disable
                    />
                  </div>
                  <div style="width: 45%; margin-bottom: 1rem">
                    <div>Password</div>
                    <q-input
                      v-model="profileViewer.password"
                      filled
                      disable
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
                  <!-- <q-btn flat label="Save" @click="secondDialog = true" /> -->
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
                <div class="text-h6">Do you want to save?</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                Double check the details if correct.
              </q-card-section>
              <q-card-actions align="right" class="bg-white text-teal">
                <!-- <q-btn flat v-close-popup @click="closepopup" label="Save" /> -->
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
                      <div style="width: 30%" class="q-px-md">
                        <q-card-section class="q-pb-none">
                          Birthdate
                        </q-card-section>
                        <q-input
                          outlined
                          rounded
                          clearable
                          v-model="instructorBirthdate"
                          type="date"
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


@media (max-width:1700px)
  .main-contaier
    width: 70vw
</style>

<script setup>
import userNavBar from "src/components/userNavBar.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { onMounted } from "vue";
import axios from "axios";
import { copyToClipboard, Notify } from "quasar";

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
const copyGenerated = ref();
// instructor
const addInstructor = ref(false);
const instructorFirstName = ref("");
const instructorMiddleName = ref("");
const instructorLastName = ref("");
const instructorGenderOption = ref("");
const instructorUsername = ref("");
const instructorPassword = ref("");
const instructorEmail = ref("");
const instructorImage = ref(null);
const instructorContact = ref("");
const instructorBirthdate = ref("");
const instructorGender = ref({
  option: ["Male", "Female", "LGBTQIA+"],
});
const generateCode = ref(false);
const activeTab = ref("member");
const isAdmin = ref("");

const isViewMember = ref(false);
const showUser = ref("");
const loading = ref(false);
// filter date
const fromDate = ref("");
const toDate = ref("");

const profileViewer = ref("");

async function searchBar() {
  console.log(searchQuery.value, "Input from search bar");
}
async function getDate() {
  fromDate.value;
  toDate.value;
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      `${process.env.api_host}/users/attendance/getByRange?startDate=${fromDate.value}&endDate=${toDate.value}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("respones", response);
  } catch (err) {
    console.error(err);
  }
  console.log("heh", fromDate.value, toDate.value);
}

function copyText(text) {
  copyToClipboard(text);
  Notify.create({
    message: "Copy Succesfully",
    color: "positive",
  });
}

function genCode() {
  generateCode.value = true;
  getCode();
}

function changeTab(tab) {
  activeTab.value = tab;

  if (tab === "member") {
    rows.value = STUDENT;
    getUser("member");
  } else if (tab === "instructor") {
    rows.value = INSTRUCTOR;
    getUser("instructor");
  }
}

function closepopup() {
  viewDetails.value = false; // Close the dialog
  router.replace("/attendanceManagement"); // Navigate back
}

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
      roleValidation(myProfile.data[0].title);
      if (myProfile.data[0].title === "member") {
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
    !instructorContact.value ||
    !instructorBirthdate.value
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
  formData.append("parentId", instructorImage.value);
  formData.append("schoolId", instructorImage.value);
  formData.append("contactNumber", instructorContact.value);
  formData.append("birthDate", instructorBirthdate.value);
  formData.append("title", "instructor");

  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      ` ${process.env.api_host}/users/signup`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      }
    );
    $q.notify({ type: "positive", message: "Signup successful!" });
  } catch (err) {
    $q.notify({ type: "negative", message: "Error during signup." });
    console.error(err);
  }
};

async function roleValidation(title) {
  try {
    if (title === "admin") {
      return (isAdmin.value = true);
    }
    if (title === "instructor") {
      return (isInstructor.value = true);
    }
    if (title === "member") {
      return (isMember.value = true);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getCode() {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      `${process.env.api_host}/users/signup/generateCode`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    copyGenerated.value = response.data.code.code;
    console.log("here", response.data);
  } catch (err) {
    console.error(err);
  }
}

async function getUser(role) {
  const token = localStorage.getItem("authToken");
  try {
    loading.value = true;
    if (role === "member") {
      const response = await axios.get(
        `${process.env.api_host}/users?filter=member`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      showUser.value = response.data;
    } else if (role === "instructor") {
      const response = await axios.get(
        `${process.env.api_host}/users?filter=instructor`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      showUser.value = response.data;
    }
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
}

async function viewBtn(userId) {
  const token = localStorage.getItem("authToken");
  try {
    viewDetails.value = true;

    const response = await axios.get(
      `${process.env.api_host}/users?query=${userId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(response.data[0].title);
    isViewMember.value = response.data[0].title;
    if (isViewMember.value === "member") {
      isViewMember.value = true;
      console.log(isViewMember.value);
    } else {
      isViewMember.value = false;
    }

    profileViewer.value = response.data[0];
    console.log(profileViewer.value);
  } catch (err) {
    console.error(err);
  }
}

async function viewUser() {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      `${process.env.api_host}/users?filter=member`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("here", response.data[0]);
  } catch (err) {
    console.error(err);
  }
}
const STUDENT = [];

const INSTRUCTOR = [];

const rows = ref(STUDENT);

onMounted(() => {
  isLogin();
  getUser("member");
});
</script>
