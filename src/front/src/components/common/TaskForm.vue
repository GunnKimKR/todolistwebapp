<template>
  <section class="task-form-container" :class="{ active: isActive }">
    <h2 class="blind">Task form</h2>
    <button
      type="button"
      class="task-input-btn"
      role="Task input button"
      :class="{ active: isActive }"
      @click="showTaskForm"
    ></button>
    <div class="task-form__row">
      <div class="input-box">
        <input type="text" placeholder="+ Add a new task" v-model="title" />
      </div>
      <button type="button" @click="submitTaskForm">OK</button>
    </div>
    <div class="task-form__row">
      <label class="checkbox-box" for="task-date">
        <input type="checkbox" id="task-date" v-model="checkDate" />
        <div class="checkbox"></div>
        Date / Time
      </label>
      <div class="task-details" :class="{ active: isDateChecked }">
        <a :href="`#${isDateChecked ? 'popup' : ''}`" @click="clickDateInfo">
          {{ dateInfo }} / {{ time.resultString }}
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
          {{ recurring.resultString }}
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
  setTodoForm,
  submitTodo,
} from '@/scripts/taskform';
import bus from '@/scripts/bus';

export default {
  data() {
    return {
      isActive: false,
      date: this.$store.state.date || '',
      time: {
        ...this.$store.state.timeForm,
        beginTime: this.$store.state.timeForm.beginTime || '',
        endTime: this.$store.state.timeForm.endTime || '',
        resultString:
          this.$store.state.timeForm.resultString || '00:00 ~ 00:00',
      },
      recurring: {
        ...this.$store.state.recurringForm,
        resultString:
          this.$store.state.recurringForm.resultString || 'Not Selected',
      },
      checkDate: false,
      checkRecurring: false,
      checkPin: false,
      checkLabel: false,
      title: '',
      labelCd: '',
      todoForm: {},
    };
  },
  created() {
    registerTaskFormModel(this);

    bus.$on('showCalendar', () => {
      this.isActive = false;
    });

    bus.$on('changeDate', () => {
      this.checkRecurring = false;
      this.recurring.resultString = 'Not Selected';
    });

    bus.$on('inputTime', time => {
      this.time = time;
    });

    bus.$on('decideRecurringOption', recurring => {
      this.recurring = recurring;
    });
  },
  beforeDestroy() {
    bus.$off('showCalendar');
    bus.$off('changeDate');
    bus.$off('inputTime');
    bus.$off('decideRecurringOption');
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
    isLabelChecked() {
      return this.checkLabel;
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
      this.isActive = !this.isActive;
      if (this.isActive) {
        bus.$emit('showTaskForm');
      }
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
    submitTaskForm() {
      setTodoForm();
      submitTodo();
    },
  },
};
</script>

<style scoped>
@import '~styles/taskform.css';
</style>
