<template>
  <PopupContainer>
    <strong slot="header">
      Input Begin / End Time
    </strong>

    <div slot="body" class="task-popup-form__row time">
      <div class="input-box-wrap">
        <div class="input-box active">
          <p ref="time1UpBtn"><i class="fas fa-chevron-up"></i></p>
          <input
            type="text"
            onkeydown="return false"
            readonly
            v-model="time1"
          />
          <p ref="time1DownBtn"><i class="fas fa-chevron-down"></i></p>
        </div>
        :
        <div class="input-box active">
          <p ref="time2UpBtn"><i class="fas fa-chevron-up"></i></p>
          <input
            type="text"
            onkeydown="return false"
            readonly
            v-model="time2"
          />
          <p ref="time2DownBtn"><i class="fas fa-chevron-down"></i></p>
        </div>
      </div>
      ~
      <div class="input-box-wrap">
        <div class="input-box active">
          <p ref="time3UpBtn"><i class="fas fa-chevron-up"></i></p>
          <input
            type="text"
            onkeydown="return false"
            readonly
            v-model="time3"
          />
          <p ref="time3DownBtn"><i class="fas fa-chevron-down"></i></p>
        </div>
        :
        <div class="input-box active">
          <p ref="time4UpBtn"><i class="fas fa-chevron-up"></i></p>
          <input
            type="text"
            onkeydown="return false"
            readonly
            v-model="time4"
          />
          <p ref="time4DownBtn"><i class="fas fa-chevron-down"></i></p>
        </div>
      </div>
    </div>

    <div slot="footer" class="task-popup-form__row footer">
      <button
        type="button"
        class="btn-primary"
        :disabled="!isTimeValid"
        @click="clickOk"
      >
        OK
      </button>

      <button
        type="button"
        class="btn-primary pop-btn-close"
        @click="closePopup"
      >
        CLOSE
      </button>
    </div>
  </PopupContainer>
</template>

<script>
import PopupContainer from '@/components/common/PopupContainer.vue';
import bus from '@/scripts/bus';
import { registerTimeFormModel, addTouchEvent } from '@/scripts/timeformpopup';

let interval;
let vm;

export default {
  data() {
    return {
      time1: this.$store.state.timeForm.time1 || '00',
      time2: this.$store.state.timeForm.time2 || '00',
      time3: this.$store.state.timeForm.time3 || '00',
      time4: this.$store.state.timeForm.time4 || '00',
      isTouchEnd: false,
    };
  },
  created() {
    vm = this;
    registerTimeFormModel(this);
  },
  mounted() {
    addTouchEvent();
  },
  components: {
    PopupContainer,
  },
  computed: {
    isTimeValid() {
      return `${this.time3}${this.time4}` >= `${this.time1}${this.time2}`;
    },
    timeForm() {
      return {
        time1: this.time1,
        time2: this.time2,
        time3: this.time3,
        time4: this.time4,
        beginTime: `${this.time1}${this.time2}`,
        endTime: `${this.time3}${this.time4}`,
        resultString: `${this.time1}:${this.time2} ~ ${this.time3}:${this.time4}`,
      };
    },
  },
  watch: {
    time1(nval) {
      if (nval.toString().length == 1) this.time1 = '0' + nval;
    },
    time2(nval) {
      if (nval.toString().length == 1) this.time2 = '0' + nval;
    },
    time3(nval) {
      if (nval.toString().length == 1) this.time3 = '0' + nval;
    },
    time4(nval) {
      if (nval.toString().length == 1) this.time4 = '0' + nval;
    },
  },
  methods: {
    closePopup() {
      this.initTimeForm();
      this.$store.commit('closePopup');
    },
    initTimeForm() {
      this.time1 = this.$store.state.timeForm.time1 || '00';
      this.time2 = this.$store.state.timeForm.time2 || '00';
      this.time3 = this.$store.state.timeForm.time3 || '00';
      this.time4 = this.$store.state.timeForm.time4 || '00';
    },
    clickOk() {
      bus.$emit('inputTime', this.timeForm);
      this.$store.commit('saveTimeForm', this.timeForm);
      this.$store.commit('closePopup');
    },
    time1_up() {
      this.changeTime(() => {
        if (vm.time1 < 23) vm.time1++;
      });
    },
    time1_down() {
      this.changeTime(() => {
        if (vm.time1 > 0) vm.time1--;
      });
    },
    time2_up() {
      this.changeTime(() => {
        if (vm.time2 < 51) vm.time2 = parseInt(vm.time2) + 5;
      });
    },
    time2_down() {
      this.changeTime(() => {
        if (vm.time2 > 0) vm.time2 = parseInt(vm.time2) - 5;
      });
    },
    time3_up() {
      this.changeTime(() => {
        if (vm.time3 < 23) vm.time3++;
      });
    },
    time3_down() {
      this.changeTime(() => {
        if (vm.time3 > 0) vm.time3--;
      });
    },
    time4_up() {
      this.changeTime(() => {
        if (vm.time4 < 51) vm.time4 = parseInt(vm.time4) + 5;
      });
    },
    time4_down() {
      this.changeTime(() => {
        if (vm.time4 > 0) vm.time4 = parseInt(vm.time4) - 5;
      });
    },
    changeTime(fn) {
      clearInterval(interval);
      this.isTouchEnd = false;
      fn();
      interval = setInterval(() => {
        if (!this.isTouchEnd) {
          fn();
        }
      }, 80);
    },
    finishTimeChange() {
      this.isTouchEnd = true;
      clearInterval(interval);
    },
  },
};
</script>

<style scoped>
@import '~styles/taskformpopup.css';
</style>
