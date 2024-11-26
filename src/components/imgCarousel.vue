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
        <div
          class="row fit"
          style="
            justify-content: space-evenly;

            height: auto;
          "
        >
          <div style="align-items: center; display: flex" class="flex column">
            <q-img
              class="rounded-circle"
              ratio="1"
              src="/src/assets/staff/asuncion.png"
            />

            <q-card-section
              class="text-subtitle1 text-weight-medium"
              style="
                text-align: center;
                text-transform: capitalize;
                color: #333333;
              "
            >
              Sir. Lodge G Asuncion <br />EGOV-MIS DEPT HEAD</q-card-section
            >
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              ratio="1"
              src="/src/assets/staff/sanGabriel.png"
            />

            <q-card-section
              class="text-subtitle1 text-weight-medium"
              style="
                text-align: center;
                text-transform: capitalize;
                color: #333333;
              "
            >
              Ms. Michelle F San Gabriel <br />
              BCC SUPERVISING OFFICER
            </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              ratio="1"
              src="/src/assets/staff/bantugan.png"
            />

            <q-card-section
              class="text-subtitle1 text-weight-medium"
              style="
                text-align: center;
                text-transform: capitalize;
                color: #333333;
              "
            >
              Sir. Christopher R Bantugan<br />
              Mentor
            </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              ratio="1"
              src="/src/assets/staff/delaCruz.png"
            />

            <q-card-section
              class="text-subtitle1 text-weight-medium"
              style="
                text-align: center;
                text-transform: capitalize;
                color: #333333;
              "
            >
              Ms. Aimeelene Rose L Dela Cruz<br />
              Mentor
            </q-card-section>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit"
          style="justify-content: space-evenly; height: auto"
        >
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              ratio="1"
              src="/src/assets/staff/jocson.png"
            />

            <q-card-section
              class="text-subtitle1 text-weight-medium"
              style="
                text-align: center;
                text-transform: capitalize;
                color: #333333;
              "
            >
              Ms. Vilma T Jocson<br />
              Mentor
            </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              ratio="1"
              src="/src/assets/staff/mallen.png"
            />

            <q-card-section
              class="text-subtitle1 text-weight-medium"
              style="
                text-align: center;
                text-transform: capitalize;
                color: #333333;
              "
            >
              Ms. Michelle P Mallen<br />
              Mentor
            </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              ratio="1"
              src="/src/assets/staff/tumampo.png"
            />

            <q-card-section
              class="text-subtitle1 text-weight-medium"
              style="
                text-align: center;
                text-transform: capitalize;
                color: #333333;
              "
            >
              Ms. Jennelyn Q Tumampo<br />
              Mentor
            </q-card-section>
          </div>
          <div style="align-items: center" class="flex column">
            <q-img
              class="rounded-circle"
              ratio="1"
              src="/src/assets/staff/valenzuela.png"
            />

            <q-card-section
              class="text-subtitle1 text-weight-medium"
              style="
                text-align: center;
                text-transform: capitalize;
                color: #333333;
              "
            >
              Sir Roderick G Valenzuela<br />
              Mentor
            </q-card-section>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style lang="sass" scoped>
.rounded-circle
  border-radius: 100%
  width: 250px
  height: 250px
  object-fit: cover

.cont-carousel
  height:auto
  background-color: transparent
</style>

<script setup>
import { ref } from "vue";

const slide = ref(1);
</script>
