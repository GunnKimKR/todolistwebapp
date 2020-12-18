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

function getCookie(name) {
  var results = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  if (results) return unescape(results[2]);
  else return null;
}

export {
  focusInputEffect,
  blurInputEffect,
  isEmailFormatValid,
  isPasswordFormatValid,
  getCookie,
};
