<template>
  <section class="api-access-log">
    <div class="api-access-log-form pt-3">
      <h2>Api Access Log</h2>
      <p>
        Here is a table displaying the access logs to the API related to
        Pokémon, showing the details of each request made.
      </p>
      <div class="my-3 p-3 bg-light border border-info rounded text-center">
        <strong>Pagination coming soon</strong> — stay tuned for easier
        navigation through logs!
      </div>
      <table class="table table-striped pokedex-screen p-0">
        <thead class="text-center">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Pokemon Name</th>
            <th scope="col">Endpoint Accessed</th>
            <th scope="col">Access Time</th>
            <th scope="col">Status Code</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <!-- Mostrar los logs obtenidos -->
          <tr v-for="log in logs" :key="log.id">
            <td scope="row">{{ log.id }}</td>
            <td>
              <div
                :class="[
                  'alert py-1 mb-0 text-center',
                  log.username === 'anonymous' ? 'alert-dark' : 'alert-success',
                ]"
              >
                {{ log.username }}
              </div>
            </td>
            <td>{{ log.pokemonName }}</td>
            <td>{{ log.endpointAccessed }}</td>
            <td>{{ new Date(log.accessTime).toLocaleString() }}</td>
            <td>{{ log.statusCode }}</td>
            <td>{{ log.action }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAccessLogs } from "@/services/apiAccessLogService.js";

const logs = ref([]);

const fetchAccessLogs = async () => {
  try {
    logs.value = await getAccessLogs();
  } catch (error) {
    console.error("Error loading access logs:", error);
  }
};

onMounted(() => {
  fetchAccessLogs();
});
</script>

<style scoped>
.api-access-log {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.api-access-log-form {
  max-width: 90%;
  margin: auto;
}

.pokedex-screen {
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 2rem;
  margin: auto;
  border: 4px inset #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 98%;
  position: relative;
  overflow: hidden;
  display: block;
}

.table th,
.table td {
  text-align: center !important;
}
.pokedex-screen th,
.pokedex-screen td {
  text-align: center !important;
  vertical-align: middle !important;
}
</style>
