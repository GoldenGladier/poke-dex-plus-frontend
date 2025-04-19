<template>
  <div
    v-if="groupedStages"
    class="d-flex justify-content-center alignt-items-center evolution-chain"
    style="gap: 2rem"
  >
    <div
      v-for="(pokemons, stageOrder, index) in groupedStages"
      :key="stageOrder"
      class="d-flex flex-column align-items-center position-relative stage-column"
    >
      <h5 class="mb-3">Stage {{ stageOrder }}</h5>

      <div
        v-for="poke in pokemons"
        :key="poke.id"
        class="text-center mb-3 d-flex flex-column align-items-center"
        :class="{ current: poke.pokemonId === currentPokemonId }"
      >
        <img
          :src="poke.pokemonUrlImage"
          :alt="poke.pokemonName"
          class="evo-img mb-1"
        />
        <div class="fw-bold text-capitalize">{{ poke.pokemonName }}</div>
      </div>

      <!-- Flecha entre etapas -->
      <div
        v-if="index < Object.keys(groupedStages).length - 1"
        class="stage-arrow"
      >
        ➜
      </div>
    </div>
  </div>

  <div v-else class="text-center text-muted">No evolution chain available.</div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "EvolutionChain",
  props: {
    currentPokemonId: {
      type: Number,
      default: null,
    },
    evolutionChain: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const groupedStages = computed(() => {
      if (!props.evolutionChain || !props.evolutionChain.stages) return null;

      const groups = {};
      for (const stage of props.evolutionChain.stages) {
        if (!groups[stage.stageOrder]) groups[stage.stageOrder] = [];
        groups[stage.stageOrder].push(stage);
      }

      // Ordenar por stageOrder (por si viene desordenado)
      return Object.keys(groups)
        .sort((a, b) => a - b)
        .reduce((acc, key) => {
          acc[key] = groups[key];
          return acc;
        }, {});
    });

    return {
      groupedStages,
    };
  },
};
</script>

<style scoped>
.evo-img {
  width: 160px;
  height: 160px;
  object-fit: contain;
}

.current {
  border: 2px solid #6de1d2;
  border-radius: 10px;
  padding: 0.5rem;
  background-color: #e0fdfa;
  transition: transform 0.3s ease;
  transform: scale(1.05);
}

.stage-column {
  position: relative;
}

.stage-arrow {
  font-size: 2rem;
  color: #6de1d2;
  position: absolute;
  right: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>
