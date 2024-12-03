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
import { onMounted, ref, watch } from "vue";
import { QPage, QCard, QCardSection } from "quasar";
import Chart from "chart.js/auto";
import axios from "axios";

const chartCanvas = ref(null);
const memberCount = ref([]); // Ensure it's initialized as an array
const totalActiveMember = ref([]);

// Watch for changes to `memberCount` and update the chart
watch(memberCount, (newValue) => {
  if (newValue.length > 0) {
    updateChart(newValue.length); // Update the chart data after it's populated
  }
});

onMounted(() => {
  getUser();
  attendanceToday();
});

async function getUser() {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      `${process.env.api_host}/users?filter=member`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    const attendance = await axios.get(
      `${process.env.api_host}/users/attendance/getAttendanceToday`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    totalActiveMember.value = attendance.data;
    memberCount.value = response.data; // Populate memberCount with the fetched data
    console.log("dito", totalActiveMember.value, memberCount.value.length);
    updateChart(memberCount.value.length, totalActiveMember.value);
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

async function attendanceToday() {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      `${process.env.api_host}/users/attendance/getAttendanceToday`,
      {
        headers: {
          authorization: token,
        },
      }
    );
  } catch (err) {
    console.error(err);
  }
}

function updateChart(memberCountLength, activeMemberCount) {
  const ctx = chartCanvas.value.getContext("2d");

  new Chart(ctx, {
    type: "pie", // Pie chart type
    data: {
      labels: ["Active Users", "Total Members"], // Example labels
      datasets: [
        {
          label: "Pie Chart Example", // Label for the chart
          data: [totalActiveMember.value, memberCountLength], // Use the updated memberCountLength
          backgroundColor: [
            "rgb(146, 95, 226)", // RGB for #925FE2 (Purple)
            "rgb(213, 179, 251)", // RGB for #D5B3FB (Light Purple)
          ],
          borderColor: [
            "rgb(146, 95, 226)", // Border color for first segment
            "rgb(213, 179, 251)", // Border color for second segment
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
}
</script>
