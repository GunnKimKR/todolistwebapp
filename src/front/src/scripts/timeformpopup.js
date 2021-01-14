import PopupContainer from '@/components/common/PopupContainer.vue';
import bus from '@/scripts/bus';
import store from '@/store/store';

let interval;
let vm;

export default {
  data() {
    return {
      time1: store.state.timeForm.time1 || '00',
      time2: store.state.timeForm.time2 || '00',
      time3: store.state.timeForm.time3 || '00',
      time4: store.state.timeForm.time4 || '00',
      isTouchEnd: false,
    };
  },
  created() {
    vm = this;
  },
  mounted() {
    addTouchEvent();
  },
  components: {
    PopupContainer,
  },
  computed: {
    isTimeValid,
    timeForm,
  },
  watch: {
    time1,
    time2,
    time3,
    time4,
  },
  methods: {
    closePopup,
    initTimeForm,
    clickOk,
    time1_up,
    time1_down,
    time2_up,
    time2_down,
    time3_up,
    time3_down,
    time4_up,
    time4_down,
    changeTime,
    finishTimeChange,
  },
};

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

function isTimeValid() {
  return `${vm.time3}${vm.time4}` >= `${vm.time1}${vm.time2}`;
}

function timeForm() {
  return {
    time1: vm.time1,
    time2: vm.time2,
    time3: vm.time3,
    time4: vm.time4,
    beginTime: `${vm.time1}${vm.time2}`,
    endTime: `${vm.time3}${vm.time4}`,
    resultString: `${vm.time1}:${vm.time2} ~ ${vm.time3}:${vm.time4}`,
  };
}

function time1(nval) {
  if (nval.toString().length == 1) vm.time1 = '0' + nval;
}

function time2(nval) {
  if (nval.toString().length == 1) vm.time2 = '0' + nval;
}

function time3(nval) {
  if (nval.toString().length == 1) vm.time3 = '0' + nval;
}

function time4(nval) {
  if (nval.toString().length == 1) vm.time4 = '0' + nval;
}

function closePopup() {
  vm.initTimeForm();
  store.commit('closePopup');
}

function initTimeForm() {
  vm.time1 = store.state.timeForm.time1 || '00';
  vm.time2 = store.state.timeForm.time2 || '00';
  vm.time3 = store.state.timeForm.time3 || '00';
  vm.time4 = store.state.timeForm.time4 || '00';
}

function clickOk() {
  bus.$emit('inputTime', vm.timeForm);
  store.commit('saveTimeForm', vm.timeForm);
  store.commit('closePopup');
}

function time1_up() {
  vm.changeTime(() => {
    if (vm.time1 < 23) vm.time1++;
  });
}

function time1_down() {
  vm.changeTime(() => {
    if (vm.time1 > 0) vm.time1--;
  });
}

function time2_up() {
  vm.changeTime(() => {
    if (vm.time2 < 51) vm.time2 = parseInt(vm.time2) + 5;
  });
}

function time2_down() {
  vm.changeTime(() => {
    if (vm.time2 > 0) vm.time2 = parseInt(vm.time2) - 5;
  });
}

function time3_up() {
  vm.changeTime(() => {
    if (vm.time3 < 23) vm.time3++;
  });
}

function time3_down() {
  vm.changeTime(() => {
    if (vm.time3 > 0) vm.time3--;
  });
}

function time4_up() {
  vm.changeTime(() => {
    if (vm.time4 < 51) vm.time4 = parseInt(vm.time4) + 5;
  });
}

function time4_down() {
  vm.changeTime(() => {
    if (vm.time4 > 0) vm.time4 = parseInt(vm.time4) - 5;
  });
}

function changeTime(fn) {
  clearInterval(interval);
  vm.isTouchEnd = false;
  fn();
  interval = setInterval(() => {
    if (!vm.isTouchEnd) {
      fn();
    }
  }, 80);
}

function finishTimeChange() {
  vm.isTouchEnd = true;
  clearInterval(interval);
}
