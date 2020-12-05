import { userApi } from './index';

import { signupSuccess } from '@/scripts/signup';

const defaultErrorMessage = 'Internal Server Error';

async function signup(vm, userForm) {
  return await userApi
    .post('', userForm)
    .then(() => {
      signupSuccess();
    })
    .catch(error => {
      const errorMessage = error.response.data.error.errorMessage;
      vm.$store.commit('openPopup', errorMessage || defaultErrorMessage);
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

export { signup, checkDuplicateEmail };
