import { userApi } from './index';
import { signupSuccess } from '@/scripts/signup';
import { msg_server_error } from '@/scripts/message';
import { saveUserToCookie } from '@/scripts/common';

async function signup(vm, userForm) {
  return await userApi
    .post('', userForm)
    .then(() => {
      signupSuccess();
    })
    .catch(error => {
      const contents =
        error.response.data.error.errorMessage || msg_server_error;
      vm.$store.commit('openPopup', { contents });
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

async function login(vm, loginForm) {
  await userApi
    .post('login', loginForm)
    .then(res => {
      const user = {
        token: res.data.data.token,
        email: loginForm.email,
      };
      saveUserToCookie(user);
      vm.$store.dispatch('saveUser', user);
    })
    .catch(error => {
      const title = error.response.data.error.errorMessage || msg_server_error;
      vm.$store.commit('openPopup', { title });
    });
}

export { signup, checkDuplicateEmail, login };
