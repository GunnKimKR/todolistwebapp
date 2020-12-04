<template>
  <div id="commonPopup" class="pop-container">
    <ModalPopup>
      <template slot="title">Error</template>
      <template slot="contents">
        <div>{{ message }}</div>
      </template>
      <template slot="btn">
        <button
          type="button"
          class="btn-primary pop-btn-close"
          @click="closePopup"
        >
          Close
        </button>
      </template>
    </ModalPopup>
  </div>
</template>

<script>
import ModalPopup from '@/components/popup/common/ModalPopup.vue';

export default {
  components: {
    ModalPopup,
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
  methods: {
    closePopup() {
      location.href = '#';
    },
  },
};
</script>

<style>
#commonPopup:target {
  display: flex;
}
</style>
