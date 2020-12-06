import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '',
    contents: '',
  },
  mutations: {
    openPopup(state, message) {
      state.title = message.title || 'Error';
      state.contents = message.contents;
      location.href = '#commonPopup';
    },
  },
  actions: {},
  modules: {},
});
