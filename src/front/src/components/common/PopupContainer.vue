<template>
  <div id="pop-container">
    <div class="pop-notice-content">
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
export default {};
</script>

<style scoped>
@import '~styles/popup.css';
</style>
