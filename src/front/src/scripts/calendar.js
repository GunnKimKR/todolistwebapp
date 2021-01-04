import { month_names, month_names_short, day_names } from '@/scripts/common';

let vm;

function registerCalendarModel(model) {
  vm = model;
}

function setCurDate(date) {
  let today = date ? date : new Date();
  let month = today.getMonth();

  vm.curDate.obj = today;
  vm.curDate.yymmdd = today
    .toJSON()
    .slice(0, 10)
    .replace(/-/g, '');
  vm.curDate.year = today.getFullYear();
  vm.curDate.month = month + 1;
  vm.curDate.monthName = month_names[month];
  vm.curDate.monthNameShort = month_names_short[month];
  vm.curDate.date = today.getDate();
  vm.curDate.day = day_names[today.getDay()];
}

export { registerCalendarModel, setCurDate };
