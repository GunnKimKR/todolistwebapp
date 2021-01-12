import store from '@/store/store';
import { labelColors } from '@/scripts/common';

let vm;

function registerClipPlansModel(model) {
  vm = model;
}

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

function timeLabelClass(index) {
  const labelCd = vm.dataList[index].labelCd;
  return labelCd == '' ? 'label--none' : `label--${labelColors[labelCd]}`;
}

export {
  registerClipPlansModel,
  showClipPlanDetail,
  timeStr,
  isTimeExist,
  timeLabelClass,
};
