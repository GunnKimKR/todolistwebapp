<template>
  <div id="popup" class="pop-container">
    <div class="pop__form">
      <strong>
        <slot name="title"></slot>
      </strong>
      <div class="input-box">
        <slot name="inputBox"></slot>
      </div>
      <slot name="btnArea"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import '~styles/popup.css';
</style>
