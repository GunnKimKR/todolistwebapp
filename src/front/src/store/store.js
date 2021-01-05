import Vue from 'vue';
import Vuex from 'vuex';
import mutations from '@/store/mutations.js';
import actions from '@/store/actions.js';
import { getCookie } from '@/scripts/common';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(getCookie('user')) || '',
    popup: JSON.parse(getCookie('popup')) || '',
    date: JSON.parse(getCookie('date')) || '',
  },
  getters: {
    isLogin(state) {
      return state.user != '';
    },
  },
  mutations,
  actions,
});
