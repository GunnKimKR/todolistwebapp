<template>
  <section class="task-list-container">
    <header class="task-list-header">
      <h2 class="blind">Pin tasks</h2>
      <strong class="task-title">Monday. 15</strong>
    </header>
    <div class="task-list-body">
      <ul class="pin-tasks-list">
        <li class="pin-tasks-list__item">
          <a href="#;">
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
            <span class="pin-task-time">09:00</span>
            <span class="pin-task-text ellip">To Do List App 배포</span>
          </a>
        </li>
        <li class="pin-tasks-list__item">
          <a href="#;">
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
            <span class="pin-task-time">09:00</span>
            <span class="pin-task-text ellip">To Do List App 배포</span>
          </a>
        </li>
        <li class="pin-tasks-list__item">
          <a href="#;">
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
import { eventBus } from '@/scripts/main';

export default {
  methods: {
    showClipPlanDetail() {
      eventBus.clipPlanDetail(123);
    },
  },
};
</script>

<style></style>
