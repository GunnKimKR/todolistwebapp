import { userApi } from './index';
import { msg_server_error } from '@/scripts/message';
import { initAndClose } from '@/scripts/resetpassword';

async function signup(vm, userForm) {
  await userApi
    .post('', userForm)
    .then(() => {
      login(vm, userForm);
    })
    .catch(error => {
      vm.$store.commit('openPopup', {
        name: 'message',
        message: error.response.data.error.errorMessage || msg_server_error,
      });
    });
}

async function login(vm, loginForm) {
  await userApi
    .post('login', loginForm)
    .then(res => {
      vm.$store.commit('saveLoginUser', res.data.data.user);
      vm.$router.push('/main');
    })
    .catch(error => {
      vm.$store.commit('openPopup', {
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

async function resetPassword(vm, email, password) {
  await userApi
    .put('resetPassword', {
      email,
      password,
    })
    .then(res => {
      initAndClose();
      vm.$store.commit('saveLoginUser', res.data.data.user);
      vm.$router.push('/main');
    });
}

export { signup, checkDuplicateEmail, login, sendVerifyCode, resetPassword };
