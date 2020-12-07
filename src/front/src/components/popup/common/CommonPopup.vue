<template>
  <div id="commonPopup" class="pop-container">
    <ModalPopup>
      <template slot="title">
        {{ title }}
      </template>
      <template slot="contents">
        <div>
          {{ contents }}
        </div>
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
    contents() {
      return this.$store.state.popup.contents;
    },
    title() {
      return this.$store.state.popup.title;
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
