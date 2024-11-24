<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">User Signup</div>
      </q-card-section>

      <q-form @submit.prevent="submitSignup">
        <q-card-section>
          <!-- Basic Information -->
          <q-input v-model="username" label="Username" outlined />
          <q-input
            v-model="password"
            type="password"
            label="Password"
            outlined
          />
          <q-input v-model="email" label="Email" outlined />
          <q-input v-model="firstName" label="First Name" outlined />
          <q-input v-model="middleName" label="Middle Name" outlined />
          <q-input v-model="lastName" label="Last Name" outlined />
          <q-input v-model="gender" label="Gender" outlined />
          <q-input v-model="contactNumber" label="Contact Number" outlined />
          <q-input
            v-model="birthDate"
            type="date"
            label="Birth Date"
            outlined
          />
          <q-input v-model="school" label="School" outlined />

          <!-- Address -->
          <q-input v-model="country" label="Country" outlined />
          <q-input v-model="zipCode" label="Zip Code" outlined />
          <q-input v-model="province" label="Province" outlined />
          <q-input v-model="municipality" label="Municipality" outlined />
          <q-input v-model="barangay" label="Barangay" outlined />
          <q-input v-model="street" label="Street" outlined />
          <q-input v-model="blockAndLot" label="Block and Lot" outlined />

          <!-- Guardian Information -->
          <q-input
            v-model="guardianFirstName"
            label="Guardian First Name"
            outlined
          />
          <q-input
            v-model="guardianMiddleName"
            label="Guardian Middle Name"
            outlined
          />
          <q-input
            v-model="guardianLastName"
            label="Guardian Last Name"
            outlined
          />
          <q-input
            v-model="guardianContactNumber"
            label="Guardian Contact Number"
            outlined
          />

          <!-- Guardian Address -->
          <q-input
            v-model="guardianCountry"
            label="Guardian Country"
            outlined
          />
          <q-input
            v-model="guardianZipCode"
            label="Guardian Zip Code"
            outlined
          />
          <q-input
            v-model="guardianProvince"
            label="Guardian Province"
            outlined
          />
          <q-input
            v-model="guardianMunicipality"
            label="Guardian Municipality"
            outlined
          />
          <q-input
            v-model="guardianBarangay"
            label="Guardian Barangay"
            outlined
          />
          <q-input v-model="guardianStreet" label="Guardian Street" outlined />
          <q-input
            v-model="guardianBlockAndLot"
            label="Guardian Block and Lot"
            outlined
          />

          <!-- User Image Upload -->
          <q-file
            v-model="imageFile"
            label="Upload User Image"
            accept="image/*"
            filled
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn type="submit" label="Sign Up" color="primary" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const username = ref("");
const password = ref("");
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
  if (!username.value || !password.value || !email.value || !imageFile.value) {
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
  } catch (error) {
    $q.notify({ type: "negative", message: "Error during signup." });
    console.error(error);
  }
};
</script>

<style scoped>
.q-pa-md {
  max-width: 400px;
  margin: auto;
}
</style>
