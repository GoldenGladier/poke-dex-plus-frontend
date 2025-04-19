<template>
  <div v-if="status !== null" :class="statusClass" class="api-status">
    <div :class="`${statusClass} led`"></div>
    <span class="status-text">{{ statusText }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { checkApiStatus } from "@/services/apiStatusService";

const status = ref("UNKNOWN");
const statusClass = ref("");
const statusText = ref("Checking API status...");
let intervalId;

const updateApiStatus = async () => {
  const result = await checkApiStatus();
  status.value = result.status;
  statusClass.value = result.statusClass;
  statusText.value = result.statusText;
};

onMounted(() => {
  updateApiStatus();
  intervalId = setInterval(updateApiStatus, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.api-status {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 1000;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.api-status.up {
  color: #198754;
}

.api-status.down {
  color: #f75a5a;
}

.led {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: gray;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}

.api-status.up .led {
  background-color: #198754;
  box-shadow: 0 0 8px 4px rgba(25, 135, 84, 0.3);
}

.api-status.down .led {
  background-color: #f75a5a;
  box-shadow: 0 0 8px 4px rgba(247, 90, 90, 0.3);
}

.status-text {
  font-size: 1.2rem;
}
</style>
