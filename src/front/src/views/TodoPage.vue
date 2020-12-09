<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <main id="main" class="main-container">
      <Calendar></Calendar>
      <TodoList></TodoList>
    </main>
    <MyInfo></MyInfo>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import MyInfo from '@/components/common/MyInfo.vue';
import Calendar from '@/components/common/Calendar.vue';
import TodoList from '@/components/todo/TodoList.vue';

export default {
  components: {
    NavMenu,
    MyInfo,
    Calendar,
    TodoList,
  },
};
</script>

<style></style>
