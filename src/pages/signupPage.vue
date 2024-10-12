<template>
  <div>
    <q-page
      class="flex flex-center"
      style="
        background: linear-gradient(
          154deg,
          #b592ec 8%,
          #a79eeb 22%,
          #5ce1e6 100%
        );
      "
    >
      <div class="container text-center">
        <q-card class="no-border bg-transparent">
          <q-card-section class="text-h5" style="color: #ffffff">
            Welcome to <span style="color: #5ce1e6">BCC!</span>
          </q-card-section>

          <q-card-section
            class="text-h2"
            style="color: #ffffff; font-weight: 600"
          >
            Sign Up
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-col-gutter-md"
              action="http://localhost:9000/#/signupPage"
              method="GET"
            >
              <q-input
                semi-rounded
                outlined
                v-model="form.registrationCode"
                label="Registration Code"
                for="registrationCode"
                type="tel"
                placeholder="Ex. 202110004"
                bg-color="white"
                color="black"
                clearable
                :rules="[numberChecker]"
              >
              </q-input>

              <div>
                <q-btn
                  class="q-my-xl q-py-md"
                  label="Proceed"
                  no-caps
                  type="submit"
                  color="accent"
                  style="background-color: #925fe2; width: 230px"
                  rounded
                >
                </q-btn>
              </div>
            </q-form>

            <q-card-section>
              <router-link
                to="/loginPage"
                style="color: #2584e9; text-decoration: none"
                >I already have an account</router-link
              ></q-card-section
            >
            <q-card-section style="color: #ffffff">
              By tapping Log In or Create an Account, you agree to our Terms.
              Learn how we process your data in our
              <router-link to="/privacyPolicy" class="policies"
                >Privacy Policy </router-link
              >and<router-link to="/cookiesPolicy" class="policies">
                Cookies Policy</router-link
              >
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </div>
  <router-view />
</template>

<style lang="sass" scoped>
.container
  width: 500px
  max-width:90vw

.no-border
  border: none
  box-shadow: none

.policies
  color:#2584E9
  text-decoration: none
</style>

<script setup>
import { Notify, useQuasar } from "quasar";
import { reactive, ref } from "vue";

defineOptions({
  name: "signupPage",
});

const form = ref({
  registrationCode: "",
  // acceptedPolicy: false,
});

const numberChecker = (val) =>
  (val && /^\d{4}$/.test(val)) || "Please type a valid number";

// function onSubmit(event) {
//   if (!this.form.acceptedPolicy) {
//     event.preventDefault();
//     return;
//   }

//   event.target.submit();
// }
</script>
