import { focusInputEffect, blurInputEffect } from '@/scripts/common';
import { checkDuplicateEmail, sendVerifyCode } from '@/api/user';

let vm = null;

function registerResetPasswordModel(model) {
  vm = model;
}

function inputFocusEvent(event) {
  focusInputEffect(event);
}

function inputBlurEvent(event) {
  blurInputEffect(event);
  changeInputStatus(event);
}

function changeInputStatus(event) {}

async function changeEmail() {
  vm.isEmailValid = await checkDuplicateEmail(vm.email);
}

function changeVerifyCodeInput() {
  //
}

async function sendEmail() {
  const verifyCode = await sendVerifyCode(vm.email);
  vm.verifyCode = verifyCode;
  vm.resetOrder++;
}

function checkVerifyCode() {
  if (vm.verifyCodeInput == vm.verifyCode) {
    vm.resetOrder++;
  }
}

function initAndClose() {
  vm.email = '';
  vm.verifyCodeInput = '';
  vm.verifyCode = '';
  vm.password = '';
  vm.password2 = '';
  vm.isEmailValid = false;
  vm.resetOrder = 1;
  vm.$emit('closePopup');
}

export {
  registerResetPasswordModel,
  inputFocusEvent,
  inputBlurEvent,
  changeEmail,
  changeVerifyCodeInput,
  sendEmail,
  checkVerifyCode,
  initAndClose,
};
