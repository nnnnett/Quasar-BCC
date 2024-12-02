<template>
  <q-page>
    <!-- Components -->
    <div class="navbar-Profile">
      <div class="q-pb-xl">
        <UserNavBar />
      </div>
      <q-space />
      <div class="q-pt-lg">
        <notifProfile />
      </div>
    </div>
    <!-- Main Dashboard -->
    <div class="main-container q-pl-xl q-py-md">
      <q-card-section
        class="text-h5 q-pl-none"
        style="font-weight: 600; color: #4b4b4b"
      >
        Settings
      </q-card-section>
      <q-card class="settingsContainer">
        <!-- nav basic info, personal details, pass -->
        <div class="headerNav q-px-md">
          <div @click="showAccountDetails" class="showAccountDetails">
            <q-card-section
              class="text-subtitle2 clickDescAct"
              :class="{ active: accountDetailsLink }"
            >
              Account Settings
            </q-card-section>
          </div>
          <div @click="showPersonalDetails" class="showPersonalDetails">
            <q-card-section
              class="text-subtitle2 clickDescAct"
              :class="{ active: personalDetailsLink }"
            >
              Personal Details
            </q-card-section>
          </div>
        </div>
        <!-- Account settings -->
        <q-form @submit.prevent="updateAccountDetails">
          <div class="accountSettings q-py-md" v-if="accountDetailsLink">
            <!-- Basic Info -->
            <div class="profileContainer">
              <!-- Image profile -->
              <div class="profilePic">
                <q-card-section class="q-pb-none">
                  Profile Picture
                </q-card-section>
                <q-card-section
                  style="color: #8f9bb3; text-align: center"
                  class="q-pt-none"
                >
                  (PNG, JPG, GIF files, 200x200px recommended)
                </q-card-section>
                <div
                  v-if="myProfile"
                  style="
                    display: flex;
                    flex-direction: column;

                    align-items: center;
                  "
                >
                  <div class="profileImg" style="position: relative">
                    <!-- Clickable edit image -->

                    <!-- Profile image -->
                    <q-img
                      :src="myProfile.userImage"
                      style="
                        border-radius: 50%;
                        width: 90%;
                        height: 90%;
                        object-fit: cover;
                      "
                    />
                  </div>

                  <div style="width: 70%" class="q-mt-sm">
                    <q-file
                      filled
                      outlined
                      v-model="updateImage"
                      label="Select Image"
                      accept="image/*"
                    >
                      <template v-slot:prepend>
                        <q-icon name="cloud_upload" />
                      </template>
                    </q-file>
                  </div>
                </div>
              </div>
            </div>
            <!-- account details input -->
            <div class="accountDetailsInput q-pa-md">
              <div class="newUsernameEmailPass">
                <q-card-section class="text-h6 q-pb-sm">
                  Account Details
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  User name
                  <q-input
                    name="newUsername"
                    for="newUsername"
                    v-model="newUsername"
                    type="text"
                    rounded
                    outlined
                    placeholder="Juan"
                  >
                  </q-input>
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Email
                  <q-input
                    name="newEmail"
                    for="newEmail"
                    v-model="newEmail"
                    type="email"
                    rounded
                    outlined
                    placeholder="skibidi.toilet@cvsu.edu.ph"
                  />
                </q-card-section>
                <q-card-section class="text-h6 q-pb-sm">
                  Change Password
                </q-card-section>
                <q-card-section class="accountInfoInpu q-pt-none">
                  Password
                  <q-input
                    name="newPassword"
                    for="newPassword"
                    v-model="newPassword"
                    type="password"
                    rounded
                    outlined
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Confirm Password
                  <q-input
                    name="newConfirmPassword"
                    for="newConfirmPassword"
                    v-model="newConfirmPassword"
                    type="password"
                    rounded
                    outlined
                  />
                </q-card-section>
                <div class="infoButtons q-mt-md q-px-md">
                  <q-btn
                    class="q-py-md"
                    label="Save Changes"
                    no-caps
                    type="submit"
                    color="accent"
                    style="background-color: #925fe2; width: 45%"
                    rounded
                  />
                  <!-- <q-btn
                      class="q-py-md"
                      label="discard Changes"
                      no-caps
                      type="submit"
                      style="width: 45%"
                      rounded
                    /> -->
                </div>
              </div>
            </div>
          </div>
        </q-form>
        <!-- Personal details -->
        <q-form @submit.prevent="updatePersonalDetails">
          <div class="personalDetails-container" v-if="personalDetailsLink">
            <div class="personalDetails q-pb-md">
              <q-card-section class="text-h6 q-pb-none">
                Personal Details
              </q-card-section>
              <div class="newFirstMiddleLastName">
                <q-card-section class="accountInfoInput q-pt-none">
                  First name
                  <q-input
                    name="newFirstname"
                    for="newFirstname"
                    v-model="newFirstname"
                    type="text"
                    rounded
                    outlined
                    placeholder="Juan"
                    no-error-icon
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Middle name
                  <q-input
                    name="newMiddlename"
                    for="newMiddlename"
                    v-model="newMiddlename"
                    type="text"
                    rounded
                    outlined
                    no-error-icon
                    placeholder="Skibidi"
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Last name
                  <q-input
                    name="newLastname"
                    for="newLastname"
                    v-model="newLastname"
                    type="text"
                    rounded
                    outlined
                    placeholder="Juan"
                    no-error-icon
                  />
                </q-card-section>
              </div>
              <div class="newGenderBirthContact">
                <q-card-section class="accountInfoInput q-pt-none">
                  Gender
                  <q-select
                    rounded
                    outlined
                    :options="optionGender.option"
                    v-model="newGender"
                    label="Select Gender"
                    type="text"
                    name="newGender"
                    for="newGender"
                    no-error-icon
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Birthday
                  <q-input
                    name="newBirthDate"
                    for="newBirthDate"
                    v-model="formattedBirthDate"
                    type="date"
                    rounded
                    outlined
                    no-error-icon
                  >
                  </q-input>
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Contact
                  <q-input
                    name="newContact"
                    for="newContact"
                    v-model="newContact"
                    type="tel"
                    rounded
                    outlined
                    placeholder="Juan"
                    no-error-icon
                  />
                </q-card-section>
              </div>
              <div>
                <q-card-section class="accountInfoInput q-pt-none">
                  School
                  <q-input
                    name="newContact"
                    for="newContact"
                    v-model="newSchool"
                    type="tel"
                    rounded
                    outlined
                    placeholder="Juan"
                    no-error-icon
                  />
                </q-card-section>
              </div>
              <q-card-section class="text-h6 q-pb-none">
                Address
              </q-card-section>
              <div class="countryZip">
                <q-card-section class="accountInfoInput q-pt-none">
                  Country
                  <q-input
                    name="newCountry"
                    for="newCountry"
                    v-model="newCountry"
                    type="text"
                    rounded
                    outlined
                    placeholder="Philippines"
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Zip Code
                  <q-input
                    name="newZipCode"
                    for="newZipCode"
                    v-model="newZipCode"
                    type="tel"
                    rounded
                    outlined
                    placeholder="4017"
                  />
                </q-card-section>
              </div>
              <div class="provinceMuni">
                <q-card-section class="accountInfoInput q-pt-none">
                  Province
                  <q-input
                    name="newProvince"
                    for="newProvince"
                    v-model="newProvince"
                    type="text"
                    rounded
                    outlined
                    placeholder="Cavite"
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Municipality
                  <q-input
                    name="newMunicipality"
                    for="newMunicipality"
                    v-model="newMunicipality"
                    type="text"
                    rounded
                    outlined
                    placeholder="General Trias"
                  />
                </q-card-section>
              </div>
              <div class="barangayStreetBlkLot">
                <q-card-section class="accountInfoInput q-pt-none">
                  Barangay
                  <q-input
                    name="newBarangay"
                    for="newBarangay"
                    v-model="newBarangay"
                    type="text"
                    rounded
                    outlined
                    placeholder="Pascam 2"
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Street
                  <q-input
                    name="newStreet"
                    for="newStreet"
                    v-model="newStreet"
                    type="text"
                    rounded
                    outlined
                    placeholder="St. Francis"
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Block & Lot
                  <q-input
                    name="newBlockAndLot"
                    for="newBlockAndLot"
                    v-model="newBlockAndLot"
                    type="text"
                    rounded
                    outlined
                    placeholder="Blck 5 lot 19"
                  />
                </q-card-section>
              </div>
              <!-- Guardian Info -->
              <q-card-section class="text-h6 q-pb-none">
                Guardian Details
              </q-card-section>
              <div class="newFirstMiddleLastName">
                <q-card-section class="accountInfoInput q-pt-none">
                  First name
                  <q-input
                    name="newGuardianFirstname"
                    for="newGuardianFirstname"
                    v-model="newGuardianFirstname"
                    type="text"
                    rounded
                    outlined
                    placeholder="Juan"
                    no-error-icon
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Middle name
                  <q-input
                    name="newGuardianMiddlename"
                    for="newGuardianMiddlename"
                    v-model="newGuardianMiddlename"
                    type="text"
                    rounded
                    outlined
                    no-error-icon
                    placeholder="Skibidi"
                  />
                </q-card-section>
              </div>
              <div class="newGenderBirthContact">
                <q-card-section class="accountInfoInput q-pt-none">
                  Last name
                  <q-input
                    name="newGuardianLastname"
                    for="newGuardianLastname"
                    v-model="newGuardianLastname"
                    type="text"
                    rounded
                    outlined
                    placeholder="Juan"
                    no-error-icon
                  />
                </q-card-section>
                <!-- <q-card-section class="accountInfoInput q-pt-none">
                  Gender
                  <q-select
                    rounded
                    outlined
                    :options="optionGender.option"
                    label="Select Gender"
                    type="text"
                    v-model="newGuardianGender"
                    name="newGuardianGender"
                    for="newGuardianGender"
                    no-error-icon
                  />
                </q-card-section> -->
                <!-- <q-card-section class="accountInfoInput q-pt-none">
                  Birthday
                  <q-input
                    name="newGuardianbirthDate"
                    for="newGuardianbirthDate"
                    v-model="newGuardianbirthDate"
                    type="date"
                    rounded
                    outlined
                    no-error-icon
                  >
                  </q-input>
                </q-card-section> -->
                <q-card-section class="accountInfoInput q-pt-none">
                  Contact
                  <q-input
                    name="newGuardianContact"
                    for="newGuardianContact"
                    v-model="newGuardianContact"
                    type="tel"
                    rounded
                    outlined
                    placeholder="Juan"
                    no-error-icon
                  />
                </q-card-section>
              </div>
              <q-card-section class="text-h6 q-pb-none">
                Guardian Address
              </q-card-section>
              <div class="countryZip">
                <q-card-section class="accountInfoInput q-pt-none">
                  Country
                  <q-input
                    name="newGuardianCountry"
                    for="newGuardianCountry"
                    v-model="newGuardianCountry"
                    type="text"
                    rounded
                    outlined
                    placeholder="Philippines"
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Zip Code
                  <q-input
                    name="newGuardianZipCode"
                    for="newGuardianZipCode"
                    v-model="newGuardianZipCode"
                    type="tel"
                    rounded
                    outlined
                    placeholder="4017"
                  />
                </q-card-section>
              </div>
              <div class="provinceMuni">
                <q-card-section class="accountInfoInput q-pt-none">
                  Province
                  <q-input
                    name="newGuardianProvince"
                    for="newGuardianProvince"
                    v-model="newGuardianProvince"
                    type="text"
                    rounded
                    outlined
                    placeholder="Cavite"
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Municipality
                  <q-input
                    name="newGuardianMunicipality"
                    for="newGuardianMunicipality"
                    v-model="newGuardianMunicipality"
                    type="text"
                    rounded
                    outlined
                    placeholder="General Trias"
                  />
                </q-card-section>
              </div>
              <div class="barangayStreetBlkLot">
                <q-card-section class="accountInfoInput q-pt-none">
                  Barangay
                  <q-input
                    name="newGuardianBarangay"
                    for="newGuardianBarangay"
                    v-model="newGuardianBarangay"
                    type="text"
                    rounded
                    outlined
                    placeholder="Pascam 2"
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Street
                  <q-input
                    name="newGuardianStreet"
                    for="newGuardianStreet"
                    v-model="newGuardianStreet"
                    type="text"
                    rounded
                    outlined
                    placeholder="St. Francis"
                  />
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
                  Block & Lot
                  <q-input
                    name="newGuardianBlockAndLot"
                    for="newGuardianBlockAndLot"
                    v-model="newGuardianBlockAndLot"
                    type="text"
                    rounded
                    outlined
                    placeholder="Blck 5 lot 19"
                  />
                </q-card-section>
              </div>
              <div class="infoButtons q-mt-md q-px-md">
                <q-btn
                  class="q-py-md"
                  label="Save Changes"
                  no-caps
                  type="submit"
                  color="accent"
                  style="background-color: #925fe2; width: 45%"
                  rounded
                />
              </div>
            </div>
            <!-- Photocopy of id's -->
            <div class="PhotoIDs q-py-lg" v-if="myProfile">
              <q-img :src="myProfile.schoolId" class="PhotoID-img" />
              <q-card-section> Photocopy of School ID </q-card-section>
              <q-img :src="myProfile.parentId" class="PhotoID-img" />
              <q-card-section> Photocopy of Parent’s Valid ID </q-card-section>
            </div>
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>
<style lang="sass" scoped>
.navbar-Profile
  display: flex
.main-container
  width: 80vw
.settingsContainer
  height: auto
  border-radius: 24px

.headerNav
  display: flex
  width: 100%
  height: 50px
.profileContainer
  height: auto
  width: 50%
.profilePic
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  align-items: center
.profileImg
  width: 250px
  height: 250px
  display: flex
  justify-content: center
  align-items: center
  border-radius: 50%
  background-color: #925FE2
  position: relative
.editImg
  position: absolute
  width: 60px
  height: 60px
  top: 0%
  right: 3%
  z-index: 10
  cursor: pointer
.accountDetailsInput
  width: 50%
  height: auto
.accountSettings
  display: flex
  width: 100%
.newUsernameEmailPass
  display: flex
  flex-direction: column
  justify-content: center
.accountInfoInput
  width: 100%
.infoButtons
  display: flex
  justify-content: space-between
  width: 100%
.personalDetails-container
  width: 100%
  display: flex
.personalDetails
  height: auto
  width: 60%
.newFirstMiddleLastName
  display: flex
.newGenderBirthContact
  display: flex
.countryZip
  display: flex
.provinceMuni
  display: flex
.barangayStreetBlkLot
  display: flex
.newGuardianFirstMiddleLastName
  display: flex
.newGuardianGenderBirthContact
  display: flex

.PhotoIDs
  width: 40%
  height: auto
  display: flex
  flex-direction: column
  align-items: center

.PhotoID-img
  min-width: 280px
  width: 15vw
  min-height: 200px
  max-height: 210px
  object-fit: contain
.showAccountDetails .clickDescAct,
.showPersonalDetails .clickDescAct
  text-decoration: none
  cursor: pointer
  color: #979797  /* Default color for unselected links */
  transition: all 0.3s ease /* Smooth transition for color change */
// active
.showAccountDetails .clickDescAct.active,
.showPersonalDetails .clickDescAct.active
  color: #925FE2 /* Change text color when active (blue for example) */
  font-weight: bold /* Optionally make it bold */
@media (max-width:1561px)
  .main-container
    width: 70vw
@media (max-width:1200px)
  .accountSettings
    flex-direction: column
  .profileContainer
    width: 100%
  .accountDetailsInput
    width: 100%
  .personalDetails-container
    flex-direction: column
    width: 100%
  .personalDetails
    width: 100%
  .PhotoIDs
    width: 100%
@media (max-width:1023px)
  .main-container
    width: 95vw
@media (max-width:600px)
  .profileImg
    width: 150px
    height: 150px
  .editImg
    width: 40px
    height: 40px
  .newFirstMiddleLastName
    flex-direction: column
  .newGenderBirthContact
    flex-direction: column
  .countryZip
    flex-direction: column
  .provinceMuni
    flex-direction: column
  .barangayStreetBlkLot
    flex-direction: column
</style>
<script setup>
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
import { onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { useQuasar } from "quasar";

const route = useRoute();
const $q = useQuasar();

const router = useRouter();
const fileInput = ref(null);
const newUsername = ref("");
const newEmail = ref("");
const newPassword = ref("");
const newConfirmPassword = ref("");
const myProfile = ref(null);
const updateImage = ref("");
const accountDetailsLink = ref(true);
const personalDetailsLink = ref(false);

const newFirstname = ref("");
const newMiddlename = ref("");
const newLastname = ref("");
const newGender = ref("");
const newBirthDate = ref("");
const newSchool = ref("");
const newContact = ref("");
const newCountry = ref("");
const newZipCode = ref("");
const newProvince = ref("");
const newMunicipality = ref("");
const newBarangay = ref("");
const newStreet = ref("");
const newBlockAndLot = ref("");
const newGuardianFirstname = ref("");
const newGuardianMiddlename = ref("");
const newGuardianLastname = ref("");
// const newGuardianGender = ref("");
const newGuardianbirthDate = ref("");
const newGuardianContact = ref("");
const newGuardianCountry = ref("");
const newGuardianZipCode = ref("");
const newGuardianProvince = ref("");
const newGuardianMunicipality = ref("");
const newGuardianBarangay = ref("");
const newGuardianStreet = ref("");
const newGuardianBlockAndLot = ref("");

const showAccountDetails = () => {
  accountDetailsLink.value = true;
  personalDetailsLink.value = false;
};

const showPersonalDetails = () => {
  accountDetailsLink.value = false;
  personalDetailsLink.value = true;
};

const optionGender = {
  option: ["Male", "Female", "Non-Binary"],
};

const formattedBirthDate = computed({
  get() {
    if (!newBirthDate.value) return ""; // Handle empty value gracefully
    const date = new Date(newBirthDate.value);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`; // Format as yyyy-MM-dd
  },
  set(value) {
    newBirthDate.value = value; // Update the original date when user changes the input
  },
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

      if (myProfile.data[0].title !== "member") {
        router.replace(`/loginPage`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

async function getUser() {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      `${process.env.api_host}/users/myProfile`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    // Update the reactive `myProfile` ref with the data
    myProfile.value = response.data[0];
    console.log("ere", myProfile.value.birthDate);

    newUsername.value = myProfile.value.username;
    newEmail.value = myProfile.value.email;
    newFirstname.value = myProfile.value.firstName;
    newMiddlename.value = myProfile.value.middleName;
    newLastname.value = myProfile.value.lastName;
    newGender.value = myProfile.value.gender;
    newContact.value = myProfile.value.contactNumber;
    newBirthDate.value = myProfile.value.birthDate;
    newSchool.value = myProfile.value.school;
    newCountry.value = myProfile.value.country;
    newZipCode.value = myProfile.value.zipCode;
    newProvince.value = myProfile.value.province;
    newMunicipality.value = myProfile.value.municipality;
    newBarangay.value = myProfile.value.barangay;
    newStreet.value = myProfile.value.street;
    newBlockAndLot.value = myProfile.value.blockAndLot;
    newGuardianFirstname.value = myProfile.value.guardianFirstName;
    newGuardianMiddlename.value = myProfile.value.guardianMiddleName;
    newGuardianLastname.value = myProfile.value.guardianLastName;
    // newGuardianGender.value = myProfile.value.newGuardianGender;
    newGuardianContact.value = myProfile.value.guardianContactNumber;
    newGuardianCountry.value = myProfile.value.guardianCountry;
    newGuardianZipCode.value = myProfile.value.guardianZipCode;
    newGuardianProvince.value = myProfile.value.guardianProvince;
    newGuardianMunicipality.value = myProfile.value.guardianMunicipality;
    newGuardianBarangay.value = myProfile.value.guardianBarangay;
    newGuardianStreet.value = myProfile.value.guardianStreet;
    newGuardianBlockAndLot.value = myProfile.value.guardianBlockAndLot;
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
}

async function updateAccountDetails() {
  const token = localStorage.getItem("authToken");
  const userId = myProfile.value._id;
  if (newPassword.value !== newConfirmPassword.value) {
    $q.notify({
      type: "negative",
      message: "Passwords do not match. Please check again.",
    });
    return; // Exit function early if passwords don't match
  }

  // Ensure that the new password is not empty
  if (!newPassword.value) {
    $q.notify({
      type: "negative",
      message: "Please enter a new password.",
    });
    return;
  }
  try {
    const response = await axios.put(
      `${process.env.api_host}/users/update/${userId}`,
      {
        username: newUsername.value,
        email: newEmail.value,
        password: newPassword.value,
        // userImage: updateImage.value,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    $q.notify({
      type: "positive",
      message: "Account Updated Succesfully",
    });
  } catch (err) {
    $q.notify({
      type: "negative",
      message: "Something Went Wrong",
    });
    console.error(err);
  }
}

async function updatePersonalDetails() {
  const token = localStorage.getItem("authToken");
  const userId = myProfile.value._id;

  try {
    const response = await axios.put(
      `${process.env.api_host}/users/update/${userId}`,
      {
        firstName: newFirstname.value,
        lastName: newLastname.value,
        middleName: newMiddlename.value,
        gender: newGender.value,
        contactNumber: newContact.value,
        birthDate: newBirthDate.value,
        school: newSchool.value,
        country: newCountry.value,
        zipCode: newZipCode.value,
        province: newProvince.value,
        municipality: newMunicipality.value,
        barangay: newBarangay.value,
        street: newStreet.value,
        blockAndLot: newBlockAndLot,
        guardianFirstName: newGuardianFirstname.value,
        guardianMiddleName: newGuardianMiddlename.value,
        guardianLastName: newGuardianLastname.value,

        guardianContactNumber: newGuardianContact.value,
        guardianCountry: newGuardianCountry.value,
        guardianZipCode: newGuardianZipCode.value,
        guardianProvince: newGuardianProvince.value,
        guardianMunicipality: newGuardianMunicipality.value,
        guardianBarangay: newGuardianBarangay.value,
        guardianStreet: newGuardianStreet.value,
        guardianBlockAndLot: newGuardianBlockAndLot.value,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `${token}`,
        },
      }
    );
    console.log(response);
    $q.notify({
      type: "positive",
      message: "Personal Details Updated Succesfully",
    });
  } catch (err) {
    console.error(err);
  }
}
onMounted(() => {
  isLogin();
  getUser();
});
</script>
