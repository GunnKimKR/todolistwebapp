<template>
  <section class="task-form-container" v-bind:class="{ active: isActive }">
    <h2 class="blind">Task form</h2>
    <button
      type="button"
      class="task-input-btn"
      role="Task input button"
      v-bind:class="{ active: isActive }"
      @click="taskFormShow"
    ></button>
    <div class="task-form__row">
      <div class="input-box">
        <input type="text" placeholder="+ Add a new task" />
      </div>
      <button type="button">OK</button>
    </div>
    <div class="task-form__row">
      <label class="checkbox-box" for="task-date">
        <input type="checkbox" id="task-date" v-model="taskDate" />
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
          v-model="taskRecurring"
          :disabled="!isDateChecked"
        />
        <div class="checkbox"></div>
        <span> Recurring </span>
      </label>
      <div
        class="task-details"
        :class="{ active: isDateChecked && isRecurringChecked }"
      >
        Every Day
      </div>
    </div>
    <div class="task-form__row">
      <label class="checkbox-box" for="task-pin">
        <input type="checkbox" id="task-pin" />
        <div class="checkbox"></div>
        Pin
      </label>
    </div>
    <div class="task-form__row">
      <label class="checkbox-box" for="task-label-color">
        <input type="checkbox" id="task-label-color" />
        <div class="checkbox"></div>
        Label Color
      </label>
      <div class="task-details">
        <div class="label-square label--green"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { dateInfo_2 } from '@/scripts/date';
import { registerTaskFormModel, timePopup } from '@/scripts/taskform';
import bus from '@/scripts/bus';

export default {
  data() {
    return {
      isActive: false,
      date: this.$store.state.date || '',
      time: '',
      taskDate: false,
      taskRecurring: false,
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
      return this.taskDate;
    },
    isRecurringChecked() {
      return this.taskRecurring;
    },
    dateInfo() {
      return dateInfo_2(this.$store.state.date);
    },
  },
  watch: {
    taskDate(nval) {
      if (!nval) this.taskRecurring = false;
    },
  },
  methods: {
    taskFormShow() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        bus.$emit('showTaskForm');
      }
    },
    clickDateInfo() {
      timePopup();
    },
  },
};
</script>

<style scoped>
@import '~styles/taskform.css';
</style>
