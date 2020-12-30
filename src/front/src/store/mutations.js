import { popupConfirmCallback } from '@/scripts/popup';

export default {
  saveLoginUser(state, user) {
    state.user = user;
    document.cookie = 'user=' + JSON.stringify(user);
  },
  deleteLoginUser(state) {
    state.user = '';
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  },
  openPopup(state, popup) {
    state.popup = popup;
    document.cookie = 'popup=' + JSON.stringify(popup);
    location.href = '#popup';
  },
  closePopup(state) {
    location.href = '#';
  },
  popupConfirm(state, popupName) {
    document.cookie = 'popup=' + JSON.stringify(state.popup);
    popupConfirmCallback(this, popupName);
  },
};
