<template>
  <q-page
    class="flex flex-center"
    style="
      background: linear-gradient(
        154deg,
        #b592ec 8%,
        #a79eeb 22%,
        #5ce1e6 100%
      );
    "
  >
    <!-- content -->
    <div class="container">
      <q-scroll-area style="height: 80vh; background-color: #ffffffff">
        <div v-for="n in 1" :key="n">
          <q-form action="http://localhost:9000/#/registerPage" method="GET">
            <!-- need remove yung space sa btn then palitan yung q-card-section para maging responsive -->

            <div
              style="height: 150px; display: block; width: 17%; float: right"
            >
              <q-btn
                to="signupPage"
                icon="close"
                round
                class="float-right q-ma-md"
                style="height: 20px; width: 20px; z-index: 10"
              >
              </q-btn>
            </div>

            <q-card-section class="q-pt-xl q-pl-xl text-justify text-h6">
              Please, complete all essential information in this Registration
              Form, ensuring no fields are left blank.
            </q-card-section>
            <q-card-section
              class="q-px-xl q-py-none text-subtitle1"
              style="font-weight: 600"
            >
              Personal Details
            </q-card-section>
            <!-- First,Middle,Last name container -->
            <div
              style="justify-content: space-between"
              class="row q-px-xl inputName-cont"
            >
              <q-card-section class="q-pb-none">
                First Name
                <q-input
                  name="firstName"
                  for="firstName"
                  v-model="form.firstName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Juan"
                  class="inName"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Middle Name
                <q-input
                  name="middleName"
                  for="middleName"
                  v-model="form.middleName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Santos"
                  class=""
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Last Name
                <q-input
                  name="lastName"
                  for="lastName"
                  v-model="form.lastName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Dela Cruz"
                  class=""
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
            </div>
            <!-- Gender, etc container -->
            <div
              class="q-px-xl flex inputBirtContEmail"
              style="
                justify-content: space-between;
                width: 100%;
                flex-wrap: nowrap;
              "
            >
              <q-card-section class="q-ml-none">
                Birthdate
                <q-input
                  name="myBirthdate"
                  for="myBirthdate"
                  v-model="form.myBirthdate"
                  type="date"
                  rounded
                  outlined
                  :rules="[selectChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section class=" ">
                Contact No.
                <q-input
                  name="myContact"
                  for="myContact"
                  v-model="form.myContact"
                  type="tel"
                  rounded
                  outlined
                  placeholder="09XXXXXXXXX"
                  :rules="[numberChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Email
                <q-input
                  name="myEmail"
                  for="myEmail"
                  v-model="form.myEmail"
                  type="email"
                  rounded
                  outlined
                  placeholder="skibidi.toilet@cvsu.edu.ph"
                  :rules="[emailChecker]"
                >
                </q-input>
              </q-card-section>
              <div class="q-gender">
                <q-card-section style="width: auto">
                  Gender
                  <q-select
                    rounded
                    outlined
                    :options="optionGender.option"
                    v-model="form.myGender"
                    label="Select Gender"
                    type="text"
                    name="myGender"
                    for="myGender"
                    style="width: 100%"
                    class=""
                    :rules="[selectChecker]"
                  />
                </q-card-section>
              </div>
            </div>
            <!-- School -->

            <div class="q-px-xl">
              <q-card-section>
                School
                <q-input
                  name="mySchool"
                  for="mySchool"
                  v-model="form.mySchool"
                  type="text"
                  rounded
                  outlined
                  placeholder="Cavite State University Imus Campus"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
            </div>
            <!-- Address Country -->
            <q-card-section
              class="q-px-xl q-py-none text-subtitle1"
              style="font-weight: 600"
            >
              Address
            </q-card-section>
            <div
              class="row q-px-xl addressCont"
              style="justify-content: space-between; flex-wrap: nowrap"
            >
              <q-card-section>
                Country
                <q-input
                  name="myCountry"
                  for="myCountry"
                  v-model="form.myCountry"
                  type="text"
                  rounded
                  outlined
                  placeholder="Philippines"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Zip Code
                <q-input
                  name="myZipCode"
                  for="myZipCode"
                  v-model="form.myZipCode"
                  type="tel"
                  rounded
                  outlined
                  placeholder="4102"
                  :rules="[zipcodeChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Province
                <q-input
                  name="myProvince"
                  for="myProvince"
                  v-model="form.myProvince"
                  type="text"
                  rounded
                  outlined
                  placeholder="Cavite"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Municipality
                <q-input
                  name="myMunicipality"
                  for="myMunicipality"
                  v-model="form.myMunicipality"
                  type="text"
                  rounded
                  outlined
                  placeholder="Bacoor"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
            </div>
            <!-- Barrangay Section -->

            <div
              class="row q-px-xl barrangay-cont"
              style="justify-content: space-between"
            >
              <q-card-section>
                Baranggay
                <q-input
                  name="myBaranggay"
                  for="myBaranggay"
                  v-model="form.myBaranggay"
                  type="text"
                  rounded
                  outlined
                  placeholder="Tabing Dagat"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Street Name
                <q-input
                  name="myStreet"
                  for="myStreet"
                  v-model="form.myStreet"
                  type="text"
                  rounded
                  outlined
                  placeholder="Pogi Street"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Block & Lot
                <q-input
                  name="myBlockLot"
                  for="myBlockLot"
                  v-model="form.myBlockLot"
                  type="text"
                  rounded
                  outlined
                  placeholder="blk - 2 lot - 25"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
            </div>
            <!-- black line -->
            <div class="q-px-xl">
              <hr />
            </div>
            <!-- Guardian Details -->
            <q-card-section
              class="q-px-xl q-py-none text-subtitle1"
              style="font-weight: 600"
            >
              Guardian Details
            </q-card-section>
            <div
              class="q-px-xl row guarianNamedetails"
              style="justify-content: space-between; flex-wrap: nowrap"
            >
              <q-card-section>
                First Name
                <q-input
                  name="myGuardianFname"
                  for="myGuardianFname"
                  v-model="form.myGuardianFname"
                  type="text"
                  rounded
                  outlined
                  placeholder="Juan"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Middle Name
                <q-input
                  name="myGuardianMname"
                  for="myGuardianMname"
                  v-model="form.myGuardianMname"
                  type="text"
                  rounded
                  outlined
                  placeholder="Santos"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Last Name
                <q-input
                  name="myGuardianLname"
                  for="myGuardianLname"
                  v-model="form.myGuardianLname"
                  type="text"
                  rounded
                  outlined
                  placeholder="Dela Cruz"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Contact No.
                <q-input
                  name="myGuardianContact"
                  for="myGuardianContact"
                  v-model="form.myGuardianContact"
                  type="tel"
                  rounded
                  outlined
                  placeholder="09XXXXXXXXX"
                  :rules="[numberChecker]"
                >
                </q-input>
              </q-card-section>
            </div>

            <!-- Guardian Address -->
            <q-card-section
              class="q-px-xl q-py-none text-subtitle1"
              style="font-weight: 600"
            >
              Address
            </q-card-section>
            <div
              class="row q-px-xl addressCont"
              style="justify-content: space-between; flex-wrap: nowrap"
            >
              <q-card-section>
                Country
                <q-input
                  name="myGuardianCountry"
                  for="myGuardianCountry"
                  v-model="form.myGuardianCountry"
                  type="text"
                  rounded
                  outlined
                  placeholder="Philippines"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Zip Code
                <q-input
                  name="myGuardianZipCode"
                  for="myGuardianZipCode"
                  v-model="form.myGuardianZipCode"
                  type="tel"
                  rounded
                  outlined
                  placeholder="4102"
                  :rules="[zipcodeChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Province
                <q-input
                  name="myGuardianProvince"
                  for="myGuardianProvince"
                  v-model="form.myGuardianProvince"
                  type="text"
                  rounded
                  outlined
                  placeholder="Cavite"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Municipality
                <q-input
                  name="myGuardianMunicipality"
                  for="myGuardianMunicipality"
                  v-model="form.myGuardianMunicipality"
                  type="text"
                  rounded
                  outlined
                  placeholder="Bacoor"
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
            </div>
            <!-- Barrangay Section -->

            <div
              class="row q-px-xl barrangay-cont"
              style="justify-content: space-between"
            >
              <q-card-section>
                Baranggay
                <q-input
                  name="myGuardianBaranggay"
                  for="myGuardianBaranggay"
                  v-model="form.myGuardianBaranggay"
                  type="text"
                  rounded
                  outlined
                  placeholder="Tabing Dagat"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Street Name
                <q-input
                  name="myGuardianStreet"
                  for="myGuardianStreet"
                  v-model="form.myGuardianStreet"
                  type="text"
                  rounded
                  outlined
                  placeholder="Pogi Street"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Block & Lot
                <q-input
                  name="myGuardianBlockLot"
                  for="myGuardianBlockLot"
                  v-model="form.myGuardianBlockLot"
                  type="text"
                  rounded
                  outlined
                  placeholder="blk - 2 lot - 25"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
            </div>
            <!-- black line -->
            <div class="q-px-xl">
              <hr />
            </div>
            <!-- Account details -->
            <q-card-section
              class="q-px-xl q-py-none text-subtitle1"
              style="font-weight: 600"
            >
              Account Details
            </q-card-section>
            <div
              class="row q-px-xl userDetails"
              style="justify-content: space-between"
            >
              <q-card-section class="q-pb-none">
                User Name
                <q-input
                  name="userName"
                  for="userName"
                  v-model="form.userName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Juan"
                  class="inName"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section class="q-pb-none">
                Password
                <q-input
                  name="myPassword"
                  for="myPassword"
                  v-model="form.myPassword"
                  type="password"
                  rounded
                  outlined
                  placeholder="Juan"
                  class="inName"
                  :rules="[myPassword]"
                >
                </q-input>
              </q-card-section>
              <q-card-section class="q-pb-none">
                Confirm Password
                <q-input
                  name="myConfirmPassword"
                  for="myConfirmPassword"
                  v-model="form.myConfirmPassword"
                  type="password"
                  rounded
                  outlined
                  placeholder="Juan"
                  class="inName"
                  :rules="[myConfirmPassword]"
                >
                </q-input>
              </q-card-section>
            </div>
            <q-card-section
              class="q-px-xl text-subtitle1"
              style="font-weight: 600"
            >
              Upload Profile Picture
            </q-card-section>

            <div class="q-px-xl">
              <q-card style="border: 1px dashed black">
                <q-card-section class="flex flex-center">
                  <q-file
                    name="myProfileImg"
                    for="myProfileImg"
                    v-model="form.myProfileImg"
                    label="Choose File"
                    filled
                    clearable
                    :rules="[requiredFields]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="upload" />
                    </template>
                  </q-file>
                </q-card-section>
              </q-card>
            </div>
            <div>
              <q-card-section
                class="q-px-xl text-subtitle1 q-pb-none"
                style="font-weight: 600"
              >
                Requirements
              </q-card-section>

              <q-card-section class="q-px-xl q-ml-md q-py-none text-subtitle2">
                <li>Photocopy of School ID</li>
              </q-card-section>
              <q-card-section class="q-px-xl q-ml-md q-py-none text-subtitle2">
                <li>Photocopy of Parent’s Valid ID</li>
              </q-card-section>
            </div>
            <div class="flex flex-center">
              <q-btn
                class="q-my-xl q-py-md"
                label="Register"
                no-caps
                type="submit"
                color="accent"
                style="background-color: #925fe2; width: 230px"
                rounded
              >
              </q-btn>
            </div>
          </q-form>
        </div>
      </q-scroll-area>
    </div>
  </q-page>
  <router-view />
</template>

<style lang="sass" scoped>
.container
  width:1000px
  max-width:90vw

.inputName-cont
  @media (max-width:879px)
    display: flex
    flex-direction: column
    width: 100%

.inputBirtContEmail
  @media (max-width:879px)
    display: flex
    flex-direction: column
    width: 100%


.q-gender
  width: 25%

.q-gender
  @media (max-width:879px)
    width: 100%

.barrangay-cont
  @media (max-width:879px)
    display: flex
    flex-direction: column
    width: 100%

.addressCont
  @media (max-width:879px)
    display: flex
    flex-direction: column
    width: 100%

.guarianNamedetails
  @media (max-width:879px)
    display: flex
    flex-direction: column
    width: 100%
.userDetails
  @media (max-width:879px)
    display: flex
    flex-direction: column
    width: 100%
</style>

<script setup>
import { data } from "autoprefixer";
import { ref } from "vue";

const form = ref({
  firstName: "",
  middleName: "",
  lastName: "",
  myGender: "",
  myBirthdate: "",
  myContact: "",
  myEmail: "",
  myCountry: "",
  myZipCode: "",
  myProvince: "",
  myMunicipality: "",
  myBaranggay: "",
  myStreet: "",
  myBlockLot: "",
  myGuardianFname: "",
  myGuardianMname: "",
  myGuardianLname: "",
  myGuardianContact: "",
  myGuardianCountry: "",
  myGuardianZipCode: "",
  myGuardianProvince: "",
  myGuardianMunicipality: "",
  myGuardianBaranggay: "",
  myGuardianStreet: "",
  myGuardianBlockLot: "",
  userName: "",
  myPassword: "",
  myConfirmPassword: "",
  myProfileImg: "",
  mySchool: "",
});

const optionGender = {
  option: ["Male", "Female"],
};
const requiredFields = (val) =>
  (val && val.length > 0) || "Please type something";

const textChecker = (val) =>
  (val && isNaN(val)) || "Please type a valid non-numeric input";

const selectChecker = (val) =>
  (val && val.length > 0) || "Please select something";

const emailChecker = (val) =>
  (val && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) ||
  "Please enter a valid email address";
const numberChecker = (val) =>
  (val && /^\d{11}$/.test(val)) || "Please type a valid number";

const zipcodeChecker = (val) =>
  (val && /^\d{4}$/.test(val)) || "Please type a valid Zip Code Number";
const myPassword = (val) => (val && val.length > 0) || "Please type something";

const myConfirmPassword = (val) =>
  (val && val == form.value.myPassword) || "Passwords do not match";
</script>
