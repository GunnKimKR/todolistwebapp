import store from '@/store/store';
import { labelClass } from '@/scripts/common';
import FetchDataMixin from '@/mixins/FetchDataMixin';

let vm;

export default {
  created() {
    vm = this;
  },
  mixins: [FetchDataMixin],
  methods: {
    showClipPlanDetail,
    timeStr,
    isTimeExist,
    labelClass,
  },
};

function showClipPlanDetail() {
  store.commit('openPopup', {
    name: 'clipPlanDetail',
  });
}

function timeStr(index) {
  const beginTime = vm.dataList[index].beginTime;
  const endTime = vm.dataList[index].endTime;
  return `${beginTime.substring(0, 2)}:${beginTime.substring(2, 4)} ~ 
    ${endTime.substring(0, 2)}:${endTime.substring(2, 4)}`;
}

function isTimeExist(index) {
  const beginTime = vm.dataList[index].beginTime;
  const endTime = vm.dataList[index].endTime;
  return beginTime && endTime && parseInt(beginTime) + parseInt(endTime) > 0;
}
