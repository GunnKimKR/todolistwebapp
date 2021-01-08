<template>
  <PopupContainer>
    <strong slot="header">
      Input Begin / End Time
    </strong>

    <div slot="body" class="task-popup-form__row time">
      <div class="input-box-wrap">
        <div class="input-box active">
          <label class="input-placeholder">hh</label>
          <input
            type="number"
            min="0"
            max="23"
            onkeydown="return false"
            v-model="time[0]"
          />
        </div>
        :
        <div class="input-box active">
          <label class="input-placeholder">mm</label>
          <input
            type="number"
            min="0"
            max="55"
            step="5"
            onkeydown="return false"
            v-model="time[1]"
          />
        </div>
      </div>
      ~
      <div class="input-box-wrap">
        <div class="input-box active">
          <label class="input-placeholder">hh</label>
          <input
            type="number"
            min="0"
            max="23"
            onkeydown="return false"
            v-model="time[2]"
          />
        </div>
        :
        <div class="input-box active">
          <label class="input-placeholder">mm</label>
          <input
            type="number"
            min="0"
            max="55"
            step="5"
            onkeydown="return false"
            v-model="time[3]"
          />
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

export default {
  data() {
    return {
      time: ['00', '00', '00', '00'],
    };
  },
  components: {
    PopupContainer,
  },
  computed: {
    isTimeValid() {
      return this.time[2] + this.time[3] >= this.time[0] + this.time[1];
    },
    timeResult() {
      return {
        beginTime: this.time[0] + this.time[1],
        endTime: this.time[2] + this.time[3],
        resultString: `${this.time[0]}:${this.time[1]} ~ ${this.time[2]}:${this.time[3]}`,
      };
    },
  },
  watch: {
    time(nval) {
      nval.forEach((value, i) => {
        if (value.length == 1) {
          this.time[i] = '0' + value;
        }
      });
    },
  },
  methods: {
    closePopup() {
      this.$store.commit('closePopup');
    },
    clickOk() {
      bus.$emit('inputTime', this.timeResult);
      this.$store.commit('closePopup');
    },
  },
};
</script>

<style scoped>
@import '~styles/taskformpopup.css';
</style>
