function focusInputEffect(event) {
  event.target.parentNode.classList.add('active');
}

function blurInputEffect(event) {
  if (!event.target.value) {
    event.target.parentNode.classList.remove('active');
  }
}

function isEmailFormatValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isPasswordFormatValid(passsword) {
  return passsword.length > 3;
}

function saveUserToCookie(user) {
  document.cookie = `token=${user.token}`;
  document.cookie = `email=${user.email}`;
}

function getToken() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getEmail() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)email\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

export {
  focusInputEffect,
  blurInputEffect,
  isEmailFormatValid,
  isPasswordFormatValid,
  saveUserToCookie,
  getToken,
  getEmail,
};
