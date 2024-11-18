<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-12 text-center q-pt-md">
        <QrScanner />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import QrScanner from "../components/qrScanner.vue"; //import the scanner
</script>
