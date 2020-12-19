<template>
  <section class="plan-details-container" :class="planActiveClass">
    <h2 class="blind">일정 세부사항</h2>
    <div class="button-area">
      <button type="button" class="btn-close" @click="closePlanDetail">
        <i class="fas fa-times"></i>
      </button>
      <button type="button" class="btn-remove">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    <header class="plan-details-header">
      <div class="date-box">
        <span class="date-box__date">15</span>
        <span class="date-box__month">
          September
          <span class="date-box__year">2020</span>
        </span>
        <span class="date-box__day">Monday</span>
      </div>
    </header>
    <div class="plan-details-body">
      <ul class="plan-details">
        <li>
          <div class="label-square"></div>
          <strong class="plan-detail-title">
            To do List Webapp Project
          </strong>
          <button type="button" class="btn-clip clip-icon">
            <i class="fas fa-feather-alt"></i>
          </button>
        </li>
        <li>
          <div class="plan-detail-icon">
            <i class="far fa-clock"></i>
          </div>
          <div class="plan-detail-date">9월 15일(월) 09:00 - 12:00</div>
        </li>
        <li>
          <div class="plan-detail-icon">
            <i class="fas fa-redo"></i>
          </div>
          <div class="plan-detail-repeat">매주</div>
        </li>
        <li class="plan-detail--note">
          <div class="plan-detail-icon">
            <i class="far fa-edit"></i>
          </div>
          <div class="plan-detail-note">
            웹앱 기획(화면 레이아웃, 기능)<br />
            메인 페이지 와이어프레임<br />
            투두 웹앱 벤치마킹
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { clipEventBus } from '@/scripts/clip';

export default {
  data() {
    return {
      planActiveClass: '',
    };
  },
  created() {
    clipEventBus.$on('clipPlanDetail', planNo => {
      this.planActiveClass = 'active';
    });
  },
  methods: {
    closePlanDetail() {
      this.planActiveClass = '';
    },
  },
};
</script>

<style></style>
