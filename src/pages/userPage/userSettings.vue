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
        <q-form>
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
                Personal Detals
              </q-card-section>
            </div>
          </div>
          <!-- Account settings -->
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
                <div class="profileImg" style="position: relative">
                  <!-- Clickable edit image -->
                  <q-img
                    class="editImg"
                    src="/src/assets/editImg.png"
                    style="cursor: pointer"
                    @click="triggerFileInput"
                  />
                  <!-- Hidden file input for image selection -->
                  <input
                    type="file"
                    ref="fileInput"
                    style="display: none"
                    accept="image/*"
                    @change="handleImageChange"
                  />
                  <!-- Profile image -->
                  <q-img
                    class="newProfileImg"
                    :src="profileImage"
                    style="
                      border-radius: 50%;
                      width: 90%;
                      height: 90%;
                      object-fit: cover;
                    "
                  />
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
                  />
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
                    name="confirmNewPassword"
                    for="confirmNewPassword"
                    v-model="confirmNewPassword"
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
                  <q-btn
                    class="q-py-md"
                    label="discard Changes"
                    no-caps
                    type="submit"
                    style="width: 45%"
                    rounded
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Personal details -->
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
                    v-model="newBirthDate"
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
              </div>
              <div class="newGenderBirthContact">
                <q-card-section class="accountInfoInput q-pt-none">
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
                </q-card-section>
                <q-card-section class="accountInfoInput q-pt-none">
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
                </q-card-section>
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
                <q-btn
                  class="q-py-md"
                  label="discard Changes"
                  no-caps
                  type="submit"
                  style="width: 45%"
                  rounded
                />
              </div>
            </div>
            <!-- Photocopy of id's -->
            <div class="PhotoIDs q-py-lg">
              <q-img src="/src/assets/lee.png" class="PhotoID-img" />
              <q-card-section> Photocopy of School ID </q-card-section>
              <q-img src="/src/assets/waw.jpg" class="PhotoID-img" />
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
import { ref } from "vue";

// Reactive data
const profileImage = ref("/src/assets/waw.jpg"); // Default profile image

// File input reference
const fileInput = ref(null);

// Method to trigger file input click
const triggerFileInput = () => {
  fileInput.value.click();
};

// Method to handle image change
const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image file.");
  }
};

const accountDetailsLink = ref(false);
const personalDetailsLink = ref(true);

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
</script>
