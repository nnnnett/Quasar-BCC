<template>
  <q-page
    ><div class="navbar-Profile">
      <div class="q-pb-xl">
        <UserNavBar />
      </div>
      <q-space />
      <div class="q-pt-lg q-mr-lg">
        <notifProfile />
      </div></div
  ></q-page>
</template>

<style lang="sass" scoped>

.navbar-Profile
  display: flex
</style>
<script setup>
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
</script>
