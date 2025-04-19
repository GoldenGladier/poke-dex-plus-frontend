<template>
  <section class="pokedex">
    <Searcher v-model="pokemonQuery" @onSearch="searchPokemon" />
    <PokemonBasicInfo :pokemon="selectedPokemon" />
  </section>
</template>

<style scoped>
.pokedex {
  background-color: #f75a5a;
  border: 4px solid #222;
  border-radius: 20px;
  padding: 2rem;
  padding-top: 4.5rem;
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
import { ref } from "vue";

const pokemonQuery = ref("");
const selectedPokemon = ref({});

const searchPokemon = (query) => {
  console.log("Searching for:", query);
  // Aquí iría la lógica para consultar la API o navegar a otro componente

  selectedPokemon.value = {
    id: 25,
    name: "pikachu",
    height: 4,
    weight: 60,
    urlImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    baseExperience: 112,
    evolutionChain: {
      id: 10,
    },
  };
};
</script>
