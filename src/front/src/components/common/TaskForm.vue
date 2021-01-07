<template>
  <section class="task-form-container" v-bind:class="{ active: isActive }">
    <h2 class="blind">Task form</h2>
    <button
      type="button"
      class="task-input-btn"
      role="Task input button"
      v-bind:class="{ active: isActive }"
      @click="showTaskForm"
    ></button>
    <div class="task-form__row">
      <div class="input-box">
        <input type="text" placeholder="+ Add a new task" />
      </div>
      <button type="button">OK</button>
    </div>
    <div class="task-form__row">
      <label class="checkbox-box" for="task-date">
        <input type="checkbox" id="task-date" v-model="checkDate" />
        <div class="checkbox"></div>
        Date/Time
      </label>
      <div class="task-details" :class="{ active: isDateChecked }">
        <a :href="`#${isDateChecked ? 'popup' : ''}`" @click="clickDateInfo">
          {{ dateInfo }} / Not Selected
        </a>
      </div>
    </div>
    <div class="task-form__row">
      <label class="checkbox-box" for="task-recurring">
        <input
          type="checkbox"
          id="task-recurring"
          v-model="checkRecurring"
          :disabled="!isDateChecked"
        />
        <div class="checkbox"></div>
        <span> Recurring </span>
      </label>
      <div
        class="task-details"
        :class="{ active: isDateChecked && isRecurringChecked }"
      >
        <a
          :href="`#${isRecurringChecked ? 'popup' : ''}`"
          @click="clickRecurringInfo"
        >
          Not Selected
        </a>
      </div>
    </div>
    <div class="task-form__row">
      <label class="checkbox-box" for="task-pin">
        <input type="checkbox" id="task-pin" v-model="checkPin" />
        <div class="checkbox"></div>
        Pin
      </label>
      <span
        class="pin-icon pin-icon-taskform"
        :class="{ active: isPinChecked }"
      >
        <i class="fas fa-feather-alt"> </i>
      </span>
    </div>
    <div class="task-form__row">
      <label class="checkbox-box" for="task-label-color">
        <input type="checkbox" id="task-label-color" v-model="checkLabel" />
        <div class="checkbox"></div>
        Label Color
      </label>
      <div class="task-detail label-color">
        <a
          href="#"
          class="label-square label--gray"
          @click="selectLabel(0)"
        ></a>
        <a href="#" class="label-square label--red" @click="selectLabel(1)"></a>
        <a
          href="#"
          class="label-square label--orange"
          @click="selectLabel(2)"
        ></a>
        <a
          href="#"
          class="label-square label--green"
          @click="selectLabel(3)"
        ></a>
        <a
          href="#"
          class="label-square label--navy"
          @click="selectLabel(4)"
        ></a>
        <a
          href="#"
          class="label-square label--purple"
          @click="selectLabel(5)"
        ></a>
        <a
          href="#"
          class="label-square label--pink"
          @click="selectLabel(6)"
        ></a>
      </div>
    </div>
  </section>
</template>

<script>
import { dateInfo_2 } from '@/scripts/date';
import {
  registerTaskFormModel,
  timePopup,
  selectRecurringPopup,
  selectLabel_taskform,
  checkLabel_taskform,
  showTaskForm_,
} from '@/scripts/taskform';
import bus from '@/scripts/bus';

export default {
  data() {
    return {
      isActive: false,
      date: this.$store.state.date || '',
      time: '',
      checkDate: '',
      checkRecurring: '',
      checkPin: '',
      checkLabel: '',
    };
  },
  created() {
    registerTaskFormModel(this);

    bus.$on('showCalendar', () => {
      this.isActive = false;
    });
  },
  beforeDestroy() {
    bus.$off('showCalendar');
  },
  computed: {
    isDateChecked() {
      return this.checkDate;
    },
    isRecurringChecked() {
      return this.checkRecurring;
    },
    isPinChecked() {
      return this.checkPin;
    },
    dateInfo() {
      return dateInfo_2(this.$store.state.date);
    },
  },
  watch: {
    checkDate(nval) {
      if (!nval) this.checkRecurring = false;
    },
    checkLabel(nval) {
      checkLabel_taskform(nval);
    },
  },
  methods: {
    showTaskForm() {
      showTaskForm_();
    },
    clickDateInfo() {
      timePopup();
    },
    clickRecurringInfo() {
      selectRecurringPopup();
    },
    selectLabel(index) {
      selectLabel_taskform(index);
    },
  },
};
</script>

<style scoped>
@import '~styles/taskform.css';
</style>
