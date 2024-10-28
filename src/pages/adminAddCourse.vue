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
          :rules="[requiredFields, textChecker]"
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
          :rules="[requiredFields, textChecker]"
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

const form = ref({
  courseName: "",
  courseDescription: "",
});

const message = ref("");
const requiredFields = (value) => !!value || "This field is required";
const textChecker = (value) =>
  value.length > 5 || "Minimum 6 characters required";

const submitCourse = async () => {
  try {
    const response = await axios.post("http://localhost:3000/courses", {
      name: form.value.courseName,
      description: form.value.courseDescription,
    });
    message.value = `Course created successfully: ${response.data.name}`;

    // Reset the form after successful submission
    form.value.courseName = "";
    form.value.courseDescription = "";
  } catch (error) {
    message.value = "Failed to create course. Please try again.";
    console.error("Error:", error);
  }
};
</script>
