<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <main id="main" class="main-container">
      <Calendar></Calendar>
      <ClipPlans></ClipPlans>
    </main>
    <ClipPlanDetail></ClipPlanDetail>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import Calendar from '@/components/common/Calendar.vue';
import ClipPlans from '@/components/main/ClipPlans.vue';
import ClipPlanDetail from '@/components/main/ClipPlanDetail.vue';

export default {
  components: {
    NavMenu,
    Calendar,
    ClipPlans,
    ClipPlanDetail,
  },
};
</script>

<style scoped>
@import '~styles/main.css';
</style>
