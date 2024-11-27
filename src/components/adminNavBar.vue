<template>
  <q-drawer show-if-above bordered style="background-color: #f2f7ff">
    <div class="q-pt-xl">
      <q-list>
        <div class="logo-container">
          <router-link to="/">
            <q-avatar class="bcc-logo">
              <q-img src="~assets/logo_bcc.png" />
            </q-avatar>
          </router-link>
          <q-item-label
            class="text-subtitle1 text-weight-bold q-ml-sm"
            style="
              background: linear-gradient(to right, #b592ec 8%, #5ce1e6 100%);
              -webkit-background-clip: text; /* Applies the gradient to the text */
              color: transparent; /* Makes the text itself transparent so the background shows */
            "
          >
            Bacoor Computer<br />
            Clubhouse Hub
          </q-item-label>
        </div>

        <div class="sideNavBar text-subtitle1 q-mt-xl">
          <q-item
            clickable
            @click="router.replace(`/adminDashboard`)"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            @click="router.replace(`/adminCourseManagement`)"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section>
              <q-item-label>Courses Management</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            @click="router.replace(`/adminUserManagement`)"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section>
              <q-item-label>User Management</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            @click="router.replace(`/adminAttendanceManagement`)"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section>
              <q-item-label>Attendance Management</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            @click="router.replace(`/adminConfigure`)"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section>
              <q-item-label>Configuration</q-item-label>
            </q-item-section>
          </q-item>
          <!-- <q-item clickable to="#" class="q-pl-xl q-mt-md">
            <q-item-section>
              <q-item-label>Reports</q-item-label>
            </q-item-section>
          </q-item> -->

          <q-item clickable @click="handleLogout" class="q-pl-xl q-mt-md">
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </div>
  </q-drawer>
</template>

<style lang="sass" scoped>
.logo-container
  display: flex
  flex-direction: row
  align-items: center
  text-align: center
  justify-content: center
.bcc-logo
  width: 75px
  height: 75px

.sideNavBar
  width: 100%
  color: #4B4B4B
</style>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router"; // Importing the router to navigate after logout
import { useQuasar } from "quasar"; // Importing Quasar's $q for notifications

const $q = useQuasar();
const router = useRouter();

const clearLocalStorage = () => {
  localStorage.clear();
  console.log("LocalStorage has been cleared.");
};

const handleLogout = async () => {
  try {
    // Clear localStorage when logging out
    clearLocalStorage();

    // Show a notification
    $q.notify({ type: "positive", message: "Logged out successfully" });
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Redirect to the login page
    router.push("/");
  } catch (error) {
    // If an error occurs during logout
    $q.notify({ type: "negative", message: "Error during logout" });
    console.error(error);
  }
};
</script>
