import { login, guestLogin } from '@/api/user';

let vm;

function registerSigninModel(model) {
  vm = model;
}

async function loginUser() {
  if (validateLoginForm()) {
    await login(vm, vm.loginForm);
  }
}

async function guestUserLogin() {
  await guestLogin(vm);
}

function validateLoginForm() {
  if (!vm.email) {
    vm.$refs.email.focus();
    return false;
  } else if (!vm.password) {
    vm.$refs.password.focus();
    return false;
  }
  return true;
}

export { loginUser, guestUserLogin, registerSigninModel };
