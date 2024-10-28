<template>
  <q-page padding>
    <q-form>
      <q-form>
        <!-- need remove yung space sa btn then palitan yung q-card-section para maging responsive -->

        <div style="height: 150px; display: block; width: 17%; float: right">
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
          Please, complete all essential information in this Registration Form,
          ensuring no fields are left blank.
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
              no-error-icon
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
              no-error-icon
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
              no-error-icon
              :rules="[requiredFields, textChecker]"
            >
            </q-input>
          </q-card-section>
        </div>
        <!-- Gender, etc container -->
        <div
          class="q-px-xl flex inputBirtContEmail"
          style="justify-content: space-between; width: 100%; flex-wrap: nowrap"
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
              no-error-icon
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
              no-error-icon
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
                v-model="form.myGender"
                label="Select Gender"
                type="text"
                name="myGender"
                for="myGender"
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
              name="mySchool"
              for="mySchool"
              v-model="form.mySchool"
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
              name="myCountry"
              for="myCountry"
              v-model="form.myCountry"
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
              name="myZipCode"
              for="myZipCode"
              v-model="form.myZipCode"
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
              name="myProvince"
              for="myProvince"
              v-model="form.myProvince"
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
              name="myMunicipality"
              for="myMunicipality"
              v-model="form.myMunicipality"
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
            Baranggay
            <q-input
              name="myBarangay"
              for="myBarangay"
              v-model="form.myBarangay"
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
              name="myStreet"
              for="myStreet"
              v-model="form.myStreet"
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
              name="myBlockLot"
              for="myBlockLot"
              v-model="form.myBlockLot"
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
              name="myGuardianFname"
              for="myGuardianFname"
              v-model="form.myGuardianFname"
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
              name="myGuardianMname"
              for="myGuardianMname"
              v-model="form.myGuardianMname"
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
              name="myGuardianLname"
              for="myGuardianLname"
              v-model="form.myGuardianLname"
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
              name="myGuardianContact"
              for="myGuardianContact"
              v-model="form.myGuardianContact"
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
              name="myGuardianCountry"
              for="myGuardianCountry"
              v-model="form.myGuardianCountry"
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
              name="myGuardianZipCode"
              for="myGuardianZipCode"
              v-model="form.myGuardianZipCode"
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
              name="myGuardianProvince"
              for="myGuardianProvince"
              v-model="form.myGuardianProvince"
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
              name="myGuardianMunicipality"
              for="myGuardianMunicipality"
              v-model="form.myGuardianMunicipality"
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
            Baranggay
            <q-input
              name="myGuardianBaranggay"
              for="myGuardianBaranggay"
              v-model="form.myGuardianBarangay"
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
              name="myGuardianStreet"
              for="myGuardianStreet"
              v-model="form.myGuardianStreet"
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
              name="myGuardianBlockLot"
              for="myGuardianBlockLot"
              v-model="form.myGuardianBlockLot"
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
              name="userName"
              for="userName"
              v-model="form.userName"
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
              name="myPassword"
              for="myPassword"
              v-model="form.myPassword"
              type="password"
              rounded
              outlined
              placeholder="Juan"
              class="inName"
              no-error-icon
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
              no-error-icon
              :rules="[myConfirmPassword]"
            >
            </q-input>
          </q-card-section>
        </div>
        <q-card-section class="q-px-xl text-subtitle1" style="font-weight: 600">
          Upload Profile Picture
        </q-card-section>

        <div class="q-px-xl">
          <q-card style="border: 1px dashed black">
            <q-card-section class="flex flex-center">
              <q-file
                name="myProfileImg"
                for="myProfileImg"
                v-model="myProfileImg"
                label="Choose File"
                filled
                accept="image/*"
                @added="onFileAdded"
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
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
// import { registerUser } from "src/backend/function.js";
const $q = useQuasar();
const myProfileImg = ref(null);
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
  myBarangay: "",
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
  myGuardianBarangay: "",
  myGuardianStreet: "",
  myGuardianBlockLot: "",
  userName: "",
  myPassword: "",
  myConfirmPassword: "",

  mySchool: "",
});
const loading = ref(false);
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

const onFileAdded = (files) => {
  myProfileImg.value = files[0]; // Get the first file
};

async function onSubmit() {
  if (!myProfileImg.value) {
    $q.notify({
      type: "negative",
      message: "Please select a file to upload.",
    });
    return;
  }

  const formData = new FormData();
  formData.append("userImage", myProfileImg.value);
  try {
    const response = await axios.post(
      "http://localhost:3000/users/signup",
      formData,
      {
        // personal details
        firstName: form.value.firstName,
        middleName: form.value.middleName,
        lastName: form.value.lastName,
        username: form.value.userName,
        email: form.value.myEmail,
        password: form.value.myPassword,
        gender: form.value.myGender,
        contactNumber: form.value.myContact,
        birthDate: form.value.myBirthdate,
        school: form.value.mySchool,

        // Personal address
        country: form.value.myCountry,
        zipCode: form.value.myZipCode,
        province: form.value.myProvince,
        municipality: form.value.myMunicipality,
        barangay: form.value.myBarangay,
        street: form.value.myStreet,
        blockAndLot: form.value.myBlockLot,
        // guardian info

        guardianFirstName: form.value.myGuardianFname,
        guardianMiddleName: form.value.myGuardianMname,
        guardianLastName: form.value.myGuardianLname,
        guardianContactNumber: form.value.myGuardianContact,

        // guardian address

        guardianCountry: form.value.myGuardianCountry,
        guardianZipCode: form.value.myGuardianZipCode,
        guardianProvince: form.value.myGuardianProvince,
        guardianMunicipality: form.value.myGuardianMunicipality,
        guardianBarangay: form.value.myGuardianBarangay,
        guardianStreet: form.value.myGuardianStreet,
        guardianBlockAndLot: form.value.myGuardianBlockLot,

        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    message.value = `Account created successfully: ${response.data.name}`;

    // Reset the form after successful submission
    form.value.firstName = "";
    form.value.middleName = "";
    form.value.lastName = "";
    form.value.userName = "";
    form.value.myEmail = "";
    form.value.myPassword = "";
    form.value.myGender = "";
    form.value.myContact = "";
    form.value.myBirthdate = "";
    form.value.mySchool = "";

    form.value.myCountry = "";
    form.value.myZipCode = "";
    form.value.myProvince = "";
    form.value.myMunicipality = "";
    form.value.myBarangay = "";
    form.value.myStreet = "";
    form.value.myBlockLot = "";

    form.value.myGuardianFname = "";
    form.value.myGuardianMname = "";
    form.value.myGuardianLname = "";
    form.value.myGuardianContact = "";

    form.value.myGuardianCountry = "";
    form.value.myGuardianZipCode = "";
    form.value.myGuardianProvince = "";
    form.value.myGuardianMunicipalty = "";
    form.value.myGuardianBarangay = "";
    form.value.myGuardianStreet = "";
    form.value.myGuardianBlockLot = "";
  } catch (error) {
    message.value = "Failed to create Account. Please try again.";
    console.error("Error:", error);
  } finally {
  }
}
</script>
