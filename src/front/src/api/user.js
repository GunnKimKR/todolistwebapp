import { userApi } from './index';
import { msg_server_error } from '@/scripts/message';

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
      const user = {
        token: res.data.data.token,
        email: loginForm.email,
      };
      vm.$store.commit('saveLoginUser', user);
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
  let isRegistered = false;
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
  let verifyCode = null;
  await userApi
    .get('sendVerifyCode', {
      params: { email },
    })
    .then(res => {
      verifyCode = res.data.data.verifyCode;
    });
  return verifyCode;
}

export { signup, checkDuplicateEmail, login, sendVerifyCode };
