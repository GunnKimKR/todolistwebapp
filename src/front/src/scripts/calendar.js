import {
  month_names,
  month_names_short,
  day_names,
  getFormatDate,
  getDateWithSuf,
} from '@/scripts/date';

import store from '@/store/store';

const maxGapFromCurrentYear = 5;

let vm;

function registerCalendarModel(model) {
  vm = model;
}

function setCurDate_calendar(date) {
  let year = date.getFullYear();
  let month = date.getMonth();

  vm.curDate = {
    yyyymmdd: getFormatDate(date),
    year,
    month,
    monthName: month_names[month],
    monthNameShort: month_names_short[month],
    date: date.getDate(),
    dateWithSuf: getDateWithSuf(date.getDate()),
    day: day_names[date.getDay()],
    firstDayOfMonth: new Date(year, month, 1).getDay(),
    lastDateOfMonth: new Date(year, month + 1, 0).getDate(),
    lastDateOfPrevMonth: new Date(year, month, 0).getDate(),
  };

  store.commit('setDate', vm.curDate);
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
  return value < 1
    ? value + vm.curDate.lastDateOfPrevMonth
    : value > vm.curDate.lastDateOfMonth
    ? value - vm.curDate.lastDateOfMonth
    : '';
}

function goPrevYear_calendar() {
  if (vm.curDate.year != new Date().getFullYear() - maxGapFromCurrentYear) {
    setCurDate_calendar(getNewDate(-1, 0));
  }
}

function goNextYear_calendar() {
  if (vm.curDate.year != new Date().getFullYear() + maxGapFromCurrentYear) {
    setCurDate_calendar(getNewDate(1, 0));
  }
}

function goPrevMonth_calendar() {
  if (
    vm.curDate.year != new Date().getFullYear() - maxGapFromCurrentYear ||
    vm.curDate.month != 0
  ) {
    setCurDate_calendar(getNewDate(0, -1));
  }
}

function goPrevDate_calendar() {
  if (
    vm.curDate.year != new Date().getFullYear() - maxGapFromCurrentYear ||
    vm.curDate.month != 0 ||
    vm.curDate.date != 1
  ) {
    setCurDate_calendar(
      new Date(vm.curDate.year, vm.curDate.month, vm.curDate.date - 1),
    );
  }
}

function goNextDate_calendar() {
  if (
    vm.curDate.year != new Date().getFullYear() + maxGapFromCurrentYear ||
    vm.curDate.month != 11 ||
    vm.curDate.date != vm.curDate.lastDateOfMonth
  ) {
    setCurDate_calendar(
      new Date(vm.curDate.year, vm.curDate.month, vm.curDate.date + 1),
    );
  }
}

function goNextMonth_calendar() {
  if (
    vm.curDate.year != new Date().getFullYear() + maxGapFromCurrentYear ||
    vm.curDate.month != 11
  ) {
    setCurDate_calendar(getNewDate(0, 1));
  }
}

function getNewDate(gap_year, gap_month) {
  return new Date(vm.curDate.year + gap_year, vm.curDate.month + gap_month, 1);
}

function changeCurDate_calendar(i, j) {
  setCurDate_calendar(
    new Date(vm.curDate.year, vm.curDate.month, vm.getDateOriginalValue(i, j)),
  );
}

export {
  registerCalendarModel,
  setCurDate_calendar,
  dateCellClass_calendar,
  getDateOriginalValue_calendar,
  getDateValue_calendar,
  getPrevOrNextMonthDateValue_calendar,
  goPrevYear_calendar,
  goNextYear_calendar,
  goPrevMonth_calendar,
  goNextMonth_calendar,
  goPrevDate_calendar,
  goNextDate_calendar,
  changeCurDate_calendar,
};
