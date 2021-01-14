<template>
  <section class="task-list-container">
    <header class="task-list-header">
      <h2 class="blind">Pin tasks</h2>
    </header>
    <div class="task-list-body">
      <ul class="todo-list">
        <li
          v-for="(data, index) in dataList"
          :key="index"
          class="todo-list__item"
        >
          <a href="#popup" @click="showClipPlanDetail">
            <div
              v-if="isTimeExist(index)"
              class="label-square"
              :class="labelClass(data.labelCd)"
            ></div>
            <label v-else class="checkbox-box--label">
              <input type="checkbox" />
              <div class="checkbox" :class="labelClass(data.labelCd)"></div>
            </label>
            <div class="todo-list__item__text ellip">
              {{ data.title }}
              <span v-if="isTimeExist(index)" class="todo-list__item__time">
                {{ timeStr(index) }}
              </span>
            </div>
            <span class="pin-icon">
              <i class="fas fa-feather-alt"></i>
            </span>
          </a>
        </li>
        <li v-if="dataList == ''" class="todo-list__item">
          <a href="#popup">
            <div class="todo-list__item__text ellip no-data">
              No Data Found
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import clipplans from '@/scripts/clipplans';
export default clipplans;
</script>
