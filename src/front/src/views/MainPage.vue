<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <div id="container">
      <TaskForm></TaskForm>
      <Calendar></Calendar>
      <ClipPlans></ClipPlans>
    </div>
    <!-- <ClipPlanDetail></ClipPlanDetail> -->
    <MyInfo></MyInfo>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import TaskForm from '@/components/common/TaskForm.vue';
import MyInfo from '@/components/common/MyInfo.vue';
import Calendar from '@/components/common/Calendar.vue';
import ClipPlans from '@/components/main/ClipPlans.vue';
// import ClipPlanDetail from '@/components/main/ClipPlanDetail.vue';
import FetchDataMixin from '@/mixins/fetchDataMixin.js';

export default {
  components: {
    NavMenu,
    TaskForm,
    MyInfo,
    Calendar,
    ClipPlans,
    // ClipPlanDetail,
  },
  mixins: [FetchDataMixin],
};
</script>

<style></style>
