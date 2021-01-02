<template>
  <section class="task-list-container">
    <header class="task-list-header">
      <h2 class="blind">Pin tasks</h2>
      <strong class="task-title">Monday. 15</strong>
    </header>
    <div class="task-list-body">
      <ul class="pin-tasks-list">
        <li class="pin-tasks-list__item">
          <a href="#popup">
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
            <span class="pin-task-time">09:00</span>
            <span class="pin-task-text ellip">To Do List App 배포</span>
          </a>
        </li>
        <li class="pin-tasks-list__item">
          <a href="#popup">
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
            <span class="pin-task-time">09:00</span>
            <span class="pin-task-text ellip">To Do List App 배포</span>
          </a>
        </li>
        <li class="pin-tasks-list__item">
          <a href="#popup">
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
  <!-- <section class="clip-plans-container">
    <h2 class="blind">주요 일정</h2>
    <strong class="plans-title">Monday. 15</strong>
    <ul class="clip-plans-list">
      <li class="clip-plans-list__item" @click="showClipPlanDetail">
        <span class="clip-icon">
          <i class="fas fa-feather-alt"></i>
        </span>
        <span class="clip-plan-time">09:00</span>
        <span class="clip-plan ellip">To Do List App 배포</span>
      </li>
      <li class="clip-plans-list__item" @click="showClipPlanDetail">
        <span class="clip-icon">
          <i class="fas fa-feather-alt"></i>
        </span>
        <span class="clip-plan-time">09:00</span>
        <span class="clip-plan ellip">To Do List App 배포</span>
      </li>
      <li class="clip-plans-list__item" @click="showClipPlanDetail">
        <span class="clip-icon">
          <i class="fas fa-feather-alt"></i>
        </span>
        <span class="clip-plan-time">--:--</span>
        <span class="clip-plan ellip">To Do List App 배포</span>
      </li>
    </ul>
  </section> -->
</template>

<script>
import { clipEventBus } from '@/scripts/clip';

export default {
  methods: {
    showClipPlanDetail() {
      clipEventBus.$emit('clipPlanDetail', 123);
    },
  },
};
</script>

<style></style>
