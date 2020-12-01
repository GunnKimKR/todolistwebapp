const inputValidClassName = 'input-success';
const inputErrorClassName = 'input-error';
const initStatus = { isValid: true, className: '' };
const validStatus = { isValid: true, className: inputValidClassName };
const errorStatus = { isValid: false, className: inputErrorClassName };
const initMsg = 'Mandatory field';
const emailFormatIncorrectMsg = 'The format is incorrect.';
const passwordIncorrectMsg = 'Password must be at least 4 digits.';

export {
  initStatus,
  validStatus,
  errorStatus,
  initMsg,
  emailFormatIncorrectMsg,
  passwordIncorrectMsg,
};
