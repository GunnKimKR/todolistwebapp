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

function getFormatDate(date) {
  let year = date.getFullYear();
  let month = 1 + date.getMonth();
  month = month >= 10 ? month : '0' + month;
  let day = date.getDate();
  day = day >= 10 ? day : '0' + day;
  return year + '' + month + '' + day;
}

function dateInfo(date) {
  return `${date.year} ${date.monthNameShort} ${getDateWithSuf(date.date)} (${
    date.day
  })`;
}

function dateInfo_2(date) {
  return `${date.year} ${date.monthNameShort} ${getDateWithSuf(date.date)}`;
}

function getDateWithSuf(dt) {
  const suf = dt == 1 ? 'st' : dt == 2 ? 'nd' : dt == 3 ? 'rd' : 'th';
  return dt + suf;
}

export {
  month_names,
  month_names_short,
  day_names,
  getFormatDate,
  dateInfo,
  dateInfo_2,
  getDateWithSuf,
};
