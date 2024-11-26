<template>
  <q-page>
    <instructorNavBar />
    <div class="main-container">
      <q-card-section>
        <div class="q-pl-lg text-subtitle1">Course > Music > [Activity #]</div>
      </q-card-section>
      <!--  -->
      <div class="main-dashboard q-pl-xl">
        <q-card class="main-content q-px-xl q-py-lg">
          <div class="imgCourse q-px-md">
            <q-card-section class="q-pl-none">
              Add Activity Thumbnail
            </q-card-section>
            <q-card-section
              class="flex flex-center"
              style="border: 1px dashed black; width: 100%"
            >
              <q-file
                name="imageFile"
                for="imageFile"
                v-model="imageFile"
                v-if="!photoUrl && !uploadLoading"
                @update:model-value="uploadPhoto(imageFile)"
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
            </q-card-section>
          </div>
          <!-- Course activity details -->
          <div class="q-px-md courseActDetails">
            <q-card-section
              class="q-mt-md q-p-none q-pl-md text-h6"
              style="text-transform: capitalize; width: 240px"
            >
              <q-input type="text" label="Add Activity #"></q-input
            ></q-card-section>
            <div class="courseActivityAndDescript">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 25%;
                "
                class="q-ml-sm"
              >
                <div class="showDescription">
                  <q-card-section>Instruction</q-card-section>
                </div>
              </div>
              <!-- Description Section: Visible when descriptionLink is true -->
              <q-card-section
                class="courseDescription q-px-lg q-pb-md q-pt-none"
                style="text-align: justify"
              >
                <q-input type="textarea" outlined> </q-input>
              </q-card-section>
            </div>
            <div
              style="background-color: #925fe2; border-radius: 14px"
              class="q-mt-lg"
            >
              <q-btn
                flat
                to="#"
                label="Published  Activity"
                style="width: 100%; text-transform: capitalize; color: #ffffff"
              />
            </div>
          </div>
        </q-card>
        <q-card class="publishedActivities-container q-py-md q-px-md">
          <!-- submited act -->
          <q-card-section
            class="text-subtitle1"
            style="color: #4b4b4b; font-weight: 600"
          >
            Published Activity
          </q-card-section>
          <q-card-section
            style="row-gap: 14px; display: flex; flex-direction: column"
          >
            <router-link style="text-decoration: none" to="editActivity">
              <div
                class="acivityList q-py-md q-pl-md text-subtitle1 text-weight-medium"
              >
                Activity 1
              </div>
            </router-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.main-container
  width: 80vw

.main-dashboard
  display: flex
  justify-content: space-between
.main-content
  height: auto
  width: 65%
  border-radius: 24px
  max-height: 600px
.imgCourse


.responsive-img
  min-width: 450px
  max-height: 450px
  object-fit: contain
  border-radius: 14px
.courseActivityAndDescript
  border: 2px solid #EBE9FB
  border-radius: 14px

.publishedActivities-container
  width: 33%
  border-radius: 24px
  height: auto

.acivityList
  border: 1px solid #979797
  text-transform: capitalize
  border-radius: 14px
  color: #4B4B4B
</style>

<script setup>
import instructorNavBar from "src/components/instructorNavBar.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

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
      if (myProfile.data[0].title !== "instructor") {
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
