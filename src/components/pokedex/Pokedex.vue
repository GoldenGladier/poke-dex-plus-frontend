<template>
  <section class="pokedex">
    <Searcher v-model="pokemonQuery" @onSearch="searchPokemon" />
    <PokemonBasicInfo
      :pokemon="selectedPokemon"
      :isAuthenticated="isAuthenticated"
      :loading="loading"
    />
  </section>
</template>

<style scoped>
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
</script>
