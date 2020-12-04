<template>
  <div class="pop__form">
    <strong>
      <slot name="title"></slot>
    </strong>
    <slot name="contents"></slot>
    <slot name="input"></slot>
    <div class="button-area">
      <slot name="btn"></slot>
    </div>
    <slot name="link"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import '~styles/popup.css';
</style>
