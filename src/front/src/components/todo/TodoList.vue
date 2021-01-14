<template>
  <section class="task-list-container">
    <header class="task-list-header">
      <h2 class="blind">Task List</h2>
    </header>
    <div class="task-list-body">
      <ul class="todo-list">
        <li
          v-for="(data, index) in dataList"
          :key="index"
          class="todo-list__item"
        >
          <a href="#;">
            <label class="checkbox-box--label">
              <input type="checkbox" />
              <div class="checkbox" :class="labelClass(data.labelCd)"></div>
            </label>
            <div class="todo-list__item__text ellip">
              {{ data.title }}
            </div>
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import FetchDataMixin from '@/mixins/FetchDataMixin';
import { labelClass } from '@/scripts/common';

export default {
  mixins: [FetchDataMixin],
  methods: {
    labelClass,
  },
};
</script>
