<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <div id="container" class="timetable">
      <TaskForm></TaskForm>
      <Calendar></Calendar>
      <TimeTable></TimeTable>
    </div>
    <MyInfo></MyInfo>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import TaskForm from '@/components/common/TaskForm.vue';
import MyInfo from '@/components/common/MyInfo.vue';
import Calendar from '@/components/common/Calendar.vue';
import TimeTable from '@/components/timetable/TimeTable.vue';

export default {
  components: {
    NavMenu,
    TaskForm,
    MyInfo,
    Calendar,
    TimeTable,
  },
};
</script>

<style scoped>
@import '~styles/timetable.css';
</style>
