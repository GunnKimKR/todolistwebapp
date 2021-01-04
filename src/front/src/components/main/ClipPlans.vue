<template>
  <section class="task-list-container">
    <header class="task-list-header">
      <h2 class="blind">Pin tasks</h2>
    </header>
    <div class="task-list-body">
      <ul class="pin-tasks-list">
        <li class="pin-tasks-list__item">
          <a href="#popup" @click="showClipPlanDetail">
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
            <span class="pin-task-time">09:00</span>
            <span class="pin-task-text ellip">To Do List App 배포</span>
          </a>
        </li>
        <li class="pin-tasks-list__item">
          <a href="#popup" @click="showClipPlanDetail">
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
            <span class="pin-task-time">09:00</span>
            <span class="pin-task-text ellip">To Do List App 배포</span>
          </a>
        </li>
        <li class="pin-tasks-list__item">
          <a href="#popup" @click="showClipPlanDetail">
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
            <span class="pin-task-time">--:--</span>
            <span class="pin-task-text ellip">To Do List App 배포</span>
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
