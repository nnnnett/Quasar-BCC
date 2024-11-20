<template>
  <q-page>
    <q-card style="width: 50vw" class="flex flex-center">
      <q-form @submit.prevent="submitSignup">
        <div style="width: 100%">
          <q-card-section class="q-pb-none">
            Username
            <q-input
              name="username"
              for="username"
              v-model="username"
              type="text"
              rounded
              outlined
              placeholder="Juan"
            />
          </q-card-section>
          <q-card-section class="q-pb-none">
            password
            <q-input
              name="password"
              for="password"
              v-model="password"
              type="password"
              rounded
              outlined
            />
          </q-card-section>
          <q-card-section class="q-pb-none">
            email
            <q-input
              name="email"
              for="email"
              v-model="email"
              type="email"
              rounded
              outlined
              placeholder="skibidi@cvsu.edu.ph"
            />
          </q-card-section>
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
            />
          </q-card-section>
          <q-card-section class="q-pb-none">
            Middle Name
            <q-input
              name="middleName"
              for="middleName"
              v-model="middleName"
              type="text"
              rounded
              outlined
              placeholder="Juan"
            />
          </q-card-section>
          <q-card-section class="q-pb-none">
            Last Name
            <q-input
              name="lastName"
              for="lastName"
              v-model="lastName"
              type="text"
              rounded
              outlined
              placeholder="Juan"
            />
          </q-card-section>
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
            />
          </q-card-section>
          <div class="q-px-xl">
            <q-card style="border: 1px dashed black">
              <q-card-section class="flex flex-center">
                <q-file
                  name="userImage"
                  for="userImage"
                  v-model="userImage"
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
        <q-btn
          class="q-my-xl q-py-md"
          label="Register"
          no-caps
          type="submit"
          color="accent"
          style="background-color: #925fe2; width: 230px"
          rounded
        />
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const router = useRouter();
const $q = useQuasar();

const username = ref("");
const password = ref("");
const email = ref("");
const firstName = ref("");
const middleName = ref("");
const lastName = ref("");
const gender = ref("");

const userImage = ref("");

const optionGender = {
  option: ["Male", "Female", "LGBTQIA+"],
};

// Reactive variables

// Fetch courses from the API when the component mounts
onMounted(() => {
  axios
    .get("http://localhost:3000/courses")
    .then((response) => {
      // Map the courses from the response to a structure suitable for the q-select
      selectCourses.value.coursesOption = response.data.map((course) => ({
        value: course.id, // The value assigned when the course is selected
        label: course.name, // The label displayed in the dropdown
      }));
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
    });
});
const submitSignup = async () => {
  if (
    !username.value ||
    !password.value ||
    !email.value ||
    !firstName.value ||
    !middleName.value ||
    !lastName.value ||
    !gender.value ||
    !userImage.value
  ) {
    $q.notify({
      type: "warning",
      messeage: "Please fill in all required fields.",
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

  formData.append("userImage", userImage.value);

  try {
    const response = await axios.post(
      "http://localhost:3000/instructors/signup",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    // Show a positive notification
    $q.notify({ type: "positive", message: "Signup successful!" });
    // Redirect user to another page (e.g., the home page or dashboard)
  } catch (error) {
    // Show an error notification
    $q.notify({ type: "negative", message: "Error during signup." });
    console.error(error);
  }
};
</script>
