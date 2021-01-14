import {
  dateInfo,
  month_names,
  month_names_short,
  day_names,
  day_names_short,
  day_names_short_upper,
  getFormatDate,
  getDateWithSuf,
} from '@/scripts/date';
import store from '@/store/store';
import bus from '@/scripts/bus';

const maxGapFromCurrentYear = 5;
let vm;

export default {
  data() {
    return {
      isCalendarActive: false,
      curDate: store.state.date || '',
    };
  },
  created() {
    vm = this;

    if (store.state.date == '') {
      setCurDate_calendar(new Date());
    }

    bus.$on('showTaskForm', () => {
      vm.isCalendarActive = false;
    });
  },
  beforeDestroy() {
    bus.$off('showTaskForm');
  },
  methods: {
    dayName,
    curDateInfo,
    dateCellClass,
    isToday,
    dropCalendar,
    getDateOriginalValue,
    getDateValue,
    getPrevOrNextMonthDateValue,
    goPrevYear,
    goNextYear,
    goPrevMonth,
    goNextMonth,
    goPrevDate,
    goNextDate,
    clickDate,
  },
};

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
    dayNumber: date.getDay(),
    day: day_names[date.getDay()],
    dayShort: day_names_short[date.getDay()],
    firstDayOfMonth: new Date(year, month, 1).getDay(),
    lastDateOfMonth: new Date(year, month + 1, 0).getDate(),
    lastDateOfPrevMonth: new Date(year, month, 0).getDate(),
  };

  store.commit('setDate', vm.curDate);
}

function dayName(i) {
  return day_names_short_upper[i - 1];
}

function curDateInfo() {
  return dateInfo(vm.curDate);
}

function dateCellClass(i, j) {
  const value = getDateOriginalValue(i, j);
  return value < 1
    ? 'prev-month'
    : value > vm.curDate.lastDateOfMonth
    ? 'next-month'
    : '';
}

function isToday(i, j) {
  return vm.curDate.date == getDateOriginalValue(i, j);
}

function dropCalendar() {
  vm.isCalendarActive = !vm.isCalendarActive;
  if (vm.isCalendarActive) {
    bus.$emit('showCalendar');
  }
}

function getDateOriginalValue(i, j) {
  return (i - 1) * 7 + j - vm.curDate.firstDayOfMonth;
}

function getDateValue(i, j) {
  const value = vm.getDateOriginalValue(i, j);
  return value < 1 || value > vm.curDate.lastDateOfMonth
    ? vm.getPrevOrNextMonthDateValue(value)
    : value;
}

function getPrevOrNextMonthDateValue(value) {
  return value < 1
    ? value + vm.curDate.lastDateOfPrevMonth
    : value > vm.curDate.lastDateOfMonth
    ? value - vm.curDate.lastDateOfMonth
    : '';
}

function goPrevYear() {
  if (vm.curDate.year != new Date().getFullYear() - maxGapFromCurrentYear) {
    setCurDate_calendar(getNewDate(-1, 0));
    bus.$emit('changeDate');
  }
}

function goNextYear() {
  if (vm.curDate.year != new Date().getFullYear() + maxGapFromCurrentYear) {
    setCurDate_calendar(getNewDate(1, 0));
    bus.$emit('changeDate');
  }
}

function goPrevMonth() {
  if (
    vm.curDate.year != new Date().getFullYear() - maxGapFromCurrentYear ||
    vm.curDate.month != 0
  ) {
    setCurDate_calendar(getNewDate(0, -1));
    bus.$emit('changeDate');
  }
}

function goPrevDate() {
  if (
    vm.curDate.year != new Date().getFullYear() - maxGapFromCurrentYear ||
    vm.curDate.month != 0 ||
    vm.curDate.date != 1
  ) {
    setCurDate_calendar(
      new Date(vm.curDate.year, vm.curDate.month, vm.curDate.date - 1),
    );
    bus.$emit('changeDate');
  }
}

function goNextDate() {
  if (
    vm.curDate.year != new Date().getFullYear() + maxGapFromCurrentYear ||
    vm.curDate.month != 11 ||
    vm.curDate.date != vm.curDate.lastDateOfMonth
  ) {
    setCurDate_calendar(
      new Date(vm.curDate.year, vm.curDate.month, vm.curDate.date + 1),
    );
    bus.$emit('changeDate');
  }
}

function goNextMonth() {
  if (
    vm.curDate.year != new Date().getFullYear() + maxGapFromCurrentYear ||
    vm.curDate.month != 11
  ) {
    setCurDate_calendar(getNewDate(0, 1));
    bus.$emit('changeDate');
  }
}

function getNewDate(gap_year, gap_month) {
  return new Date(vm.curDate.year + gap_year, vm.curDate.month + gap_month, 1);
}

function clickDate(i, j) {
  setCurDate_calendar(
    new Date(vm.curDate.year, vm.curDate.month, vm.getDateOriginalValue(i, j)),
  );
  bus.$emit('changeDate');
}
