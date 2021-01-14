import PopupContainer from '@/components/common/PopupContainer.vue';
import {
  focusInputEffect,
  blurInputEffect,
  isPasswordFormatValid,
} from '@/scripts/common';
import { checkDuplicateEmail, sendVerifyCode, resetPassword } from '@/api/user';
import bus from '@/scripts/bus';
import store from '@/store/store';

const inputValidClassName = 'input-success';
const inputErrorClassName = 'input-error';
const initStatus = { isValid: true, className: '', activeClass: '' };
const validStatus = {
  isValid: true,
  className: inputValidClassName,
  activeClass: 'active',
};
const errorStatus = {
  isValid: false,
  className: inputErrorClassName,
  activeClass: 'active',
};
let vm;

export default {
  data() {
    return {
      email: '',
      verifyCodeInput: '',
      verifyCode: '',
      password: '',
      password2: '',
      isEmailValid: false,
      isCodeValid: true,
      isPasswordAllValid: false,
      passwordStatus: initStatus,
      password2Status: initStatus,
      resetOrder: 1,
    };
  },
  created() {
    vm = this;
  },
  components: {
    PopupContainer,
  },
  watch: {
    email,
    password,
    password2,
  },
  methods: {
    closePopup,
    inputFocus,
    inputBlur,
    clickSendButton,
    clickCheckButton,
    resetAndSignIn,
  },
};

function closePopup() {
  vm.email = '';
  vm.verifyCodeInput = '';
  vm.verifyCode = '';
  vm.password = '';
  vm.password2 = '';
  vm.isEmailValid = false;
  vm.isCodeValid = true;
  vm.isPasswordAllValid = false;
  vm.passwordStatus = initStatus;
  vm.password2Status = initStatus;
  vm.resetOrder = 1;
  store.commit('closePopup');
}

function inputFocus(event) {
  focusInputEffect(event);
}

function inputBlur(event) {
  blurInputEffect(event);
}

async function clickSendButton() {
  bus.$emit('startSpinner');
  vm.verifyCode = await sendVerifyCode(vm.email);
  bus.$emit('endSpinner');
  vm.resetOrder++;
}

function clickCheckButton() {
  if (vm.verifyCodeInput == vm.verifyCode) {
    vm.resetOrder++;
  } else {
    vm.isCodeValid = false;
  }
}

async function resetAndSignIn() {
  await resetPassword(vm.email, vm.password);
}

async function email() {
  vm.isEmailValid = await checkDuplicateEmail(vm.email);
}

function password() {
  vm.isPasswordAllValid = false;
  if (isPasswordValid(vm.password)) {
    vm.passwordStatus = validStatus;
    if (vm.password == vm.password2) {
      vm.password2Status = validStatus;
      vm.isPasswordAllValid = true;
    }
  } else if (vm.password) {
    vm.passwordStatus = errorStatus;
  }
}

function password2() {
  vm.isPasswordAllValid = false;
  if (isPasswordValid(vm.password2) && vm.password == vm.password2) {
    vm.password2Status = validStatus;
    vm.isPasswordAllValid = true;
  } else if (vm.password2) {
    vm.password2Status = errorStatus;
  }
}

function isPasswordValid(password) {
  return password && isPasswordFormatValid(password);
}

export { closePopup };
