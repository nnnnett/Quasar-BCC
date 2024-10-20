<template>
  <div class="q-pa-md q-pt-xl">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="amber"
      padding
      arrows
      class="cont-carousel"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit q-pt-xl" style="justify-content: space-evenly">
          <div
            style="border: 1px solid black; align-items: center"
            class="flex column"
          >
            <q-img
              class="rounded-circle"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />

            <q-card-section> Roderick G. Valenzuela </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
            <q-card-section> Michelle P. Mallen </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-card-section> Christopher R. Bantugan </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
            <q-card-section> Christopher R. Bantugan </q-card-section>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit q-pt-xl" style="justify-content: space-evenly">
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />

            <q-card-section> Roderick G. Valenzuela </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
            <q-card-section> Michelle P. Mallen </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-card-section> Christopher R. Bantugan </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
            <q-card-section> Christopher R. Bantugan </q-card-section>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style lang="sass" scoped>
.rounded-circle
  border-radius: 100%
  width: 150px
  height: 150px
  object-fit: cover

.cont-carousel
  height:300px
  background-color: transparent
</style>

<script setup>
import { ref } from "vue";

const slide = ref(1);
</script>
