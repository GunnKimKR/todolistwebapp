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
    saveLoginUser(state, user) {
      state.user = {
        token: user.token,
        email: user.email,
      };
    },
    deleteLoginUser(state) {
      state.user = {
        token: '',
        email: '',
      };
    },
    openPopup(state, popup) {
      state.popup = {
        name: popup.name || '',
        message: popup.message || '',
      };
      location.href = '#popup';
    },
    initPopup(state) {
      state.popup = {
        name: '',
        message: '',
      };
    },
  },
});
