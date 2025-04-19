<template>
  <div class="pokedex-basic-info" v-if="pokemon">
    <div class="pokedex-screen">
      <div class="pokedex-lights">
        <span class="light red"></span>
        <span class="light red"></span>
      </div>
      <div class="pokedex-screen-off pokemon-image">
        <img
          v-if="pokemon.urlImage"
          :src="pokemon.urlImage"
          :alt="pokemon.name"
          class="img-pokemon-screen"
        />
      </div>
    </div>
    <div class="pokemon-details">
      <h2 class="pokemon-name">
        #{{ pokemon.id }} - {{ capitalize(pokemon.name) }}
      </h2>
      <ul class="info-list">
        <li><strong>Height:</strong> {{ formatHeight(pokemon.height) }}</li>
        <li><strong>Weight:</strong> {{ formatWeight(pokemon.weight) }}</li>
        <li><strong>Base Experience:</strong> {{ pokemon.baseExperience }}</li>
        <li>
          <strong>Evolution Chain ID:</strong> {{ pokemon.evolutionChain?.id }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const capitalize = (text) =>
  text ? text.charAt(0).toUpperCase() + text.slice(1) : "";

const formatHeight = (h) => (h ? `${(h / 10).toFixed(1)} m` : "N/A");
const formatWeight = (w) => (w ? `${(w / 10).toFixed(1)} kg` : "N/A");
</script>

<style scoped>
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
}

.pokemon-name {
  font-size: 1.8rem;
  color: #f75a5a;
  margin-bottom: 1rem;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
</style>
