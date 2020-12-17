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
      name: '',
      message: '',
    },
  },
  getters: {
    isLogin(state) {
      return state.user.token != '';
    },
  },
  mutations: {
    saveUser(state, user) {
      state.user.token = user.token;
      state.user.email = user.email;
    },
    openPopup(state, popup) {
      state.popup.name = popup.name || '';
      state.popup.message = popup.message || '';
      location.href = '#popup';
    },
    initPopup(state) {
      console.log(111);
      state.popup.name = '';
      state.popup.message = '';
    },
  },
});
