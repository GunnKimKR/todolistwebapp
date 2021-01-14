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
          <a href="#;" @click="dropCalendar">{{ curDateInfo() }}</a>
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
            <th v-for="i in 7" :key="i" scope="col">
              <div class="th-cell">{{ dayName(i) }}</div>
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
import calendar from '@/scripts/calendar';
export default calendar;
</script>

<style scoped>
@import '~styles/calendar.css';
</style>
