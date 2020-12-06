import {
  isEmailFormatValid,
  isPasswordFormatValid,
  focusInputEffect,
  blurInputEffect,
} from '@/scripts/common';

import {
  msg_mandatory_field,
  msg_email_format_incorrect,
  msg_email_already_registered,
  msg_password_incorrect,
} from '@/scripts/message';

import { checkDuplicateEmail, signup } from '@/api/user';

const usernameId = 'user-name';
const emailId = 'input-join-email';
const passwordId = 'input-join-password';

const inputValidClassName = 'input-success';
const inputErrorClassName = 'input-error';

const initStatus = { isValid: true, className: '' };
const validStatus = { isValid: true, className: inputValidClassName };
const errorStatus = { isValid: false, className: inputErrorClassName };

let vm = null;
let isEmailRegistered = false;

function registerSignupModel(model) {
  vm = model;
}

function inputFocusEvent(event) {
  focusInputEffect(event);
}

function inputBlurEvent(event) {
  blurInputEffect(event);
  changeInputStatus(event);
}

function changeUsername() {
  vm.usernameStatus = isUsernameValid(vm.username) ? validStatus : errorStatus;
}

function changeEmail() {
  const email = vm.email;
  vm.emailStatus = isEmailValid(email) ? validStatus : errorStatus;
  vm.error.emailMsg =
    email && !isEmailFormatValid(email)
      ? msg_email_format_incorrect
      : isEmailRegistered
      ? msg_email_already_registered
      : msg_mandatory_field;
}

function changePassword() {
  const password = vm.password;
  vm.passwordStatus = isPasswordValid(password) ? validStatus : errorStatus;
  vm.error.passwordMsg =
    password && !isPasswordFormatValid(password)
      ? msg_password_incorrect
      : msg_mandatory_field;
}

function changeInputStatus(event) {
  if (!event.target.value) {
    const id = event.target.getAttribute('id');
    if (id == usernameId) {
      vm.usernameStatus = errorStatus;
    } else if (id == emailId) {
      vm.emailStatus = errorStatus;
    } else if (id == passwordId) {
      vm.passwordStatus = errorStatus;
    }
  } else {
    checkEmail(event);
  }
}

function validateUserForm() {
  if (!isUsernameValid(vm.username)) {
    changeUsername();
    vm.$refs.username.focus();
    return false;
  } else if (!isEmailValid(vm.email)) {
    changeEmail();
    vm.$refs.email.focus();
    return false;
  } else if (!isPasswordValid(vm.password)) {
    changePassword();
    vm.$refs.password.focus();
    return false;
  }
  return true;
}

function isUsernameValid(username) {
  return username;
}

function isEmailValid(email) {
  return email && isEmailFormatValid(email) && !isEmailRegistered;
}

function isPasswordValid(password) {
  return password && isPasswordFormatValid(password);
}

async function checkEmail(event) {
  if (event.target.value && event.target.getAttribute('id') == emailId) {
    const email = event.target.value;
    isEmailRegistered = await checkDuplicateEmail(email);
    if (isEmailRegistered) {
      vm.emailStatus = errorStatus;
      vm.error.emailMsg = msg_email_already_registered;
    } else {
      vm.emailStatus = validStatus;
    }
  }
}

async function registerUser() {
  if (validateUserForm()) {
    await signup(vm, vm.userForm);
  }
}

function signupSuccess() {
  initUserData();
  openSignupSuccessModal();
}

function initUserData() {
  initUserForm();
  setTimeout(() => {
    initUserStatus();
  }, 100);
}

function initUserForm() {
  vm.username = '';
  vm.email = '';
  vm.password = '';
}

function initUserStatus() {
  vm.usernameStatus = initStatus;
  vm.emailStatus = initStatus;
  vm.passwordStatus = initStatus;
  inActivateInputBox();
}

function inActivateInputBox() {
  document
    .querySelectorAll('.sign-up-form .input-box')
    .forEach(node => node.classList.remove('active'));
}

function openSignupSuccessModal() {
  location.href = '#signupSuccessPopup';
}

export {
  initStatus,
  validStatus,
  errorStatus,
  changeUsername,
  changeEmail,
  changePassword,
  changeInputStatus,
  validateUserForm,
  checkEmail,
  inputFocusEvent,
  inputBlurEvent,
  registerUser,
  signupSuccess,
  registerSignupModel,
};
