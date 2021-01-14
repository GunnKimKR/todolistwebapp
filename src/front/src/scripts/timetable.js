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
let vm;

export default {
  created() {
    vm = this;
  },
  mixins: [FetchDataMixin],
  methods: {
    getTimeValue,
    getColSize,
    getColspan,
    isColStart,
    getTitle,
    getTime,
    getLabelClass,
  },
};

function getTimeValue(i) {
  let suf = 'AM';
  if (i > 13) i -= 12;
  if (i > 12) suf = 'PM';
  return `${i - 1}${suf}`;
}

function getColSize(i) {
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
}

function getColspan(i, j) {
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
}

function isColStart(i, j) {
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
}

function getTitle(i, j) {
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
}

function getTime(i, j) {
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
}

function getLabelClass(i, j) {
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
}
