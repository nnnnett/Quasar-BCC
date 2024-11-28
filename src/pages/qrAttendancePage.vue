<template>
  <q-page
    class=" "
    style="
      background: linear-gradient(
        175deg,
        #b592ec 8%,
        #a79eeb 22%,
        #5ce1e6 100%
      );
      overflow: hidden;
    "
  >
    <div
      class="row flex flex-center"
      style="width: 100vw; height: 100vh; display: flex"
    >
      <q-card-section style="width: 35%; color: #ffffff; height: 700px">
        <div class="text-h5 text-weight-regular">Welcome to BCC!</div>
        <div class="text-h3 text-weight-medium">Scan ID Here</div>
        <div class="col-12 text-center q-pt-md" style="width: 100%">
          <QrScanner />
        </div>
      </q-card-section>
      <q-card-section
        class="flex flex-center"
        style="width: 35%; height: 700px"
      >
        <div style="width: 150px">
          <q-img src="/src/assets/logo_bcc.png"> </q-img>
        </div>

        <div style="color: #ffffff">
          <div class="text-h5 text-weight-bold">TIPS ON SCANNING YOUR ID:</div>
          <ul>
            <li class="text-subtitle1 text-weight-medium">
              Ensure Clear Visibility: Make sure the QR code is clean and free
              of obstructions.
            </li>
            <li class="text-subtitle1 text-weight-medium">
              Proper Alignment: Align the ID with the scanner to ensure accurate
              scanning.
            </li>
            <li class="text-subtitle1 text-weight-medium">
              Scanner Maintenance: Regularly clean the scanner to prevent
              scanning errors.
            </li>
          </ul>
        </div>
      </q-card-section>
    </div>
  </q-page>
</template>

<script setup>
import QrScanner from "../components/qrScanner.vue"; //import the scanner
</script>
