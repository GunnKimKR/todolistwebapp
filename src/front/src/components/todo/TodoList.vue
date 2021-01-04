<template>
  <section class="task-list-container">
    <header class="task-list-header">
      <h2 class="blind">Task List</h2>
    </header>
    <div class="task-list-body">
      <ul class="todo-list">
        <li class="todo-list__item">
          <a href="#;">
            <label class="checkbox-box--label">
              <input type="checkbox" />
              <div class="checkbox"></div>
            </label>
            <div class="todo-list__item__text ellip">
              To Do List Webapp Project
            </div>
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
          </a>
        </li>
        <li class="todo-list__item">
          <a href="#;">
            <label class="checkbox-box--label">
              <input type="checkbox" />
              <div class="checkbox label--orange"></div>
            </label>
            <div class="todo-list__item__text ellip">
              To Do List Webapp Project
            </div>
          </a>
        </li>
        <li class="todo-list__item">
          <a href="#;">
            <label class="checkbox-box--label">
              <input type="checkbox" />
              <div class="checkbox"></div>
            </label>
            <div class="todo-list__item__text ellip">
              To Do List Webapp Project
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
