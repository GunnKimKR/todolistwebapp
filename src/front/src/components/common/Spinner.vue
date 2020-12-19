<template>
  <div class="spinner" v-if="isLoading">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ['isLoading'],
};
</script>

<style scoped>
@import '~styles/spinner.css';
</style>
