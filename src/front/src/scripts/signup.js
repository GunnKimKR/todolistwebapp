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

const initError = {
  usernameMsg: msg_mandatory_field,
  emailMsg: msg_mandatory_field,
  passwordMsg: msg_mandatory_field,
};

let vm;
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

function changeInputStatus(event) {
  const blurWithErrorStaus = {
    ...errorStatus,
    activeClass: '',
  };

  if (!event.target.value) {
    const id = event.target.getAttribute('id');
    if (id == usernameId) {
      vm.usernameStatus = blurWithErrorStaus;
    } else if (id == emailId) {
      vm.emailStatus = blurWithErrorStaus;
    } else if (id == passwordId) {
      vm.passwordStatus = blurWithErrorStaus;
    }
  } else {
    if (event.target.value && event.target.getAttribute('id') == emailId) {
      const email = event.target.value;
      checkEmailRegistered(email);
    }
  }
}

function changeUsername() {
  vm.usernameStatus = isUsernameValid(vm.username) ? validStatus : errorStatus;
}

function isUsernameValid(username) {
  return username;
}

function changeEmail() {
  const email = vm.email;
  vm.emailStatus = isEmailValid(email) ? validStatus : errorStatus;
  if (!email) {
    vm.error.emailMsg = msg_mandatory_field;
  } else if (!isEmailFormatValid(email)) {
    vm.error.emailMsg = msg_email_format_incorrect;
  } else if (checkEmailRegistered(email)) {
    vm.error.emailMsg = msg_email_already_registered;
  } else {
    vm.error.emailMsg = '';
  }
}

function isEmailValid(email) {
  return email && isEmailFormatValid(email) && !isEmailRegistered;
}

async function checkEmailRegistered(email) {
  isEmailRegistered = await checkDuplicateEmail(email);
  if (isEmailRegistered) {
    vm.emailStatus = errorStatus;
  } else {
    vm.emailStatus = isEmailValid(email) ? validStatus : errorStatus;
  }
  return isEmailRegistered;
}

function changePassword() {
  const password = vm.password;
  vm.passwordStatus = isPasswordValid(password) ? validStatus : errorStatus;
  vm.error.passwordMsg =
    password && !isPasswordFormatValid(password)
      ? msg_password_incorrect
      : msg_mandatory_field;
}

function isPasswordValid(password) {
  return password && isPasswordFormatValid(password);
}

async function registerUser() {
  if (validateUserForm()) {
    await signup(vm, vm.userForm);
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

export {
  initStatus,
  initError,
  changeUsername,
  changeEmail,
  changePassword,
  inputFocusEvent,
  inputBlurEvent,
  registerUser,
  registerSignupModel,
};
