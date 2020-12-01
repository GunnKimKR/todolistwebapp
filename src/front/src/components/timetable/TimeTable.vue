<template>
  <section class="timetable-container">
    <h2 class="blind">타임테이블</h2>
    <strong>Monday. 15</strong>
    <table class="table-timetable">
      <tr>
        <th scope="row">
          <div class="th-cell">4</div>
        </th>
        <td>
          <div class="td-cell">
            <span class="time-plan label--orange" data-time="0030"
              >기상 후 스트레칭 기상 후 스트레칭</span
            >
            <span class="time-plan label--skyblue" data-time="0030"
              >아침 식사 및 세면</span
            >
          </div>
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">
          <div class="th-cell">5</div>
        </th>
        <td rowspan="2">
          <div class="td-cell">
            <span class="time-plan label--orange" data-time="0130"
              >영어 학원 이동</span
            >
            <span class="time-plan label--darkgreen" data-time="0030"
              >수업 준비</span
            >
          </div>
        </td>
        <td rowspan="2">
          <div class="td-cell">
            <span class="time-plan label--skyblue" data-time="0130"
              >텝스 인강</span
            >
          </div>
        </td>
        <td rowspan="4">
          <div class="td-cell">
            <span
              class="time-plan label--yellowgreen"
              data-time="0200"
              style="top:20px"
              >엄청 바쁘다</span
            >
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <div class="th-cell">6</div>
        </th>
      </tr>
      <tr>
        <th scope="row">
          <div class="th-cell">7</div>
        </th>
        <td>
          <div class="td-cell">
            <span class="time-plan label--tomato" data-time="0100"
              >영어 수업</span
            >
          </div>
        </td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">
          <div class="th-cell">8</div>
        </th>
        <td>
          <div class="td-cell"></div>
        </td>
        <td>
          <div class="td-cell"></div>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <div class="th-cell">9</div>
        </th>
        <td>
          <div class="td-cell"></div>
        </td>
        <td>
          <div class="td-cell"></div>
        </td>
        <td>
          <div class="td-cell"></div>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import '~styles/timetable.css';
</style>
