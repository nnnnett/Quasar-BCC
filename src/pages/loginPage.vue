<template>
  <q-page
    class="q-page"
    style="
      background: linear-gradient(
        154deg,
        #b592ec 8%,
        #a79eeb 22%,
        #5ce1e6 100%
      );
    "
  >
    <div class="loginCont flex flex-center">
      <!-- Sign in -->
      <div class="container">
        <q-card class="no-border" style="box-shadow: none">
          <q-card-section class="text-h5 q-pb-md" style="color: #4b4b4b">
            Welcome To <span style="color: #925fe2">BCC!</span>
          </q-card-section>
          <q-card-section
            class="text-h2 q-py-none"
            style="color: #4b4b4b; font-weight: 600"
          >
            Sign In
          </q-card-section>
          <q-card-section
            style="text-align: center"
            class="q-pt-xl q-pb-none q-px-xl"
          >
            By tapping Log In or Create an Account, you agree to our Terms.
            Learn how we process your data in our
            <router-link to="/privacyPolicy" class="policies"
              >Privacy Policy
            </router-link>
            and
            <router-link to="/cookiesPolicy" class="policies">
              Cookies Policy</router-link
            >
          </q-card-section>
          <q-card-section>
            <q-form action="http://localhost:9001/#/loginPage#" method="GET">
              <q-card-section>
                Username
                <q-input
                  name="username"
                  for="username"
                  v-model="form.username"
                  type="text"
                  placeholder="Mark"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section class="q-py-none">
                Password
                <q-input
                  name="password"
                  for="password"
                  v-model="form.password"
                  type="password"
                  :rules="[requiredFields]"
                >
                </q-input>
              </q-card-section>
              <q-card-section
                style="display: flex; justify-content: flex-end; color: #9e95a2"
              >
                Forgot Password
              </q-card-section>

              <div class="column flex flex-center">
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

                <q-card-section>
                  Don’t have an account?
                  <router-link to="signupPage" class="policies">
                    Create Account
                  </router-link>
                </q-card-section>
                <q-card-section>
                  Are you a mentor?
                  <router-link to="#" class="policies">Click here </router-link>
                </q-card-section>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>

  <router-view />
</template>

<style lang="sass" scoped>
.container
  width: 500px
  max-width:90vw
.policies
  color:#2584E9
  text-decoration: none
.loginCont
  background-color: white
  height: 100vh
  width: 50%

.loginCont
  @media (max-width:1024px)
    width: 60%


  .loginCont
  @media (max-width:842px)
    width: 80%

    .loginCont
  @media (max-width:629px)
    width: 100%
</style>

<script setup>
import { Notify, useQuasar } from "quasar";
import { reactive, ref } from "vue";

defineOptions({
  name: "loginPage",
});

const form = ref({
  username: "",
  password: "",
});

const requiredFields = (val) =>
  (val && val.length > 0) || "Please type something";
</script>
