import Vue from 'vue';
import Vuex from 'vuex';
import { getToken, getEmail } from '@/scripts/common';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      token: getToken() || '',
      email: getEmail() || '',
    },
    popup: {
      title: '',
      contents: '',
    },
  },
  getters: {
    isLogin(state) {
      return state.user.token != '';
    },
  },
  mutations: {
    openPopup(state, message) {
      state.popup.title = message.title || 'Error';
      state.popup.contents = message.contents;
      location.href = '#commonPopup';
    },
    setUser(state, user) {
      state.user.token = user.token;
      state.user.email = user.email;
    },
  },
  actions: {
    saveUser({ commit }, user) {
      commit('setUser', user);
    },
  },
  modules: {},
});
