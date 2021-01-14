<template>
  <section class="task-list-container">
    <h2 class="blind">타임테이블</h2>
    <div class="task-list-body timetable">
      <table class="table-timetable">
        <colgroup>
          <col v-for="i in 24" :key="i" span="2" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="i in 24" :key="i" colspan="2">
              <div class="th-cell">
                <div class="th-cell-inner">{{ getTimeValue(i) }}</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr-empty">
            <td v-for="j in 48" :key="j">
              <div class="td-cell"></div>
            </td>
          </tr>
          <tr v-for="i in 3" :key="i">
            <td v-for="j in getColSize(i)" :key="j" :colspan="getColspan(i, j)">
              <div class="td-cell">
                <a
                  v-if="isColStart(i, j)"
                  href="#;"
                  class="task-box"
                  :class="getLabelClass(i, j)"
                >
                  <span class="task-title ellip">
                    {{ getTitle(i, j) }}
                  </span>
                  <span class="task-time">
                    {{ getTime(i, j) }}
                  </span>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
  </section>
</template>

<script>
import timetable from '@/scripts/timetable';
export default timetable;
</script>
