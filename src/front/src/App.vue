<template>
  <div id="app">
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Popup></Popup>
    <Spinner :isLoading="isLoading"></Spinner>
  </div>
</template>

<script>
import Popup from '@/components/common/Popup.vue';
import Spinner from '@/components/common/Spinner.vue';
import bus from '@/scripts/bus';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    bus.$on('startSpinner', this.startSpinner);
    bus.$on('endSpinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('startSpinner', this.startSpinner);
    bus.$off('endSpinner', this.endSpinner);
  },
  components: {
    Popup,
    Spinner,
  },
  methods: {
    startSpinner() {
      this.isLoading = true;
    },
    endSpinner() {
      this.isLoading = false;
    },
  },
};
</script>

<style>
@import '~styles/common.css';
</style>
