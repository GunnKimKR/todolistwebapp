import { login } from '@/api/user';
import { focusInputEffect, blurInputEffect } from '@/scripts/common.js';
import store from '@/store/store';

let vm;

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  created() {
    vm = this;
  },
  props: ['activeClass'],
  computed: {
    loginForm() {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
  methods: {
    focusInput,
    blurInput,
    loginFormSubmit,
    resetPasswordPopup,
  },
};

function focusInput(event) {
  focusInputEffect(event);
}

function blurInput(event) {
  blurInputEffect(event);
}

async function loginFormSubmit() {
  if (validateLoginForm()) {
    await login(vm.loginForm);
  }
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

function resetPasswordPopup() {
  store.commit('openPopup', {
    name: 'resetPassword',
  });
}
