import { createStore } from "vuex";
import auth from "./modules/auth";

export default createStore({
  state: {
    mensaje: "Hola desde Vuex 😎",
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
});
