<template>
  <section class="calendar-container">
    <h2 class="blind">Calendar</h2>

    <header class="calendar-header-group">
      <a href="#;" class="calendar-year">2020</a>
      <a href="#;" class="calendar-month">Sep</a>
      <ul class="calendar-date-list">
        <li class="calendar-date-list__item">
          <a href="#;">
            <i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <li class="calendar-date-list__item">
          <a href="#">14</a>
        </li>
        <li class="calendar-date-list__item today">
          <a href="#">15</a>
        </li>
        <li class="calendar-date-list__item">
          <a href="#">16</a>
        </li>
        <li class="calendar-date-list__item">
          <a href="#">17</a>
        </li>
        <li class="calendar-date-list__item">
          <a href="#">18</a>
        </li>
        <li class="calendar-date-list__item">
          <a href="#">19</a>
        </li>
        <li class="calendar-date-list__item">
          <a href="#">20</a>
        </li>
        <li class="calendar-date-list__item">
          <a href="#;">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
      <button
        type="button"
        class="btn-calendar-drop"
        :class="calendarActiveClass"
        @click="dropCalendar"
      ></button>
    </header>

    <div class="calendar-body-group" :class="calendarActiveClass">
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
                <div class="td-style tasks">
                  9
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style tasks">
                  10
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style tasks">
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
                <div class="td-style tasks today">
                  15
                </div>
              </div>
            </td>
            <td>
              <div class="td-cell">
                <div class="td-style tasks">
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
                <div class="td-style tasks">
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
                <div class="td-style tasks">
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
                <div class="td-style tasks">
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
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isCalenderActive: false,
    };
  },
  computed: {
    calendarActiveClass() {
      return this.isCalenderActive ? 'active' : null;
    },
  },
  methods: {
    dropCalendar() {
      this.isCalenderActive = !this.isCalenderActive;
    },
  },
};
</script>

<style scoped>
@import '~styles/calendar.css';
</style>
