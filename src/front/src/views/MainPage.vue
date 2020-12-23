<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <div id="container">
      <Calendar></Calendar>
      <ClipPlans></ClipPlans>
    </div>
    <ClipPlanDetail></ClipPlanDetail>
    <MyInfo></MyInfo>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import MyInfo from '@/components/common/MyInfo.vue';
import Calendar from '@/components/common/Calendar.vue';
import ClipPlans from '@/components/main/ClipPlans.vue';
import ClipPlanDetail from '@/components/main/ClipPlanDetail.vue';

export default {
  components: {
    NavMenu,
    MyInfo,
    Calendar,
    ClipPlans,
    ClipPlanDetail,
  },
};
</script>

<style></style>
