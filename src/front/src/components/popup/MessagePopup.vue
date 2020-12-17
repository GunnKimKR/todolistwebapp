<template>
  <PopupContainer>
    <div slot="pop-notice-content" class="pop-notice-content">
      <div class="icon-message">
        <i class="fas fa-exclamation"></i>
      </div>
      <p class="pop-message">
        {{ popup.message }}
      </p>

      <div class="sign-form__row">
        <button
          type="button"
          class="btn-primary pop-btn-close"
          @click="closePopup"
        >
          OK
        </button>
      </div>
    </div>
  </PopupContainer>
</template>

<script>
import PopupContainer from '@/components/popup/PopupContainer.vue';
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
