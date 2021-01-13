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
import FetchDataMixin from '@/mixins/FetchDataMixin';
import { labelColors } from '@/scripts/common';

let prevCol = 0,
  prevCol2 = 0,
  prevCol3 = 0,
  prevCol4 = 0,
  prevCol5 = 0;
let prevSectionNo = 1,
  prevSectionNo2 = 1,
  prevSectionNo3 = 1,
  prevSectionNo4 = 1,
  prevSectionNo5 = 1;

export default {
  mixins: [FetchDataMixin],
  methods: {
    getTimeValue(i) {
      let suf = 'AM';
      if (i > 13) i -= 12;
      if (i > 12) suf = 'PM';
      return `${i - 1}${suf}`;
    },
    getColSize(i) {
      let colSize = 48;
      let begin, end;
      if (this.dataList) {
        this.dataList.forEach(data => {
          if (data.sectionNo == i) {
            begin = data.beginTime.substring(0, 2);
            end = data.endTime.substring(0, 2);
            colSize -= 2 * (end - begin) - 1;
          }
        });
        return colSize;
      }
      return 0;
    },
    getColspan(i, j) {
      let colspan = 1;
      let begin, end;
      this.dataList.forEach(data => {
        if (i == data.sectionNo) {
          if (prevSectionNo != data.sectionNo) {
            prevCol = 0;
          }
          begin = data.beginTime.substring(0, 2);
          end = data.endTime.substring(0, 2);
          if (j == begin * 2 + 1 - prevCol) {
            colspan = 2 * (end - begin);
            prevCol = colspan - 1;
          }
          prevSectionNo = data.sectionNo;
        }
      });
      return colspan;
    },
    isColStart(i, j) {
      let isStart = false;
      let colspan = 1;
      let begin, end;
      this.dataList.forEach(data => {
        if (i == data.sectionNo) {
          if (prevSectionNo2 != data.sectionNo) {
            prevCol2 = 0;
          }
          begin = data.beginTime.substring(0, 2);
          end = data.endTime.substring(0, 2);
          if (j == begin * 2 + 1 - prevCol2) {
            isStart = true;
            colspan = 2 * (end - begin);
            prevCol2 = colspan - 1;
          }
          prevSectionNo2 = data.sectionNo;
        }
      });
      return isStart;
    },
    getTitle(i, j) {
      let title;
      let colspan = 1;
      let begin, end;
      this.dataList.forEach(data => {
        if (i == data.sectionNo) {
          if (prevSectionNo3 != data.sectionNo) {
            prevCol3 = 0;
          }
          begin = data.beginTime.substring(0, 2);
          end = data.endTime.substring(0, 2);
          if (j == begin * 2 + 1 - prevCol3) {
            title = data.title;
            colspan = 2 * (end - begin);
            prevCol3 = colspan - 1;
          }
          prevSectionNo3 = data.sectionNo;
        }
      });
      return title;
    },
    getTime(i, j) {
      let time;
      let colspan = 1;
      let begin1, begin2, end1, end2;
      this.dataList.forEach(data => {
        if (i == data.sectionNo) {
          if (prevSectionNo4 != data.sectionNo) {
            prevCol4 = 0;
          }
          begin1 = data.beginTime.substring(0, 2);
          begin2 = data.beginTime.substring(2, 4);
          end1 = data.endTime.substring(0, 2);
          end2 = data.endTime.substring(2, 4);
          if (j == begin1 * 2 + 1 - prevCol4) {
            time = `${begin1}:${begin2} ~ ${end1}:${end2}`;
            colspan = 2 * (end1 - begin1);
            prevCol4 = colspan - 1;
          }
          prevSectionNo4 = data.sectionNo;
        }
      });
      return time;
    },
    getLabelClass(i, j) {
      let labelClass = '';
      let colspan = 1;
      let begin, end;
      this.dataList.forEach(data => {
        if (i == data.sectionNo) {
          if (prevSectionNo5 != data.sectionNo) {
            prevCol5 = 0;
          }
          begin = data.beginTime.substring(0, 2);
          end = data.endTime.substring(0, 2);
          if (j == begin * 2 + 1 - prevCol5) {
            const labelCd = data.labelCd;
            labelClass =
              labelCd == '' ? 'label--none' : `label--${labelColors[labelCd]}`;
            colspan = 2 * (end - begin);
            prevCol5 = colspan - 1;
          }
          prevSectionNo5 = data.sectionNo;
        }
      });
      return labelClass;
    },
  },
};
</script>

<style></style>
