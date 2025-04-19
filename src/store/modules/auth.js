const state = {
  token: localStorage.getItem("token") || null,
  username: localStorage.getItem("username") || null,
  role: localStorage.getItem("role") || null,
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, { username, role }) {
    state.username = username;
    state.role = role;
  },
  LOGOUT(state) {
    state.token = null;
    state.username = null;
    state.role = null;
  },
};

const actions = {
  saveToken({ commit }, { token, username, role }) {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    commit("SET_TOKEN", token);
    commit("SET_USER", { username, role });
  },
  logout({ commit }) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    commit("LOGOUT");
  },
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  getToken: (state) => state.token,
  getUsername: (state) => state.username,
  getRole: (state) => state.role,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
