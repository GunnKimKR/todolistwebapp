<template>
  <div id="app">
    <transition name="page">
      <router-view></router-view>
    </transition>
    <CommonPopup> </CommonPopup>
  </div>
</template>

<script>
import CommonPopup from '@/components/popup/common/CommonPopup.vue';
export default {
  components: {
    CommonPopup,
  },
};
</script>

<style>
@import '~styles/common.css';
</style>
