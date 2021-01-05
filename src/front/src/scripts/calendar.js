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

let curDate = {
  obj: '',
  yymmdd: '',
  year: '',
  month: '',
  monthName: '',
  monthNameShort: '',
  date: '',
  day: '',
  firstDayOfMonth: '',
  lastDateOfMonth: '',
  lastDateOfPrevMonth: '',
};

let vm;

function registerCalendarModel(model) {
  vm = model;
}

function setCurDate_calendar(date) {
  let today = date ? date : new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  vm.curDate = {
    obj: today,
    yymmdd: today
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, ''),
    year,
    month,
    monthName: month_names[month],
    monthNameShort: month_names_short[month],
    date: today.getDate(),
    day: day_names[today.getDay()],
    firstDayOfMonth: new Date(year, month, 1).getDay(),
    lastDateOfMonth: new Date(year, month + 1, 0).getDate(),
    lastDateOfPrevMonth: new Date(year, month, 0).getDate(),
  };
}

function curDateInfo_calendar() {
  return `${vm.curDate.year} ${vm.curDate.monthNameShort} ${vm.curDate.date} (${vm.curDate.day})`;
}

function dateCellClass_calendar(i, j) {
  const getDateOriginalValue = vm.getDateOriginalValue(i, j);
  return getDateOriginalValue < 1
    ? 'prev-month'
    : getDateOriginalValue > vm.curDate.lastDateOfMonth
    ? 'next-month'
    : '';
}

function getDateOriginalValue_calendar(i, j) {
  return (i - 1) * 7 + j - vm.curDate.firstDayOfMonth;
}

function getDateValue_calendar(i, j) {
  const value = vm.getDateOriginalValue(i, j);
  return value < 1 || value > vm.curDate.lastDateOfMonth
    ? vm.getPrevOrNextMonthDateValue(value)
    : value;
}

function getPrevOrNextMonthDateValue_calendar(value) {
  let result;
  if (value < 1) {
    result = value + vm.curDate.lastDateOfPrevMonth;
  } else if (value > vm.curDate.lastDateOfMonth) {
    result = value - vm.curDate.lastDateOfMonth;
  }
  return result;
}

export {
  curDate,
  registerCalendarModel,
  setCurDate_calendar,
  curDateInfo_calendar,
  dateCellClass_calendar,
  getDateOriginalValue_calendar,
  getDateValue_calendar,
  getPrevOrNextMonthDateValue_calendar,
};
