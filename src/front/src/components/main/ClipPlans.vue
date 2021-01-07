<template>
  <section class="task-list-container">
    <header class="task-list-header">
      <h2 class="blind">Pin tasks</h2>
    </header>
    <div class="task-list-body">
      <ul class="todo-list">
        <li class="todo-list__item">
          <a href="#popup" @click="showClipPlanDetail">
            <div class="label-square label--navy"></div>
            <div class="todo-list__item__text ellip">
              To Do List Webapp Project
              <span class="todo-list__item__time">09:00 ~ 12:00</span>
            </div>
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
          </a>
        </li>
        <li class="todo-list__item">
          <a href="#popup" @click="showClipPlanDetail">
            <label class="checkbox-box--label">
              <input type="checkbox" />
              <div class="checkbox label--orange"></div>
            </label>
            <div class="todo-list__item__text ellip">
              To Do List Webapp Project
            </div>
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
          </a>
        </li>
        <li class="todo-list__item">
          <a href="#popup" @click="showClipPlanDetail">
            <label class="checkbox-box--label">
              <input type="checkbox" />
              <div class="checkbox label--purple"></div>
            </label>
            <div class="todo-list__item__text ellip">
              To Do List Webapp Project
            </div>
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    showClipPlanDetail() {
      this.$store.commit('openPopup', {
        name: 'clipPlanDetail',
      });
    },
  },
};
</script>

<style></style>
