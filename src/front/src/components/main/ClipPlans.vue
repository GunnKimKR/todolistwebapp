<template>
  <section class="clip-plans-container">
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
