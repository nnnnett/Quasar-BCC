<template>
  <div class="notifProfile">
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
    <div>
      <q-card-section class="q-pa-none text-caption">
        {{ formattedDate }}
      </q-card-section>
      <div class="fullName">
        <q-card-section style="width: 300px"
          ><span v-if="myProfile"
            >{{ myProfile.firstName }} {{ myProfile.middleName }}
            {{ myProfile.lastName }}</span
          ></q-card-section
        >
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
  text-align: left
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
// Date
const formattedDate = ref("");
onMounted(() => {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  formattedDate.value = today.toLocaleDateString("en-US", options);
});

const myProfile = ref(null);

const token = localStorage.getItem("authToken");
// Check if token exists before making the request
if (token) {
  axios
    .get("http://localhost:3000/users/myProfile", {
      headers: {
        authorization: `${token}`,
      },
    })
    .then((response) => {
      myProfile.value = response.data[0];
    })
    .catch((error) => {
      console.error("API call failed:", error);
    });
} else {
  console.log("No token found in localStorage");
}
const getProfileImg = (filePath) => {
  const fileName = filePath.split("\\").pop();
  return `http://localhost:3000/uploads/${fileName}`;
};
</script>
