<template>
  <q-page>
    <div style="width: 300px; max-width: 100%">
      <q-card-section>
        <canvas ref="chartCanvas" height="400"></canvas>
      </q-card-section>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { QPage, QCard, QCardSection } from "quasar";
import Chart from "chart.js/auto";

const chartCanvas = ref(null);

onMounted(() => {
  const ctx = chartCanvas.value.getContext("2d");
  new Chart(ctx, {
    type: "pie", // Pie chart type
    data: {
      labels: ["Pass", "xd", "yawa"], // Example labels
      datasets: [
        {
          label: "Pie Chart Example", // Label for the chart
          data: [60, 40, 50], // Data values for each segment
          backgroundColor: [
            "rgb(146, 95, 226)", // RGB for #925FE2 (Purple)
            "rgb(213, 179, 251)", // RGB for #D5B3FB (Light Purple)
            "white",
          ],
          borderColor: [
            "rgb(146, 95, 226)", // Border color for first segment
            "rgb(213, 179, 251)", // Border color for second segment
            "white",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  });
});
</script>
