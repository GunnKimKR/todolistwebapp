<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <div id="container">
      <TaskForm></TaskForm>
      <Calendar></Calendar>
      <TodoList></TodoList>
    </div>
    <MyInfo></MyInfo>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import TaskForm from '@/components/common/TaskForm.vue';
import MyInfo from '@/components/common/MyInfo.vue';
import Calendar from '@/components/common/Calendar.vue';
import TodoList from '@/components/todo/TodoList.vue';
import FetchDataMixin from '@/mixins/fetchDataMixin';

export default {
  components: {
    NavMenu,
    TaskForm,
    MyInfo,
    Calendar,
    TodoList,
  },
  mixins: [FetchDataMixin],
};
</script>

<style></style>
