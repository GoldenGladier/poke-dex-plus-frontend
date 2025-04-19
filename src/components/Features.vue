<template>
  <section class="features">
    <h1>🔍 What can you do?</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 mb-3">
          <div class="card">
            <h2>🔢 Enter any Pokémon ID to view essential data like:</h2>
            <p>Name, height, weight, Base experience, photo</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 mb-3">
          <div class="card">
            <h2>🙋‍♂️ Not registered? No worries!</h2>
            <p>You can still explore all base information.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 mb-3">
          <div class="card">
            <h2>🔐 Registered users get exclusive access to:</h2>
            <p class="mb-0">🧬 Full evolution chains</p>
            <p class="mb-0">🌐 Cross-generation data (coming soon!)</p>
            <p class="mb-0">
              📌 Save favorites to your personal Pokédex+ (coming soon!)
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 mb-3">
          <div class="card">
            <h2>🎮 Ready to start your journey?</h2>
            <p>
              Click on
              <span class="btn btn-warning btn-custom">Explore</span> and start
              discovering!
            </p>
            <p v-if="!isAuthenticated">
              Want more features?
              <span class="btn btn-success btn-custom">Sign up</span> and evolve
              your experience!
            </p>
            <p v-else>
              Since you're already a trainer 😎, you can view each Pokémon's evolution chains 🧬!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);
</script>

<style scoped>
.features {
  background: var(--custom-secundary-background-color);
  padding-bottom: 2rem;
}

.card {
  height: 100%;
}

.btn-custom {
  font-size: 1.5rem;
  padding: 0 1rem;
}
</style>
