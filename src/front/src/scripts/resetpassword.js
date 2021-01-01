import {
  focusInputEffect,
  blurInputEffect,
  isPasswordFormatValid,
} from '@/scripts/common';

import { checkDuplicateEmail, sendVerifyCode, resetPassword } from '@/api/user';
import bus from '@/scripts/bus';

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

function registerResetPasswordModel(model) {
  vm = model;
}

function inputFocusEvent(event) {
  focusInputEffect(event);
}

function inputBlurEvent(event) {
  blurInputEffect(event);
}

async function changeEmail() {
  vm.isEmailValid = await checkDuplicateEmail(vm.email);
}

async function sendEmail() {
  bus.$emit('startSpinner');
  vm.verifyCode = await sendVerifyCode(vm.email);
  bus.$emit('endSpinner');

  vm.resetOrder++;
}

function changePassword() {
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

function changePassword2() {
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

function checkVerifyCode() {
  if (vm.verifyCodeInput == vm.verifyCode) {
    vm.resetOrder++;
  } else {
    vm.isCodeValid = false;
  }
}

function initAndClose() {
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
  vm.$emit('closePopup');
}

async function resetPasswordAndSignIn() {
  await resetPassword(vm.email, vm.password);
}

export {
  registerResetPasswordModel,
  initStatus,
  inputFocusEvent,
  inputBlurEvent,
  changeEmail,
  changePassword,
  changePassword2,
  sendEmail,
  checkVerifyCode,
  initAndClose,
  resetPasswordAndSignIn,
};
