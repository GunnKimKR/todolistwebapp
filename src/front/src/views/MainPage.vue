<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <div id="container">
      <TaskForm></TaskForm>
      <Calendar></Calendar>
      <ClipPlans></ClipPlans>
    </div>
    <MyInfo></MyInfo>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import TaskForm from '@/components/common/TaskForm.vue';
import MyInfo from '@/components/common/MyInfo.vue';
import Calendar from '@/components/common/Calendar.vue';
import ClipPlans from '@/components/main/ClipPlans.vue';
import FetchDataMixin from '@/mixins/FetchDataMixin';

export default {
  components: {
    NavMenu,
    TaskForm,
    MyInfo,
    Calendar,
    ClipPlans,
  },
  mixins: [FetchDataMixin],
};
</script>

<style></style>
