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
          <q-form @submit.prevent="submitSignup">
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
            dsds
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
                  v-model="firstName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Juan"
                  class="inName"
                  no-error-icon
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Middle Name
                <q-input
                  name="middleName"
                  for="middleName"
                  v-model="middleName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Santos"
                  class=""
                  no-error-icon
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Last Name
                <q-input
                  name="lastName"
                  for="lastName"
                  v-model="lastName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Dela Cruz"
                  class=""
                  no-error-icon
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
                  name="birthDate"
                  for="birthDate"
                  v-model="birthDate"
                  type="date"
                  rounded
                  outlined
                  no-error-icon
                  :rules="[selectChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section class=" ">
                Contact No.
                <q-input
                  name="contactNumber"
                  for="contactNumber"
                  v-model="contactNumber"
                  type="tel"
                  rounded
                  outlined
                  placeholder="09XXXXXXXXX"
                  no-error-icon
                  :rules="[numberChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Email
                <q-input
                  name="email"
                  for="email"
                  v-model="email"
                  type="email"
                  rounded
                  outlined
                  placeholder="skibidi.toilet@cvsu.edu.ph"
                  no-error-icon
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
                    v-model="gender"
                    label="Select Gender"
                    type="text"
                    name="gender"
                    for="gender"
                    style="width: 100%"
                    class=""
                    no-error-icon
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
                  name="school"
                  for="school"
                  v-model="school"
                  type="text"
                  rounded
                  outlined
                  placeholder="Cavite State University Imus Campus"
                  no-error-icon
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
                  name="country"
                  for="country"
                  v-model="country"
                  type="text"
                  rounded
                  outlined
                  placeholder="Philippines"
                  no-error-icon
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Zip Code
                <q-input
                  name="zipCode"
                  for="zipCode"
                  v-model="zipCode"
                  type="tel"
                  rounded
                  outlined
                  placeholder="4102"
                  no-error-icon
                  :rules="[zipcodeChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Province
                <q-input
                  name="province"
                  for="province"
                  v-model="province"
                  type="text"
                  rounded
                  outlined
                  placeholder="Cavite"
                  no-error-icon
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Municipality
                <q-input
                  name="municipality"
                  for="municipality"
                  v-model="municipality"
                  type="text"
                  rounded
                  outlined
                  placeholder="Bacoor"
                  no-error-icon
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
                Barangay
                <q-input
                  name="barangay"
                  for="barangay"
                  v-model="barangay"
                  type="text"
                  rounded
                  outlined
                  placeholder="Tabing Dagat"
                  no-error-icon
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Street Name
                <q-input
                  name="street"
                  for="street"
                  v-model="street"
                  type="text"
                  rounded
                  outlined
                  placeholder="Pogi Street"
                  no-error-icon
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Block & Lot
                <q-input
                  name="blockAndLot"
                  for="blockAndLot"
                  v-model="blockAndLot"
                  type="text"
                  rounded
                  outlined
                  placeholder="blk - 2 lot - 25"
                  no-error-icon
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
                  name="guardianFirstName"
                  for="guardianFirstName"
                  v-model="guardianFirstName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Juan"
                  no-error-icon
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Middle Name
                <q-input
                  name="guardianMiddleName"
                  for="guardianMiddleName"
                  v-model="guardianMiddleName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Santos"
                  no-error-icon
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Last Name
                <q-input
                  name="guardianLastName"
                  for="guardianLastName"
                  v-model="guardianLastName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Dela Cruz"
                  no-error-icon
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Contact No.
                <q-input
                  name="guardianContactNumber"
                  for="guardianContactNumber"
                  v-model="guardianContactNumber"
                  type="tel"
                  rounded
                  outlined
                  placeholder="09XXXXXXXXX"
                  no-error-icon
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
                  name="guardianCountry"
                  for="guardianCountry"
                  v-model="guardianCountry"
                  type="text"
                  rounded
                  outlined
                  placeholder="Philippines"
                  no-error-icon
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Zip Code
                <q-input
                  name="guardianZipCode"
                  for="guardianZipCode"
                  v-model="guardianZipCode"
                  type="tel"
                  rounded
                  outlined
                  placeholder="4102"
                  no-error-icon
                  :rules="[zipcodeChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Province
                <q-input
                  name="guardianProvince"
                  for="guardianProvince"
                  v-model="guardianProvince"
                  type="text"
                  rounded
                  outlined
                  placeholder="Cavite"
                  no-error-icon
                  :rules="[requiredFields, textChecker]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Municipality
                <q-input
                  name="guardianMunicipality"
                  for="guardianMunicipality"
                  v-model="guardianMunicipality"
                  type="text"
                  rounded
                  outlined
                  placeholder="Bacoor"
                  no-error-icon
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
                Barangay
                <q-input
                  name="guardianBarangay"
                  for="guardianBarangay"
                  v-model="guardianBarangay"
                  type="text"
                  rounded
                  outlined
                  placeholder="Tabing Dagat"
                  no-error-icon
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Street Name
                <q-input
                  name="guardianStreet"
                  for="guardianStreet"
                  v-model="guardianStreet"
                  type="text"
                  rounded
                  outlined
                  placeholder="Pogi Street"
                  no-error-icon
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                Block & Lot
                <q-input
                  name="guardianBlockAndLot"
                  for="guardianBlockAndLot"
                  v-model="guardianBlockAndLot"
                  type="text"
                  rounded
                  outlined
                  placeholder="blk - 2 lot - 25"
                  no-error-icon
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
                  name="username"
                  for="username"
                  v-model="username"
                  type="text"
                  rounded
                  outlined
                  placeholder="Juan"
                  class="inName"
                  no-error-icon
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section class="q-pb-none">
                Password
                <q-input
                  name="password"
                  for="password"
                  v-model="password"
                  type="password"
                  rounded
                  outlined
                  placeholder="Juan"
                  class="inName"
                  no-error-icon
                  :rules="[myPass]"
                >
                </q-input>
              </q-card-section>
              <q-card-section class="q-pb-none">
                Confirm Password
                <q-input
                  name="confirmPassword"
                  for="confirmPassword"
                  type="password"
                  v-model="confirmPassword"
                  rounded
                  outlined
                  placeholder="Juan"
                  class="inName"
                  no-error-icon
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
                    name="imageFile"
                    for="imageFile"
                    v-model="imageFile"
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
// import { data } from "autoprefixer";
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const router = useRouter();
// import { registerUser } from "src/backend/function.js";

// const loading = ref(false);
const optionGender = {
  option: ["Male", "Female", "LGBTQIA+"],
};
// const requiredFields = (val) =>
//   (val && val.length > 0) || "Please type something";

// const textChecker = (val) =>
//   (val && isNaN(val)) || "Please type a valid non-numeric input";

// const selectChecker = (val) =>
//   (val && val.length > 0) || "Please select something";

// const emailChecker = (val) =>
//   (val && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) ||
//   "Please enter a valid email address";
// const numberChecker = (val) =>
//   (val && /^\d{11}$/.test(val)) || "Please type a valid number";

// const zipcodeChecker = (val) =>
//   (val && /^\d{4}$/.test(val)) || "Please type a valid Zip Code Number";
// const myPass = (val) => (val && val.length > 0) || "Please type something";

// const myConfirmPassword = (val) =>
//   (val && val == form.value.myPassword) || "Passwords do not match";

const $q = useQuasar();
const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const email = ref("");
const firstName = ref("");
const middleName = ref("");
const lastName = ref("");
const gender = ref("");
const contactNumber = ref("");
const birthDate = ref("");
const school = ref("");
const country = ref("");
const zipCode = ref("");
const province = ref("");
const municipality = ref("");
const barangay = ref("");
const street = ref("");
const blockAndLot = ref("");
const guardianFirstName = ref("");
const guardianMiddleName = ref("");
const guardianLastName = ref("");
const guardianContactNumber = ref("");
const guardianCountry = ref("");
const guardianZipCode = ref("");
const guardianProvince = ref("");
const guardianMunicipality = ref("");
const guardianBarangay = ref("");
const guardianStreet = ref("");
const guardianBlockAndLot = ref("");
const imageFile = ref(null);

const submitSignup = async () => {
  if (
    !username.value ||
    !password.value ||
    !email.value ||
    !imageFile.value ||
    !confirmPassword.value ||
    !firstName.value ||
    !middleName.value ||
    !lastName.value ||
    !gender.value ||
    !contactNumber.value ||
    !birthDate.value ||
    !school.value ||
    !country.value ||
    !zipCode.value ||
    !province.value ||
    !municipality.value ||
    !barangay.value ||
    !street.value ||
    !blockAndLot.value ||
    !guardianFirstName.value ||
    !guardianMiddleName.value ||
    !guardianLastName.value ||
    !guardianContactNumber.value ||
    !guardianCountry.value ||
    !guardianZipCode.value ||
    !guardianProvince.value ||
    !guardianMunicipality.value ||
    !guardianBarangay.value ||
    !guardianStreet.value ||
    !guardianBlockAndLot.value
  ) {
    $q.notify({
      type: "warning",
      message: "Please fill in all required fields.",
    });

    return;
  }

  const formData = new FormData();
  formData.append("username", username.value);
  formData.append("password", password.value);
  formData.append("email", email.value);
  formData.append("firstName", firstName.value);
  formData.append("middleName", middleName.value);
  formData.append("lastName", lastName.value);
  formData.append("gender", gender.value);
  formData.append("contactNumber", contactNumber.value);
  formData.append("birthDate", birthDate.value);
  formData.append("school", school.value);
  formData.append("country", country.value);
  formData.append("zipCode", zipCode.value);
  formData.append("province", province.value);
  formData.append("municipality", municipality.value);
  formData.append("barangay", barangay.value);
  formData.append("street", street.value);
  formData.append("blockAndLot", blockAndLot.value);
  formData.append("guardianFirstName", guardianFirstName.value);
  formData.append("guardianMiddleName", guardianMiddleName.value);
  formData.append("guardianLastName", guardianLastName.value);
  formData.append("guardianContactNumber", guardianContactNumber.value);
  formData.append("guardianCountry", guardianCountry.value);
  formData.append("guardianZipCode", guardianZipCode.value);
  formData.append("guardianProvince", guardianProvince.value);
  formData.append("guardianMunicipality", guardianMunicipality.value);
  formData.append("guardianBarangay", guardianBarangay.value);
  formData.append("guardianStreet", guardianStreet.value);
  formData.append("guardianBlockAndLot", guardianBlockAndLot.value);
  formData.append("userImage", imageFile.value);

  try {
    const response = await axios.post(
      `${process.env.api_host}/users/signup`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    $q.notify({ type: "positive", message: "Signup successful!" });
    router.push("/loginPage").catch((err) => console.error(err));
  } catch (error) {
    $q.notify({ type: "negative", message: "Error during signup." });
    console.error(error);
  }
};
</script>
