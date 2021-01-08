let vm;

function registerTimeFormModel(model) {
  vm = model;
}

function addTouchEvent() {
  vm.$refs.time1UpBtn.addEventListener('touchstart', vm.time1_up);
  vm.$refs.time1UpBtn.addEventListener('touchend', vm.finishTimeChange);
  vm.$refs.time1DownBtn.addEventListener('touchstart', vm.time1_down);
  vm.$refs.time1DownBtn.addEventListener('touchend', vm.finishTimeChange);

  vm.$refs.time2UpBtn.addEventListener('touchstart', vm.time2_up);
  vm.$refs.time2UpBtn.addEventListener('touchend', vm.finishTimeChange);
  vm.$refs.time2DownBtn.addEventListener('touchstart', vm.time2_down);
  vm.$refs.time2DownBtn.addEventListener('touchend', vm.finishTimeChange);

  vm.$refs.time3UpBtn.addEventListener('touchstart', vm.time3_up);
  vm.$refs.time3UpBtn.addEventListener('touchend', vm.finishTimeChange);
  vm.$refs.time3DownBtn.addEventListener('touchstart', vm.time3_down);
  vm.$refs.time3DownBtn.addEventListener('touchend', vm.finishTimeChange);

  vm.$refs.time4UpBtn.addEventListener('touchstart', vm.time4_up);
  vm.$refs.time4UpBtn.addEventListener('touchend', vm.finishTimeChange);
  vm.$refs.time4DownBtn.addEventListener('touchstart', vm.time4_down);
  vm.$refs.time4DownBtn.addEventListener('touchend', vm.finishTimeChange);
}

export { registerTimeFormModel, addTouchEvent };
