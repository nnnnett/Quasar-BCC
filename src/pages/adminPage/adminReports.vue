<template>
  <q-page style="overflow: hidden">
    <adminNavBar />
    <!-- Main Container -->
    <div class="main-contaier q-mt-xl q-py-md q-px-md">
      <div class="q-mt-xl">
        <q-card-section
          class="text-h5 text-weight-bold q-pl-none"
          style="color: #4b4b4b"
        >
          Reports
        </q-card-section>
        <div style="color: #6c7275">Generate Reports.</div>

        <q-card-section>
          <div class="text-h6" style="color: #925fe2">User Report</div>
        </q-card-section>
        <hr />
      </div>

      <q-card-section
        class="q-py-none"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div style="width: 20%">
          <div class="q-mb-none">From Date</div>
          <div class="q-py-md">
            <q-input type="date" outlined square v-model="fromDate"> </q-input>
          </div>
        </div>
        <div style="width: 20%">
          <div class="q-mb-none">To Date</div>
          <div class="q-py-md">
            <q-input type="date" outlined square v-model="toDate"> </q-input>
          </div>
        </div>
        <div style="width: 20%">
          <div class="q-mb-none">Filter:</div>
          <q-select
            outlined
            v-model="selectedLetter"
            :options="aToZ"
            label="A-Z"
          />
        </div>
        <!-- <div>
          <q-list>
            <q-item v-for="item in filteredItems" :key="item">
              <q-item-section>{{ item }}</q-item-section>
            </q-item>
          </q-list>
        </div> -->
        <div
          style="width: 20%; border: 1px solid #925fe2; border-radius: 14px"
          class="q-mt-md"
        >
          <q-btn
            flat
            class="q-py-md"
            label="Resource Upload"
            style="width: 100%; color: #925fe2; text-transform: capitalize"
          />
        </div>
      </q-card-section>
      <!-- Reports Container -->
      <q-card
        class="q-px-xl q-py-lg"
        style="border-radius: 24px; height: 550px; overflow-y: scroll"
      >
        <!-- Reports header -->
        <q-card-section
          class="text-weight-bold"
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            background-color: #f2f7ff;
            color: #5b5b5b;
            border-radius: 14px;
          "
        >
          <div style="width: 20%">Username</div>
          <div style="width: 20%">Last Login</div>
          <div style="width: 20%">Total Login Time</div>
          <div style="width: 20%">Current Badge Earned</div>
        </q-card-section>
        <!-- Reports Content -->
        <q-card-section
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;

            color: #5b5b5b;
          "
        >
          <div style="width: 20%">Mark Kenneth</div>
          <div style="width: 20%">2024-11-26 12:34P</div>
          <div style="width: 20%">10 hours On</div>
          <div style="width: 20%">Proficient</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.main-contaier
  width: 80vw
</style>
<script setup>
import adminNavBar from "src/components/adminNavBar.vue";
import { ref, computed } from "vue";

const fromDate = ref("");
const toDate = ref("");
const selectedLetter = ref(null);
const aToZ = Array.from(Array(26), (_, i) => String.fromCharCode(65 + i));

// List of items
const items = ref([
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Honeydew",
]);

// Computed property to filter items based on selected letter
// const filteredItems = computed(() => {
//   if (!selectedLetter.value) {
//     return items.value; // Show all items if no letter is selected
//   }
//   return items.value.filter((item) => item.startsWith(selectedLetter.value));
// });
</script>
