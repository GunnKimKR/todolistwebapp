const month_names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const month_names_short = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const day_names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

function findGetParameter(parameterName) {
  let result = null;
  let tmp = [];
  location.search
    .substr(1)
    .split('&')
    .forEach(function(item) {
      tmp = item.split('=');
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

export {
  month_names,
  month_names_short,
  day_names,
  focusInputEffect,
  blurInputEffect,
  isEmailFormatValid,
  isPasswordFormatValid,
  getCookie,
  findGetParameter,
};
