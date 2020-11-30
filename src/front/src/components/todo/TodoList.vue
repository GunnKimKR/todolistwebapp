<template>
  <section class="todo-container">
    <h2 class="blind">투두 리스트</h2>
    <strong>Monday. 15</strong>
    <ul class="todo-list completed">
      <li class="todo-list__item">
        <div class="todo-list__item__inner">
          <div class="label-todo"></div>
          <div class="text-todo" style="text-decoration: line-through;">
            To Do List Webapp Project
            <div class="time-todo">11:00 - 15:00</div>
          </div>
          <div class="buttons-box">
            <button type="button" class="btn-check completed"></button>
            <button type="button" class="btn-delete">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </li>
      <li class="todo-list__item">
        <div class="todo-list__item__inner">
          <div class="label-todo"></div>
          <div class="text-todo">
            투두 리스트 웹앱 프로젝트
          </div>
          <div class="buttons-box">
            <button type="button" class="btn-check"></button>
            <button type="button" class="btn-delete">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import '~styles/todo.css';
</style>
