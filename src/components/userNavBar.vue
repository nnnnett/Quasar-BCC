<template>
  <q-toolbar>
    <q-btn
      class="burger-btn q-mt-xl"
      flat
      dense
      round
      @click="toggleLeftDrawer"
      aria-label="Menu"
      icon="menu"
      :disabled="!isMobile"
    />
  </q-toolbar>

  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    style="background-color: #f2f7ff"
  >
    <div class="q-pt-xl">
      <q-list>
        <div class="logo-container">
          <router-link to="/">
            <q-avatar class="bcc-logo">
              <q-img src="~assets/logo_bcc.png" />
            </q-avatar>
          </router-link>
          <q-item-label
            class="q-py-md text-h6 text-weight-medium"
            style="color: #4b4b4b"
          >
            Bacoor Computer<br />
            Clubhouse Hub
          </q-item-label>
        </div>

        <div class="sideNavBar">
          <q-item
            clickable
            @click="router.replace(`/dashboard`)"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            @click="router.replace(`/course`)"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section avatar>
              <q-icon name="library_books" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Courses</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-if="isMember"
            @click="router.replace(`/userProgress`)"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section avatar>
              <q-icon name="bar_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Progress</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            @click="router.replace(`/attendanceManagement`)"
            v-if="!isMember"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>
            <q-item-section>
              <q-item-label>User Management</q-item-label>
            </q-item-section>
          </q-item>
          <!-- <q-item
            v-if="isAdmin"
            clickable
            @click="router.replace(`/adminConfigure`)"
            class="q-pl-xl q-mt-md"
          >
            <q-item-section avatar>
              <q-icon name="widgets" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Configuration</q-item-label>
            </q-item-section>
          </q-item> -->
          <q-item
            clickable
            @click="router.replace(`/userSettings`)"
            class="q-pl-xl q-mt-md"
            v-if="isMember"
          >
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Settings</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable @click="handleLogout" class="q-pl-xl q-mt-md">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
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
  flex-direction: column
  align-items: center
  text-align: center

.bcc-logo
  width: 75px
  height: 75px

.sideNavBar
  width: 100%
  color: #8F9BB3


.unknowbox
  background-color: #EBE9FB
  display: flex
  justify-content: center

.burger-btn
  @media (min-width: 1024px) // Adjust breakpoint as necessary
    visibility: hidden
    z-index: 101
</style>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router"; // Importing the router to navigate after logout
import { useQuasar } from "quasar"; // Importing Quasar's $q for notifications
import axios from "axios";

const isAdmin = ref();
const isInstructor = ref();
const isMember = ref();
const leftDrawerOpen = ref(false);
const isMobile = computed(() => {
  return window.innerWidth < 1024; // Adjust breakpoint as necessary
});

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const $q = useQuasar();
const router = useRouter();

// Function to clear localStorage
const clearLocalStorage = () => {
  localStorage.clear();
  console.log("LocalStorage has been cleared.");
};

// Function to handle logout
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

      roleValidation(myProfile.data[0].title);
    }
  } catch (err) {
    console.error(err);
  }
}

async function roleValidation(title) {
  try {
    if (title === "admin") {
      return (isAdmin.value = true);
    }
    if (title === "instructor") {
      return (isInstructor.value = true);
    }
    if (title === "member") {
      return (isMember.value = true);
    }
  } catch (err) {
    console.error(err);
  }
}

onMounted(() => {
  isLogin();
});
</script>
