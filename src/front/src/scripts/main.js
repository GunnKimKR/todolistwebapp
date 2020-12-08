import Vue from 'vue';

const eventBus = new Vue({
  methods: {
    clipPlanDetail(planNo) {
      this.$emit('clipPlanDetail', planNo);
    },
  },
});

export { eventBus };
