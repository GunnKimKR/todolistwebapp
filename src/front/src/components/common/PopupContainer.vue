<template>
  <div id="pop-container">
    <div v-if="popup.name == 'clipPlanDetail'" class="task-details-container">
      <div class="button-area">
        <slot name="btn"></slot>
      </div>
      <header class="task-details__header">
        <slot name="header"></slot>
      </header>
      <div class="task-details__body">
        <slot name="body"></slot>
      </div>
      <footer class="task-details__footer">
        <slot name="footer"></slot>
      </footer>
    </div>

    <div v-else class="pop-notice-content">
      <div class="button-area">
        <slot name="btn"></slot>
      </div>
      <header class="pop-notice-content__header">
        <slot name="header"></slot>
      </header>
      <div class="pop-notice-content__body">
        <slot name="body"></slot>
      </div>
      <footer class="pop-notice-content__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    popup() {
      return this.$store.state.popup;
    },
  },
};
</script>

<style scoped>
@import '~styles/popup.css';
</style>
