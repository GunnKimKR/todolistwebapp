import Vue from 'vue';
import Vuex from 'vuex';
import { getToken, getEmail } from '@/scripts/common';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken() || '',
    email: getEmail() || '',

    popup: {
      title: '',
      contents: '',
    },
  },
  getters: {
    isLogin(state) {
      return state.token;
    },
  },
  mutations: {
    openPopup(state, message) {
      state.popup.title = message.title || 'Error';
      state.popup.contents = message.contents;
      location.href = '#commonPopup';
    },
  },
  actions: {},
  modules: {},
});
