import { getCurrentUser, getMyData } from "~/api/auth";

export const state = () => ({
  token: "",
  user: {}
});

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
    console.log(state.user);
  },
  CLEAR_USER(state) {
    state.user = {}
  }
};

export const actions = {
  async getCurrentUser({ commit }) {
    try {
      const user = await getCurrentUser();
      commit("SET_USER", user);
    } catch (error) {
      throw error;
    }
  }
};
