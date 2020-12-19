<template>
  <PopupContainer>
    <div slot="header" class="icon-message">
      <i class="fas fa-exclamation"></i>
    </div>

    <p slot="body" class="pop-message">
      {{ popup.message }}
    </p>

    <div slot="footer" class="sign-form__row">
      <button
        type="button"
        class="btn-primary pop-btn-close"
        @click="closePopup"
      >
        OK
      </button>
    </div>
  </PopupContainer>
</template>

<script>
import PopupContainer from '@/components/common/PopupContainer.vue';
export default {
  components: {
    PopupContainer,
  },
  computed: {
    popup() {
      return this.$store.state.popup;
    },
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
  },
};
</script>

<style></style>
