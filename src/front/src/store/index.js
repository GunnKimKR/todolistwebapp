import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: '',
  },
  mutations: {
    openPopup(state, message) {
      state.message = message;
      location.href = '#commonPopup';
    },
  },
  actions: {},
  modules: {},
});
