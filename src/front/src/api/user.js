import { instance } from './index';

const defaultErrorMessage = 'Internal Server Error';

function signup(userForm, vm) {
  return instance
    .post('/api/user', userForm)
    .then(() => {
      vm.initData();
      vm.openSignupSuccessModal();
    })
    .catch(error => {
      const errorMessage = error.response.data.error.errorMessage;
      vm.$store.commit('openPopup', errorMessage || defaultErrorMessage);
    });
}

export { signup };
