<template>
  <div v-if="!showCamera" class="col-12 text-center q-pt-md">
    <img
      alt="Quasar logo"
      src="/src/assets/qrPlaceholder.png"
      style="width: 340px"
    /><!-- replace quasar logo with BCC logo -->
  </div>
  <div class="row justify-center q-pt-lg">
    <div class="col-12 text-center">
      <span class="text-subtitle2 text-grey-9">
        {{ textInfo }}
      </span>
      <q-btn
        color="blue-grey-10"
        rounded
        icon="camera_alt"
        label="attendance"
        class="full-width"
        size="lg"
        @click="turnCameraOn()"
        v-show="!showCamera"
      />

      <p class="text-subtitle1" v-if="result">
        Last Attendance ID: <b>{{ result }}</b>
      </p>
      <div v-if="showCamera">
        <qrcode-stream :camera="camera" @detect="onDecode"> </qrcode-stream>
      </div>
    </div>
    <q-btn
      color="red"
      rounded
      icon="camera_alt"
      label="turn off scanner"
      class="full-width"
      size="lg"
      @click="turnCameraOff()"
      v-show="showCamera"
    />
    <q-btn
      label="Logout"
      color="blue-grey-10"
      rounded
      class="full-width q-mt-md"
      size="lg"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { QrcodeStream } from "vue-qrcode-reader";
import axios from "axios";

const isValid = ref(undefined);
const camera = ref("auto");
const result = ref(null);
const showCamera = ref(false);

const textInfo = computed(() => {
  return showCamera.value
    ? "Scan your qrcode for Attendance"
    : "Press the button and scan a qrcode.";
});

const show = async (content) => {
  try {
    const response = await axios.get(`${process.env.api_host}/users/`);
    result.value = response;
  } catch (error) {
    console.error("error: ", error);
  }
};

const onDecode = async (content) => {
  result.value = content[0].rawValue; // only gets the QR code value itself.
  console.log(result.value);
  turnCameraOff();
  try {
    const response = await axios.post(
      ` ${process.env.api_host}/users/attendance`,
      {
        user_id: result.value, // Sending the scanned QR code as _id
      }
    );
    console.log("attendance recorded:", response.data);
  } catch (error) {
    console.error("error posting: ", error);
  }
};

const turnCameraOn = () => {
  camera.value = "auto";
  showCamera.value = true;
};

const turnCameraOff = () => {
  camera.value = "off";
  showCamera.value = false;
};
</script>

<style scoped>
.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}
</style>
