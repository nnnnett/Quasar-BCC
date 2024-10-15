<template class="">
  <div>
    <q-page>
      <q-toolbar class="text-white q-py-md q-px-xl headerSection">
        <div class="flex">
          <q-avatar class="logo-bcc">
            <img src="~assets/logo_bcc.png" />
          </q-avatar>
          <q-card-section
            class="text-bcc text-subtitle1"
            style="color: #4b4b4b"
          >
            Bacoor Computer Clubhose Hub
          </q-card-section>
        </div>

        <div class="q-ml-xl">
          <NavBar />
        </div>
        <q-space />
        <div class="q-mr-xl">
          <q-btn
            class="q-px-xl"
            label="Proceed"
            no-caps
            color="#FFFFFF"
            style="background-color: #925fe2; width: 130px"
            rounded
          >
          </q-btn>
        </div>
      </q-toolbar>
    </q-page>
  </div>
  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<style lang="sass" scoped>
.logo-bcc
  height: 70px
  width: 70px

.text-bcc
  width: 50%

.headerSection
  display: flex
</style>

<script setup>
import NavBar from "src/components/navBar.vue";

defineOptions({
  name: "IndexPage",
});
</script>
