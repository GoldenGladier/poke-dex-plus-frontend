<template>
<button @click="toggleLid">Abreme...</button>

  <section class="pokedex-container" :class="{ open: isOpen }">
    <div class="pokedex">
      <Searcher v-model="pokemonQuery" @onSearch="searchPokemon" />
      <PokemonBasicInfo
        :pokemon="selectedPokemon"
        :isAuthenticated="isAuthenticated"
        :loading="loading"
      />
    </div>
    <div class="pokedex-lid">
      <div class="pokedex-test">
        <div class="btn-lid" title="Open" @click="toggleLid">

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pokedex-container {
  position: relative;
  perspective: 1200px;
}
.pokedex {
  background-color: #f75a5a;
  border: 4px solid #222;
  border-radius: 20px;
  padding: 2rem;
  padding-top: 6.5rem;
  max-width: 500px;
  width: 95%;
  margin: 2rem auto;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.pokedex-lid {
  position: absolute;
  inset: 0;

  background-color: skyblue; 
  background-color: #f75a5a; 
  background-color: #222;
  border-radius: 20px;
  max-width: 500px;
  margin: auto;
  z-index: 10;

  clip-path: polygon(
    0 13%, 
    40% 13%, 
    60% 5%, 
    100% 5%, 
    100% 100%, 
    0 100%
  );

  transform-origin: right center;

  transform-style: preserve-3d;
  transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
} 

.pokedex-test {
  position: absolute;
  inset: 4px;
  background-color: #f75a5a; 
  border-radius: 17px;
  max-width: 500px;
  margin: auto;
  z-index: 10;

  clip-path: polygon(
    0 13%, 
    40.3% 13%, 
    60.3% 4.9%, 
    100% 4.9%, 
    100% 100%, 
    0 100%
  );

  transform-origin: right center;
}

.pokedex-container.open .pokedex-lid {
  transform: rotateY(180deg);
}

.btn-lid {
  position: absolute;
  /* top: 10%;
  left: 50%; */
  /* transform: translateX(-50%); */
  top: 50%;
  left: 5px;
  box-sizing: border-box;
  width: 30px;
  height: 50px;
  background-color: #f6bd20;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); */

  clip-path: polygon(0 0, 0% 100%, 100% 50%);
  cursor: pointer;
}

</style>

<script setup>
import Searcher from "@/components/Pokedex/Searcher.vue";
import PokemonBasicInfo from "@/components/pokedex/PokemonBasicInfo.vue";
import {
  getPokemonWithEvolution,
  getPokemonWithoutEvolution,
} from "@/services/pokemonService";
import { ref } from "vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isAuthenticated = computed(() => store.getters["auth/isAuthenticated"]);
const loading = ref(false);

const pokemonQuery = ref("");
const selectedPokemon = ref({});
const isOpen = ref(false)

const searchPokemon = async (query) => {
  loading.value = true;
  console.log("Searching for:", query);
  try {
    const id = parseInt(query);

    let pokemonData;

    if (isAuthenticated.value) {
      pokemonData = await getPokemonWithEvolution(id);
    } else {
      pokemonData = await getPokemonWithoutEvolution(id);
    }
    selectedPokemon.value = pokemonData;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  } finally {
    loading.value = false;
  }
};

function toggleLid() {
  isOpen.value = !isOpen.value
}
</script>
