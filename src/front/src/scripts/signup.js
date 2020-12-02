import { isEmailFormatValid, isPasswordFormatValid } from '@/scripts/common';

const usernameId = 'user-name';
const emailId = 'input-join-email';
const passwordId = 'input-join-password';

const inputValidClassName = 'input-success';
const inputErrorClassName = 'input-error';

const initStatus = { isValid: true, className: '' };
const validStatus = { isValid: true, className: inputValidClassName };
const errorStatus = { isValid: false, className: inputErrorClassName };

const initMsg = 'Mandatory field';
const emailFormatIncorrectMsg = 'The format is incorrect.';
const passwordIncorrectMsg = 'Password must be at least 4 digits.';

function changeUsername(instance) {
  instance.usernameStatus = isUsernameValid(instance.username)
    ? validStatus
    : errorStatus;
}

function changeEmail(instance) {
  const email = instance.email;
  instance.emailStatus = isEmailValid(email) ? validStatus : errorStatus;
  instance.error.emailMsg =
    email && !isEmailFormatValid(email) ? emailFormatIncorrectMsg : initMsg;
}

function changePassword(instance) {
  const password = instance.password;
  instance.passwordStatus = isPasswordValid(password)
    ? validStatus
    : errorStatus;
  instance.error.passwordMsg =
    password && !isPasswordFormatValid(password)
      ? passwordIncorrectMsg
      : initMsg;
}

function changeInputStatus(instance, event) {
  if (!event.target.value) {
    const id = event.target.getAttribute('id');
    if (id == usernameId) instance.usernameStatus = errorStatus;
    else if (id == emailId) instance.emailStatus = errorStatus;
    else if (id == passwordId) instance.passwordStatus = errorStatus;
  }
}

function validateUserForm(instance) {
  if (!isUsernameValid(instance.username)) {
    changeUsername(instance);
    instance.$refs.username.focus();
    return false;
  } else if (!isEmailValid(instance.email)) {
    changeEmail(instance);
    instance.$refs.email.focus();
    return false;
  } else if (!isPasswordValid(instance.password)) {
    changePassword(instance);
    instance.$refs.password.focus();
    return false;
  }
  return true;
}

function isUsernameValid(username) {
  return username;
}

function isEmailValid(email) {
  return email && isEmailFormatValid(email);
}

function isPasswordValid(password) {
  return password && isPasswordFormatValid(password);
}

export {
  initStatus,
  validStatus,
  errorStatus,
  initMsg,
  emailFormatIncorrectMsg,
  passwordIncorrectMsg,
  changeUsername,
  changeEmail,
  changePassword,
  changeInputStatus,
  validateUserForm,
};
