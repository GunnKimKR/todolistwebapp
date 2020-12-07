import { login } from '@/api/user';
import { msg_write_email, msg_write_password } from '@/scripts/message';

let vm = null;

function registerSigninModel(model) {
  vm = model;
}

async function loginUser() {
  if (validateLoginForm()) {
    await login(vm, vm.loginForm);
  }
}

function validateLoginForm() {
  if (!vm.email) {
    vm.$store.commit('openPopup', {
      title: msg_write_email,
    });
    return false;
  } else if (!vm.password) {
    vm.$store.commit('openPopup', {
      title: msg_write_password,
    });
    return false;
  }
  return true;
}

export { loginUser, registerSigninModel };
