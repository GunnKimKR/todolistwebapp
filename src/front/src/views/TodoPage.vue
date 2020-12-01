<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <main id="main" class="main-container">
      <Calendar></Calendar>
      <TodoList></TodoList>
    </main>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import Calendar from '@/components/common/Calendar.vue';
import TodoList from '@/components/todo/TodoList.vue';

export default {
  components: {
    NavMenu,
    Calendar,
    TodoList,
  },
};
</script>

<style></style>
