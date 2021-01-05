<template>
  <section class="calendar-container">
    <h2 class="blind">Calendar</h2>

    <div class="calendar-header-group">
      <ul
        class="calendar-header-date-wrap"
        :class="{ active: !isCalendarActive }"
      >
        <li class="calendar-date" @click="dropCalendar">
          <a href="#;" class="arrow-left">
            <i class="fas fa-chevron-left"></i>
          </a>
          <a href="#;">{{ curDateInfo }}</a>
          <a href="#;" class="arrow-right">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>

      <ul
        class="calendar-header-date-wrap"
        :class="{ active: isCalendarActive }"
      >
        <li class="calendar-year">
          <a href="#;" class="arrow-left">
            <i class="fas fa-chevron-left"></i>
          </a>
          <a href="#;">{{ curDate.year }}</a>
          <a href="#;" class="arrow-right">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
        <li class="calendar-month">
          <a href="#;" class="arrow-left">
            <i class="fas fa-chevron-left"></i>
          </a>
          <a href="#;">{{ curDate.monthName }}</a>
          <a href="#;" class="arrow-right">
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
                <div class="td-style" :class="dateCellClass(i, j)">
                  {{ getDateValue(i, j) }}
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
  curDate,
  registerCalendarModel,
  setCurDate_calendar,
  curDateInfo_calendar,
  dateCellClass_calendar,
  getDateOriginalValue_calendar,
  getDateValue_calendar,
  getPrevOrNextMonthDateValue_calendar,
} from '@/scripts/calendar';

export default {
  data() {
    return {
      isCalendarActive: false,
      curDate,
    };
  },
  created() {
    registerCalendarModel(this);
    setCurDate_calendar();
  },
  computed: {
    curDateInfo() {
      return curDateInfo_calendar();
    },
    dateCellClass() {
      return (i, j) => {
        return dateCellClass_calendar(i, j);
      };
    },
  },
  methods: {
    dropCalendar() {
      this.isCalendarActive = !this.isCalendarActive;
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
  },
};
</script>

<style scoped>
@import '~styles/calendar.css';
</style>
