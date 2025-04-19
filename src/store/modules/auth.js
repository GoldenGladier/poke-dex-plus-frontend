const state = {
  token: localStorage.getItem("token") || null,
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

const actions = {
  saveToken({ commit }, token) {
    localStorage.setItem("token", token);
    commit("SET_TOKEN", token);
  },
  logout({ commit }) {
    localStorage.removeItem("token");
    commit("SET_TOKEN", null);
  },
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  getToken: (state) => state.token,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
