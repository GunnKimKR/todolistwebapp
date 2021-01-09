import { popupConfirmCallback } from '@/scripts/popup';
import router from '@/router/router';
import { clearCookie } from '@/scripts/common';

export default {
  saveLoginUser(state, user) {
    state.user = user;
    document.cookie = 'user=' + JSON.stringify(user);
  },
  deleteLoginUser(state) {
    state.user = '';
    state.popup = '';
    state.date = '';
    state.timeForm = '';
    state.recurringForm = '';
    clearCookie(['user', 'popup', 'date', 'timeForm', 'recurringForm']);
    router.push('/');
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
    popupConfirmCallback(this, popupName);
  },
  setDate(state, date) {
    state.date = date;
    document.cookie = 'date=' + JSON.stringify(date);
  },
  saveTimeForm(state, timeForm) {
    state.timeForm = timeForm;
    document.cookie = 'timeForm=' + JSON.stringify(timeForm);
  },
  saveRecurringForm(state, recurringForm) {
    state.recurringForm = recurringForm;
    document.cookie = 'recurringForm=' + JSON.stringify(recurringForm);
  },
};
