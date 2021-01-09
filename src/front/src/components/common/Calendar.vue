<template>
  <section class="calendar-container">
    <h2 class="blind">Calendar</h2>

    <div class="calendar-header-group">
      <ul
        class="calendar-header-date-wrap"
        :class="{ active: !isCalendarActive }"
      >
        <li class="calendar-date">
          <a href="#;" class="arrow-left" @click="goPrevDate">
            <i class="fas fa-chevron-left"></i>
          </a>
          <a href="#;" @click="dropCalendar">{{ curDateInfo }}</a>
          <a href="#;" class="arrow-right" @click="goNextDate">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>

      <ul
        class="calendar-header-date-wrap"
        :class="{ active: isCalendarActive }"
      >
        <li class="calendar-year">
          <a href="#;" class="arrow-left" @click="goPrevYear">
            <i class="fas fa-chevron-left"></i>
          </a>
          <a href="#;">{{ curDate.year }}</a>
          <a href="#;" class="arrow-right" @click="goNextYear">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
        <li class="calendar-month">
          <a href="#;" class="arrow-left" @click="goPrevMonth">
            <i class="fas fa-chevron-left"></i>
          </a>
          <a href="#;">{{ curDate.monthName }}</a>
          <a href="#;" class="arrow-right" @click="goNextMonth">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="calendar-body-group" :class="{ active: isCalendarActive }">
      <table class="table-calendar">
        <thead>
          <tr>
            <th scope="col">
              <div class="th-cell">SUN</div>
            </th>
            <th scope="col">
              <div class="th-cell">MON</div>
            </th>
            <th scope="col">
              <div class="th-cell">TUE</div>
            </th>
            <th scope="col">
              <div class="th-cell">WED</div>
            </th>
            <th scope="col">
              <div class="th-cell">THU</div>
            </th>
            <th scope="col">
              <div class="th-cell">FRI</div>
            </th>
            <th scope="col">
              <div class="th-cell">SAT</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 6" :key="i">
            <td v-for="j in 7" :key="j">
              <div class="td-cell">
                <div
                  class="td-style"
                  :class="[dateCellClass(i, j), { today: isToday(i, j) }]"
                >
                  <a href="#;" @click="clickDate(i, j)">
                    {{ getDateValue(i, j) }}
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        class="btn-calendar-drop active"
        @click="dropCalendar"
      ></button>
    </div>
  </section>
</template>

<script>
import {
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
} from '@/scripts/calendar';

import { dateInfo } from '@/scripts/date';
import bus from '@/scripts/bus';

export default {
  data() {
    return {
      isCalendarActive: false,
      curDate: this.$store.state.date || '',
    };
  },
  created() {
    registerCalendarModel(this);

    if (this.$store.state.date == '') {
      setCurDate_calendar(new Date());
    }

    bus.$on('showTaskForm', () => {
      this.isCalendarActive = false;
    });
  },
  beforeDestroy() {
    bus.$off('showTaskForm');
  },
  computed: {
    curDateInfo() {
      return dateInfo(this.curDate);
    },
    dateCellClass() {
      return (i, j) => {
        return dateCellClass_calendar(i, j);
      };
    },
    isToday() {
      return (i, j) => {
        return this.curDate.date == this.getDateOriginalValue(i, j);
      };
    },
  },
  methods: {
    dropCalendar() {
      this.isCalendarActive = !this.isCalendarActive;
      if (this.isCalendarActive) {
        bus.$emit('showCalendar');
      }
    },
    getDateOriginalValue(i, j) {
      return getDateOriginalValue_calendar(i, j);
    },
    getDateValue(i, j) {
      return getDateValue_calendar(i, j);
    },
    getPrevOrNextMonthDateValue(value) {
      return getPrevOrNextMonthDateValue_calendar(value);
    },
    goPrevYear() {
      this.emitDate(goPrevYear_calendar);
    },
    goNextYear() {
      this.emitDate(goNextYear_calendar);
    },
    goPrevMonth() {
      this.emitDate(goPrevMonth_calendar);
    },
    goNextMonth() {
      this.emitDate(goNextMonth_calendar);
    },
    goPrevDate() {
      this.emitDate(goPrevDate_calendar);
    },
    goNextDate() {
      this.emitDate(goNextDate_calendar);
    },
    clickDate(i, j) {
      changeCurDate_calendar(i, j);
      bus.$emit('changeDate');
    },
    emitDate(fn) {
      fn();
      bus.$emit('changeDate');
    },
  },
};
</script>

<style scoped>
@import '~styles/calendar.css';
</style>
