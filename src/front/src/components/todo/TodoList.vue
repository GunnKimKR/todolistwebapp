<template>
  <div class="plans-container">
    <section class="todo-container">
      <h2 class="blind">투두 리스트</h2>
      <strong class="plans-title">Monday. 15</strong>
      <ul class="todo-list">
        <li class="todo-list__item">
          <div class="label-square--checkbox completed"></div>
          <div class="text-todo ellip">
            To Do List Webapp Project
          </div>
          <span class="clip-icon">
            <i class="fas fa-feather-alt"></i>
          </span>
        </li>
        <li class="todo-list__item">
          <div class="label-square--checkbox completed"></div>
          <div class="text-todo ellip">
            To Do List Webapp Project
          </div>
        </li>
        <li class="todo-list__item">
          <div class="label-square--checkbox"></div>
          <div class="text-todo ellip">
            To Do List Webapp Project
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import '~styles/todo.css';
</style>
