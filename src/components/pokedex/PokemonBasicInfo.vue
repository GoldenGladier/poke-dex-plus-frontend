<template>
  <div class="pokedex-basic-info">
    <div class="pokedex-screen">
      <div class="pokedex-lights">
        <span class="light red"></span>
        <span class="light red"></span>
      </div>
      <div class="pokedex-screen-off pokemon-image">
        <div
          v-if="loading"
          class="d-flex justify-content-center align-items-center"
        >
          <div
            class="spinner-border"
            role="status"
            style="border-top-color: #6de1d2; animation-duration: 0.4s"
          ></div>
        </div>
        <img
          v-else-if="pokemon?.urlImage"
          :src="pokemon.urlImage"
          :alt="pokemon.name"
          class="img-pokemon-screen"
        />
      </div>
    </div>
    <div class="pokemon-details" v-if="pokemon && Object.keys(pokemon).length">
      <h2 class="pokemon-name">
        #{{ pokemon.id }} | {{ capitalize(pokemon.name) }}
      </h2>
      <div class="row info">
        <div class="col-sm-12 col-md-6">
          <p><strong>Height:</strong> {{ formatHeight(pokemon.height) }}</p>
          <p>
            <strong>Base Experience:</strong> ⭐{{ pokemon.baseExperience }}
          </p>
        </div>
        <div class="col-sm-12 col-md-6">
          <p><strong>Weight:</strong> {{ formatWeight(pokemon.weight) }}</p>
          <p v-if="pokemon.evolutionChain">
            <strong>Evolution Chain ID:</strong>
            {{ pokemon.evolutionChain?.id }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="row mt-3"
      v-if="isAuthenticated && pokemon && Object.keys(pokemon).length"
    >
      <div class="col-12">
        <button
          class="btn btn-success btn-see-evolution-chain"
          data-bs-toggle="modal"
          data-bs-target="#evolutionModal"
        >
          Evolution chain
        </button>
      </div>
    </div>

    <div
      class="modal fade"
      id="evolutionModal"
      tabindex="-1"
      aria-labelledby="evolutionModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="evolutionModalLabel">
              {{ capitalize(pokemon.name) }} evolution chain
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <EvolutionChain
              :evolutionChain="pokemon.evolutionChain || {}"
              :currentPokemonId="pokemon.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EvolutionChain from "@/components/pokedex/EvolutionChain.vue";
import { ref } from "vue";

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  isAuthenticated: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const showEvolution = ref(false);

const capitalize = (text) =>
  text ? text.charAt(0).toUpperCase() + text.slice(1) : "";

const formatHeight = (h) => (h ? `${(h / 10).toFixed(1)} m` : "N/A");
const formatWeight = (w) => (w ? `${(w / 10).toFixed(1)} kg` : "N/A");
</script>

<style scoped>
.spinner-custom {
  border-color: #6de1d2 !important;
  border-top-color: #6de1d2 !important;
}
.pokedex-basic-info {
  margin-top: 1rem;
}
.pokemon-info-card {
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f7f7;
  border: 4px solid #f75a5a;
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
}

.pokedex-screen {
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 2rem;
  margin: 0;
  border: 4px inset #ccc;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.pokedex-lights {
  position: absolute;
  top: 0;
  left: -50%;
  right: -50%;
}

.light {
  width: 10px;
  height: 10px;
  margin: 0.5rem;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid #000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.red {
  background-color: #ff4c4c;
}

.pokedex-screen-off {
  background: #222;
  min-width: 100%;
  aspect-ratio: 1 / 1;
  border: 4px inset #ccc;
}

.pokemon-image {
  flex: 1 1 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon-image img {
  width: 100%;
  /* max-width: 200px; */
  height: auto;
  background: #fff;
  padding: 0.5rem;
  box-shadow: 0 0 10px #ddd;
}

.pokemon-details {
  flex: 1 1 300px;
  padding-left: 1.5rem;

  margin-top: 1rem;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 2rem;
  border: 4px inset #ccc;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.pokemon-name {
  font-size: 2.3rem;
  color: #ffd63a;
  margin-bottom: 1rem;
}

.btn-see-evolution-chain {
  float: right;
  font-size: 1.5rem;
}

.modal-title {
  font-size: 1.5rem !important;
}
</style>
