import Vue from 'vue';
import Vuex from 'vuex';
import { getCookie } from '@/scripts/common';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(getCookie('user')) || '',
    popup: JSON.parse(getCookie('popup')) || '',
  },
  getters: {
    isLogin(state) {
      return state.user != '';
    },
  },
  mutations: {
    saveLoginUser(state, user) {
      state.user = { ...user };
      document.cookie = 'user=' + JSON.stringify(user);
    },
    deleteLoginUser(state) {
      state.user = '';
      document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    },
    openPopup(state, popup) {
      state.popup = { ...popup };
      document.cookie = 'popup=' + JSON.stringify(popup);
      location.href = '#popup';
    },
    closePopup(state) {
      location.href = '#';
    },
  },
});
