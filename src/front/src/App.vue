<template>
  <div id="app">
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Popup></Popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/Popup.vue';
export default {
  components: {
    Popup,
  },
};
</script>

<style>
@import '~styles/common.css';
</style>
