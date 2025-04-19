<template>
  <div class="pokedex-searcher">
    <div class="pokedex-screen">
      <input
        v-model="searchQuery"
        type="text"
        class="pokedex-input"
        placeholder="Enter Pokémon ID"
      />
      <button class="search-button" @click="handleSearch">Search</button>
    </div>
    <div class="pokedex-lights">
      <span class="light big blue"></span>
      <span class="light red"></span>
      <span class="light yellow"></span>
      <span class="light green"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue", "onSearch"]);

const searchQuery = ref(props.modelValue || "");

watch(searchQuery, (newVal) => {
  emit("update:modelValue", newVal);
});

const handleSearch = () => {
  emit("onSearch", searchQuery.value);
};
</script>

<style scoped>
.pokedex-screen {
  background-color: #fff;
  padding: 1rem;
  border: 4px inset #ccc;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: stretch;
}

.pokedex-input {
  text-align: center;
  padding: 0.8rem 1rem;
  /* font-size: 2rem; */
  border-radius: 8px;
  border: 2px solid #888;
  outline: none;
}

.search-button {
  background-color: #222;
  color: white;
  padding: 0.8rem 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #444;
}

.pokedex-lights {
  position: absolute;
  top: 0.7rem;
  left: 1rem;
  display: flex;
  gap: 0.6rem;
}

.light {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid #000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.light.big {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ccc;
}

.red {
  background-color: #ff4c4c;
}

.yellow {
  background-color: #ffdd57;
}

.green {
  background-color: #6de1d2;
}

.blue {
  background-color: #0171b1;
}
</style>
