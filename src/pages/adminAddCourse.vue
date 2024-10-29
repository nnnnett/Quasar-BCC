<template>
  <q-page padding>
    <q-form @submit.prevent="submitCourse">
      <q-card-section>
        <div>Course Name</div>
        <q-input
          name="courseName"
          v-model="form.courseName"
          type="text"
          rounded
          outlined
          placeholder="Course Name"
          no-error-icon
        />
      </q-card-section>

      <q-card-section>
        <div>Course Description</div>
        <q-input
          name="courseDescription"
          v-model="form.courseDescription"
          type="textarea"
          rounded
          outlined
          placeholder="Course Description"
          no-error-icon
        />
      </q-card-section>

      <q-btn
        class="q-my-xl q-py-md"
        label="Submit"
        no-caps
        type="submit"
        color="accent"
        style="background-color: #925fe2; width: 230px"
        rounded
      />

      <div v-if="message" class="q-mt-md">{{ message }}</div>
    </q-form>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const form = ref({
  courseName: "",
  courseDescription: "",
});

const message = ref("");

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("authToken"); // Adjust key if necessary
};

const submitCourse = async () => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    $q.notify({
      type: "negative",
      message: "Authentication token is missing.",
    });
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:3000/courses",
      {
        name: form.value.courseName,
        description: form.value.courseDescription,
      },
      {
        headers: {
          Authorization: `${token}`, // Include the token in the Authorization header
        },
      }
    );

    $q.notify({
      type: "positive",
      message: "Course Created Successfully.",
    });

    // Reset the form after successful submission
    form.value.courseName = "";
    form.value.courseDescription = "";
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "Failed to create course. Please try again.";
    $q.notify({
      type: "negative",
      message: errorMessage,
    });
    console.error("Error:", error);
  }
};
</script>
