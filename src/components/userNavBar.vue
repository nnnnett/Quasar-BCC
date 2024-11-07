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
          <q-avatar class="bcc-logo">
            <q-img src="~assets/logo_bcc.png" />
          </q-avatar>
          <q-item-label header>
            Bacoor Computer<br />
            Clubhouse Hub
          </q-item-label>
        </div>

        <div class="sideNavBar">
          <q-item clickable to="userDashboard" class="q-pl-xl q-mt-md">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="userCourse" class="q-pl-xl q-mt-md">
            <q-item-section avatar>
              <q-icon name="library_books" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Courses</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="userProgress" class="q-pl-xl q-mt-md">
            <q-item-section avatar>
              <q-icon name="bar_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Progress</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="userSettings" class="q-pl-xl q-mt-md">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Settings</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="#" class="q-pl-xl q-mt-md">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="unknowbox q-mt-xl">
          <q-btn
            class="q-my-xl q-py-md"
            label="eqww"
            no-caps
            type="submit"
            color="accent"
            style="background-color: #925fe2; width: 230px"
            rounded
          />
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
import { ref, computed } from "vue";

const leftDrawerOpen = ref(false);
const isMobile = computed(() => {
  return window.innerWidth < 1024; // Adjust breakpoint as necessary
});

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
