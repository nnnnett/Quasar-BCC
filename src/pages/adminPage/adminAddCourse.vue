<template>
  <q-page>
    <div>
      <div class="navbar-Profile">
        <div>
          <adminNavBar />
        </div>
        <div class="q-pt-lg">
          <notifProfile />
        </div>
      </div>
      <div class="main-container q-ml-lg q-mt-md">
        <div>
          <q-card-section
            class="text-subtitle1 text-weight-regular"
            style="color: #8f9bb3"
            >Course >
            <span style="color: #925fe2"
              >Create New Course</span
            ></q-card-section
          >
        </div>
        <div>
          <q-card-section
            class="text-h6 text-weight-medium q-py-sm"
            style="color: #4b4b4b"
          >
            Create New Course
          </q-card-section>
        </div>
        <div>
          <q-card-section class="q-pt-none">
            Fill in the details below to create a new course.
          </q-card-section>
        </div>
        <q-card class="q-px-md">
          <div class="createCoures-container">
            <q-form @submit.prevent="submitCourse">
              <div>
                <q-card-section
                  style="color: #4b4b4b"
                  class="text-h6 q-pb-md q-pl-none"
                >
                  Details Information
                </q-card-section>
              </div>
              <div>
                <q-card-section class="q-pt-none q-pb-sm q-pl-none">
                  Course Tumbnail
                </q-card-section>
              </div>
              <div class=" ">
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
                <q-card-section class="q-pl-none q-pb-sm"
                  >Course Title</q-card-section
                >

                <q-input
                  name="courseName"
                  v-model="courseName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Course Name"
                  no-error-icon
                />
              </div>
              <!-- Assigning -->
              <div class="assignedContainer">
                <!-- mentors -->
                <div style="width: 45%">
                  <q-card-section class="q-pl-none q-pb-sm">
                    Mentors
                  </q-card-section>
                  <q-select
                    filled
                    v-model="mentors"
                    :options="optionMentors.AssignedMentor"
                    label="Select Mentors"
                  />
                </div>
                <!-- durations -->
                <div style="width: 45%">
                  <q-card-section class="q-pl-none q-pb-sm">
                    Set Durations
                  </q-card-section>
                  <q-select
                    filled
                    v-model="durations"
                    :options="optionDurations.setDuration"
                    label="Set Durations"
                  />
                </div>
              </div>
              <div>
                <q-card-section class="q-pl-none q-pb-sm"
                  >Description</q-card-section
                >

                <q-input
                  name="courseDescription"
                  v-model="courseDescription"
                  type="textarea"
                  rounded
                  outlined
                  placeholder="Course Description"
                  no-error-icon
                />
              </div>
              <div
                class="q-py-none"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                "
              >
                <q-btn
                  class="q-my-xl q-py-md"
                  label="Cancel"
                  no-caps
                  type="reset"
                  style="width: 30%; border-radius: 14px"
                  rounded
                />
                <q-btn
                  class="q-my-xl q-py-md"
                  label="Submit"
                  no-caps
                  type="submit"
                  color="accent"
                  style="
                    background-color: #925fe2;
                    width: 60%;
                    border-radius: 14px;
                  "
                  rounded
                />
              </div>

              <div v-if="message" class="q-mt-md">{{ message }}</div>
            </q-form>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.createCoures-container

.navbar-Profile
  display: flex
  justify-content: space-between
.main-container
  width: 80vw
.assignedContainer
  display: flex
  width: 100%
  justify-content: space-between
@media (max-width:1703px)
  .main-container
    width: 70vw
</style>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import adminNavBar from "src/components/adminNavBar.vue";
import notifProfile from "src/components/notifProfile.vue";
const $q = useQuasar();

const courseName = ref("");
const courseDescription = ref("");
const mentors = ref("");
const imageFile = ref("");
const durations = ref("");

const optionMentors = {
  AssignedMentor: ["nnet", "jules", "khris"],
};

const optionDurations = {
  setDuration: [1, 2, 3, 4],
};

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
