<template>
  <q-page>
    <!-- Components -->
    <div class="navbar-Profile">
      <div class="q-pb-xl">
        <UserNavBar />
      </div>
      <q-space />
      <div class="q-pt-lg q-mr-lg">
        <notifProfile />
      </div>
    </div>
    <!-- Dashboard Content -->

    <div class="main-dashboard">
      <q-card-section> Dashboard </q-card-section>
      <div class="mindstorm-container q-ml-xl">
        <q-card-section> Mindstorm </q-card-section>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.navbar-Profile
  display: flex

.main-dashboard
  border: 1px solid black
  width: 50%
.mindstorm-container
  border: 2px solid #925FE2
  background-color: #9C6FE4
  width: 80%
  border-radius: 14px
  height: 200px
</style>

<script setup>
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
</script>
