<template>
  <div class="notifProfile">
    <q-card-section>
      <q-btn round icon="notifications">
        <q-badge floating color="red" rounded />
      </q-btn>
    </q-card-section>

    <div class="">
      <router-link to="/">
        <q-img
          src="~assets/waw.jpg"
          style="width: 50px; height: 50px; border-radius: 50px"
        />
      </router-link>
    </div>
    <div>
      <q-card-section class="q-pa-none text-caption">
        September 4, 2024
      </q-card-section>
      <q-card-section class="q-pa-none"> Mark Kenneth Doblon </q-card-section>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.notifProfile
  display: flex
  flex-direction: row
  align-items: center
  width: 290px
  justify-content: space-between
</style>
<script setup>
import { date } from "quasar";
</script>
