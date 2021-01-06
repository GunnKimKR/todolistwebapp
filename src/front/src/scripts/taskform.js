import store from '@/store/store';

let vm;

function registerTaskFormModel(model) {
  vm = model;
}

function timePopup() {
  store.commit('openPopup', {
    name: 'timeForm',
  });
}

export { registerTaskFormModel, timePopup };
