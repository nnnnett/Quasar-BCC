<template>
  <div v-if="!showCamera" class="col-12 text-center q-pt-md">
    <img alt="BCC logo" src="../assets/logo_bcc.png" style="width: 340px" />
  </div>

  <div class="row justify-center q-pt-lg">
    <div class="col-12 text-center">
      <span class="text-subtitle2 text-grey-9">
        {{ textInfo }}
      </span>

      <!-- Button to open camera for Attendance -->
      <q-btn
        color="blue-grey-10"
        rounded
        icon="camera_alt"
        label="Attendance"
        class="full-width"
        size="lg"
        @click="turnCameraOn('attendance')"
        v-show="!showCamera"
      />

      <!-- Button to open camera for Logout -->
      <q-btn
        color="red"
        rounded
        icon="exit_to_app"
        label="Logout"
        class="full-width"
        size="lg"
        @click="turnCameraOn('logout')"
        v-show="!showCamera"
      />

      <!-- Last Attendance ID -->
      <p class="text-subtitle1" v-if="result">
        Last Action ID: <b>{{ result }}</b>
      </p>

      <!-- Camera Stream for Attendance -->
      <div v-if="showCamera && cameraType === 'attendance'">
        <qrcode-stream :camera="camera" @detect="onDecodeLogin" />
      </div>

      <!-- Camera Stream for Logout -->
      <div v-if="showCamera && cameraType === 'logout'">
        <qrcode-stream :camera="camera" @detect="onDecodeLogout" />
      </div>
    </div>

    <!-- Button to turn off camera -->
    <q-btn
      color="red"
      rounded
      icon="camera_alt"
      label="Turn off scanner"
      class="full-width"
      size="lg"
      @click="turnCameraOff()"
      v-show="showCamera"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { QrcodeStream } from "vue-qrcode-reader";
import axios from "axios";

const camera = ref("auto");
const result = ref(null);
const showCamera = ref(false);
const cameraType = ref(null); // To track which camera is currently active (attendance or logout)

const textInfo = computed(() => {
  return showCamera.value
    ? cameraType.value === "attendance"
      ? "Scan your QR code for Attendance"
      : "Scan your QR code to Logout"
    : "Press the button to scan a QR code.";
});

// Function for turning on the camera
const turnCameraOn = (type) => {
  cameraType.value = type; // Set camera type (attendance or logout)
  showCamera.value = true;
  camera.value = "auto";
};

// Function for turning off the camera
const turnCameraOff = () => {
  cameraType.value = null; // Clear the camera type
  showCamera.value = false;
  camera.value = "off";
};

// Function for handling login (attendance)
const onDecodeLogin = async (content) => {
  result.value = content[0].rawValue; // only gets the QR code value itself.
  console.log("Login QR code:", result.value);
  turnCameraOff(); // Turn off the camera after scanning
  try {
    const response = await axios.post(
      `${process.env.api_host}/users/attendance/login`,
      { user_id: result.value } // Sending the scanned QR code as _id
    );
    console.log("Attendance recorded:", response.data);
  } catch (error) {
    console.error("Error posting attendance:", error);
  }
};

// Function for handling logout
const onDecodeLogout = async (content) => {
  result.value = content[0].rawValue; // only gets the QR code value itself.
  console.log("Logout QR code:", result.value);
  turnCameraOff(); // Turn off the camera after scanning
  try {
    const response = await axios.put(
      `${process.env.api_host}/users/attendance/logout`,
      { user_id: result.value } // Sending the scanned QR code as _id
    );
    console.log("Logout recorded:", response.data);
  } catch (error) {
    console.error("Error posting logout:", error);
  }
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
