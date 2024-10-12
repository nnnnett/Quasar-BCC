<template class="">
  <div
    style="
      background: linear-gradient(
        154deg,
        #b592ec 8%,
        #a79eeb 22%,
        #5ce1e6 100%
      );
    "
  >
    <q-page class="flex flex-center column" style="overflow: hidden">
      <q-card class="no-border bg-transparent">
        <div>
          <q-card-section class="row">
            <div class="text-h5" style="color: #ffffff">Welcome to</div>
            <div class="text-h5 q-ml-sm" style="color: #5ce1e6">BCC</div>
          </q-card-section>
          <q-card-section>
            <div class="text-h2">Sign up</div>
          </q-card-section>
        </div>

        <q-card-section>
          REGISTRATION CODE
          <q-form @submit.prevent="myProceed">
            <q-input
              rounded
              outlined
              v-model="form.registrationCode"
              for="registrationCode"
              type="number"
              placeholder="Ex. 202110004"
              bg-color="white"
              color="black"
              clearable
              counter
            >
            </q-input>

            <q-card-section>
              <q-btn
                class="q-px-xl q-py-sm"
                label="Proceed"
                type="submit"
                rounded
                style="background-color: #925fe2; width: 230px"
                text-color="white"
              ></q-btn>

              <q-card-section>
                <router-link
                  to="/loginPage"
                  style="color: #2584e9; text-decoration: none"
                  >I already have an account</router-link
                >
              </q-card-section>
            </q-card-section>
          </q-form>
        </q-card-section>

        <q-card-section>
          By tapping Log In or Create an Account, you agree to our Terms. Learn
          how we process your data in our Privacy Policy and Cookies Policy.
        </q-card-section>
      </q-card>
    </q-page>
  </div>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<style scoped>
.no-border {
  border: none;
  box-shadow: none;
}
</style>

<script setup>
defineOptions({
  name: "IndexPage",
});

import { Notify, useQuasar } from "quasar";
import { reactive } from "vue";

const form = reactive({
  registrationCode: "",
});
function myProceed() {
  if (!form.registrationCode) {
    Notify.create({
      message: "Enter registration code",
      color: "alert",
    });
    return;
  }
}
</script>
