<template>
  <div class="notifProfile">
    <div v-if="member">
      <q-card-section>
        <q-btn round icon="notifications">
          <q-badge floating color="red" rounded />
        </q-btn>
      </q-card-section>
      <div class="">
        <router-link to="#">
          <span v-if="myProfile">
            <q-img
              :src="getProfileImg(myProfile.userImage)"
              style="width: 50px; height: 50px; border-radius: 50px"
            />
          </span>
        </router-link>
      </div>
      <div
        style="display: flex; flex-direction: column; align-items: flex-start"
      >
        <q-card-section class="q-pb-none text-caption">
          {{ formattedDate }}
        </q-card-section>
        <div class="fullName">
          <q-card-section class="q-pt-none" style="width: 300px"
            ><span v-if="myProfile"
              >{{ myProfile.firstName }} {{ myProfile.middleName }}
              {{ myProfile.lastName }}</span
            ></q-card-section
          >
        </div>
      </div>
    </div>
    <div v-if="instructor">
      <q-card-section>
        <q-btn round icon="notifications">
          <q-badge floating color="red" rounded />
        </q-btn>
      </q-card-section>
      <div class="">
        <router-link to="#">
          <span v-if="myProfile">
            <q-img
              :src="getProfileImg(myProfile.userImage)"
              style="width: 50px; height: 50px; border-radius: 50px"
            />
          </span>
        </router-link>
      </div>
      <div
        style="display: flex; flex-direction: column; align-items: flex-start"
      >
        <q-card-section class="q-pb-none text-caption">
          {{ formattedDate }}
        </q-card-section>
        <div class="fullName">
          <q-card-section class="q-pt-none" style="width: 300px"
            ><span v-if="myProfile"
              >{{ myProfile.firstName }} {{ myProfile.middleName }}
              {{ myProfile.lastName }}</span
            ></q-card-section
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.notifProfile
  display: flex
  flex-direction: row
  align-items: center
  width: auto
  justify-content: space-between
.fullName
  width: 300px
  text-transform: capitalize
@media (max-width:430px)
  .fullName
    width: 100%
    text-align: center
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
</style>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const formattedDate = ref("");
const member = ref(false);
const instructor = ref(false);
const myProfile = ref();
const token = localStorage.getItem("authToken");
if (token) {
  axios
    .get(`${process.env.api_host}/users/myProfile`, {
      headers: {
        authorization: `${token}`,
      },
    })
    .then((response) => {
      myProfile.value = response.data[0];
      // console.log("here", myProfile.value.title);
    })
    .catch((error) => {
      console.error("API call failed:", error);
    });
} else {
  console.log("No token found in localStorage");
}
const getProfileImg = (filePath) => {
  const fileName = filePath.split("\\").pop();
  return `${process.env.api_host}/uploads/${fileName}`;
};

// async function getUser() {
//   if (myProfile.value.title === "instructor") {
//     return (member.value = true);
//   } else {
//     return (member.value = false);
//   }
// }

onMounted(() => {
  // getUser();
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  formattedDate.value = today.toLocaleDateString("en-US", options);
});
</script>
