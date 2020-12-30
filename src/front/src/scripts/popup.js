function popupConfirmCallback(store, popupName) {
  if (popupName == 'deleteAccount') {
    store.dispatch('fnDeleteAccount');
    store.commit('deleteLoginUser');
  }
}

export { popupConfirmCallback };
