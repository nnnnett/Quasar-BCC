<template>
  <q-page>
    <div>
      <div class="navbar-Profile">
        <div>
          <adminNavBar />
        </div>
        <div class="q-pt-lg"></div>
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
                      v-model="form.imageFile"
                      v-if="!photoUrl && !uploadLoading"
                      @update:model-value="uploadPhoto(form.imageFile)"
                      label="Choose File"
                      filled
                      :loading="uploadLoading"
                      accept="image/*"
                      clearable
                    >
                      <template v-slot:prepend>
                        <q-icon name="upload" />
                      </template>
                    </q-file>
                    <q-spinner
                      v-else-if="uploadLoading"
                      style="font-size: 5vw"
                    ></q-spinner>
                    <div v-else>
                      <div class="text-center text-subtitle2">
                        Tap to replace
                      </div>
                      <q-img
                        :src="photoUrl"
                        style="width: 500px; max-width: 20vh"
                        :ratio="1"
                        @click="removePhoto()"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <div>
                <q-card-section class="q-pl-none q-pb-sm"
                  >Course Title</q-card-section
                >

                <q-input
                  name="courseName"
                  v-model="form.courseName"
                  type="text"
                  rounded
                  outlined
                  placeholder="Course Name"
                  no-error-icon
                />
              </div>

              <div>
                <q-card-section class="q-pl-none q-pb-sm"
                  >Description</q-card-section
                >

                <q-input
                  name="courseDescription"
                  v-model="form.courseDescription"
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
                  to="adminCourseManagement"
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
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useQuasar } from "quasar";
import adminNavBar from "src/components/adminNavBar.vue";
import notifProfile from "src/components/notifProfile.vue";

const form = reactive({
  courseName: "",
  courseDescription: "",
  photoUrl: "",
});

const $q = useQuasar();
const router = useRouter();
const courseName = ref("");
const courseDescription = ref("");
const mentors = ref("");
const imageFile = ref("");
const durations = ref("");
const photoUrl = ref(null);
const deletePhotoUrl = ref(null);
const uploadLoading = ref(false);
const optionMentors = {
  AssignedMentor: ["nnet", "jules", "khris"],
};

const optionDurations = {
  setDuration: [1, 2, 3, 4],
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("authToken"); // Adjust key if necessary
};

// const token = getTokenFromLocalStorage();
// if (!token) {
//   $q.notify({
//     type: "negative",
//     message: "Authentication token is missing.",
//   });
//   return;
// }
async function submitCourse() {
  try {
    await axios.post(` ${process.env.api_host}/courses`, {
      name: form.courseName,
      description: form.courseDescription,
      courseFile: photoUrl.value,
    });

    $q.notify({
      type: "positive",
      message: "Course Created Successfully.",
    });

    // Reset the form after successful submission
    form.courseName = "";
    form.courseDescription = "";
    photoUrl.value = "";
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
}

async function uploadToImgBB(apiKey, photoBase64) {
  try {
    const formData = new FormData();
    formData.append("image", photoBase64);
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      formData
    );
    deletePhotoUrl.value = response.data.data.delete_url;
    console.log(response.data.data);
    console.log("text: ", deletePhotoUrl);
    return response.data.data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    if (error.response) {
      console.error("Response data:", error.response.data); // Log the detailed response from ImgBB
    }
    throw error;
  }
}
async function uploadPhoto(photo) {
  console.log(photo);
  try {
    uploadLoading.value = true;
    const base64Image = await convertToBase64(photo);
    photoUrl.value = await uploadToImgBB(process.env.IMGBB_KEY, base64Image);
  } finally {
    uploadLoading.value = false;
  }
}

async function removePhoto() {
  photoUrl.value = "";
  imageFile.value = "";

  try {
    if (photoUrl.value) await axios.delete(deletePhotoUrl);
  } catch (error) {
    console.error("Error during photo deletion:", error);
  } finally {
    deletePhotoUrl.value = "";
    console.log(deletePhotoUrl);
  }
}

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result.split(",")[1]);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

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
    console.log("here", response);
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
      if (myProfile.data[0].title !== "admin") {
        router.replace(`/loginPage`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

onMounted(() => {
  isLogin();
});
</script>
