import axios from "@/services/axios";

export const getPokemonWithEvolution = async (id) => {
  const response = await axios.get(`/pokedex/${id}`);
  return response.data;
};

export const getPokemonWithoutEvolution = async (id) => {
  const response = await axios.get(`/pokedex/without-evolution/${id}`);
  return response.data;
};
