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
        <input type="checkbox" id="task-date" />
        <div class="checkbox"></div>
        Date
      </label>
      <div class="task-details">
        Sep 21. 2020 / 17:00 - 21:00
      </div>
    </div>
    <div class="task-form__row task-recur">
      <label class="checkbox-box" for="task-recurring">
        <input type="checkbox" id="task-recurring" />
        <div class="checkbox"></div>
        Recurring
      </label>
      <div class="task-details">
        3 Cycle
      </div>
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
    <div class="task-form__row">
      <label class="checkbox-box" for="task-pin">
        <input type="checkbox" id="task-pin" />
        <div class="checkbox"></div>
        Pin
      </label>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    taskFormShow() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
@import '~styles/taskform.css';
</style>
