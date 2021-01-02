<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <main id="main" class="main-container">
      <Calendar></Calendar>
      <TimeTable></TimeTable>
    </main>
    <MyInfo></MyInfo>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import MyInfo from '@/components/common/MyInfo.vue';
import Calendar from '@/components/common/Calendar.vue';
import TimeTable from '@/components/timetable/TimeTable.vue';
import FetchDataMixin from '@/mixins/fetchDataMixin.js';

export default {
  components: {
    NavMenu,
    MyInfo,
    Calendar,
    TimeTable,
  },
  mixins: [FetchDataMixin],
};
</script>

<style scoped>
@import '~styles/timetable.css';
</style>
