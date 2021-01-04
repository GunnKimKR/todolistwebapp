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
          <a href="#;">{{ curDateFull }}</a>
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
          <tr>
            <td>
              <div class="td-cell">
                <div class="td-style prev-month">
                  30
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  1
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  2
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  3
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  4
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  5
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  6
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  7
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  8
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style task">
                  9
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style task">
                  10
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style task">
                  11
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  12
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  13
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  14
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style task today">
                  15
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style task">
                  16
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  17
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  18
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  19
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  20
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="td-cell">
                <div class="td-style task">
                  21
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  22
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style task">
                  23
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  24
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style task">
                  25
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  26
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  27
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  28
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  29
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  30
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style">
                  31
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style next-month">
                  1
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style next-month">
                  2
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style next-month">
                  3
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
import { registerCalendarModel, setCurDate } from '@/scripts/calendar';

export default {
  data() {
    return {
      isCalendarActive: false,
      curDate: {
        obj: '',
        yymmdd: '',
        year: '',
        month: '',
        monthName: '',
        monthNameShort: '',
        date: '',
        day: '',
      },
    };
  },
  created() {
    registerCalendarModel(this);
    setCurDate();
  },
  computed: {
    curDateFull() {
      return `${this.curDate.year} ${this.curDate.monthNameShort} ${this.curDate.date} (${this.curDate.day})`;
    },
  },
  methods: {
    dropCalendar() {
      this.isCalendarActive = !this.isCalendarActive;
    },
  },
};
</script>

<style scoped>
@import '~styles/calendar.css';
</style>
