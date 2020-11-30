<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <main id="main" class="main-container">
      <Calendar></Calendar>
      <TimeTable></TimeTable>
    </main>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import Calendar from '@/components/common/Calendar.vue';
import TimeTable from '@/components/timetable/TimeTable.vue';

export default {
  components: {
    NavMenu,
    Calendar,
    TimeTable,
  },
};
</script>

<style></style>
