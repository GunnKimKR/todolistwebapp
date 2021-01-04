<template>
  <PopupContainer>
    <div slot="header" class="icon-message">
      <i class="fas fa-exclamation"></i>
    </div>

    <p slot="body" class="pop-message">
      {{ popup.message }}
    </p>

    <div slot="footer" v-if="popup.confirm" class="sign-form__row">
      <button
        type="button"
        class="btn-primary pop-btn-close"
        @click="fnConfirm"
      >
        OK
      </button>
      <button
        type="button"
        class="btn-primary pop-btn-close"
        @click="closePopup"
      >
        CANCEL
      </button>
    </div>
    <div slot="footer" v-else class="sign-form__row">
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
    fnConfirm() {
      this.$store.commit('popupConfirm', this.popup.popupName);
      this.closePopup();
    },
    closePopup() {
      this.$store.commit('closePopup');
    },
  },
};
</script>

<style></style>
