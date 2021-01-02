import Vue from 'vue';
import Vuex from 'vuex';
import mutations from '@/store/mutations.js';
import { getCookie } from '@/scripts/common';
import { deleteAccount, getOauthUser } from '@/api/user';
import { fetchList } from '@/api/todo';

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
  mutations,
  actions: {
    fnDeleteAccount() {
      deleteAccount(this.state.user.userId);
    },
    fnGetOauthUser(state, userId) {
      getOauthUser(userId);
    },
    fnFetchList(state, param) {
      fetchList(param);
    },
  },
});
