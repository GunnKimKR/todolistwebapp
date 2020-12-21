<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <div id="container">
      <Calendar></Calendar>
      <PinTasks></PinTasks>
    </div>
    <ClipPlanDetail></ClipPlanDetail>
    <MyInfo></MyInfo>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import MyInfo from '@/components/common/MyInfo.vue';
import Calendar from '@/components/common/Calendar.vue';
import PinTasks from '@/components/main/PinTasks.vue';
import ClipPlanDetail from '@/components/main/ClipPlanDetail.vue';

export default {
  components: {
    NavMenu,
    MyInfo,
    Calendar,
    PinTasks,
    ClipPlanDetail,
  },
};
</script>

<style>
@import '~styles/main.css';
</style>
