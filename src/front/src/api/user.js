import { userApi } from '@/api/api';
import { msg_server_error } from '@/scripts/message';
import store from '@/store/store';
import router from '@/router/router';

async function signup(userForm) {
  await userApi
    .post('', userForm)
    .then(() => {
      login(userForm);
    })
    .catch(error => {
      store.commit('openPopup', {
        name: 'message',
        message: error.response.data.error.errorMessage || msg_server_error,
      });
    });
}

async function login(loginForm) {
  await userApi
    .post('login', loginForm)
    .then(res => {
      store.commit('saveLoginUser', res.data.data.user);
      router.push('/main');
    })
    .catch(error => {
      store.commit('openPopup', {
        name: 'message',
        message: error.response.data.error.errorMessage || msg_server_error,
      });
    });
}

async function guestLogin() {
  await userApi
    .post('guestLogin')
    .then(res => {
      store.commit('saveLoginUser', res.data.data.user);
      router.push('/main');
    })
    .catch(error => {
      store.commit('openPopup', {
        name: 'message',
        message: error.response.data.error.errorMessage || msg_server_error,
      });
    });
}

async function checkDuplicateEmail(email) {
  let isRegistered;
  await userApi
    .get('duplicateEmailCount', {
      params: { email },
    })
    .then(res => {
      isRegistered = res.data.data.duplicateEmailCount > 0;
    });
  return isRegistered;
}

async function sendVerifyCode(email) {
  let verifyCode;
  await userApi
    .get('sendVerifyCode', {
      params: { email },
    })
    .then(res => {
      verifyCode = res.data.data.verifyCode;
    });
  return verifyCode;
}

async function resetPassword(email, password) {
  await userApi
    .put('resetPassword', {
      email,
      password,
    })
    .then(res => {
      store.commit('closePopup');
      store.commit('saveLoginUser', res.data.data.user);
      router.push('/main');
    });
}

async function deleteAccount(userId) {
  await userApi.delete(`/${userId}`);
}

async function getOauthUser(userId) {
  await userApi
    .get('getOauthUser', {
      params: { userId },
    })
    .then(res => {
      store.commit('saveLoginUser', res.data.data.user);
      router.push('/main');
    })
    .catch(error => {
      store.commit('openPopup', {
        name: 'message',
        message: error.response.data.error.errorMessage || msg_server_error,
      });
    });
}

export {
  signup,
  checkDuplicateEmail,
  login,
  guestLogin,
  sendVerifyCode,
  resetPassword,
  deleteAccount,
  getOauthUser,
};
