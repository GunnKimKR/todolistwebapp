<template>
  <PopupContainer>
    <div slot="pop-notice-content" class="pop-notice-content">
      <strong>Reset Password</strong>
      <div class="sign-form__row">
        <div class="input-box">
          <label for="input-verify-email" class="input-placeholder"
            >Email</label
          >
          <input type="text" id="input-verify-email" />
        </div>
      </div>
      <div class="sign-form__row">
        <button type="button" class="btn-primary">
          Send Verification Code
        </button>
      </div>
      <div class="sign-form__row">
        <div class="input-box">
          <label for="input-verify-code" class="input-placeholder"
            >Verification Code</label
          >
          <input type="text" id="input-verify-code" />
        </div>
        <div class="error-message">
          <!-- 인증 코드가 올바르지 않을 경우 -->
          <!-- <p>Invalid verification code.</p> -->
        </div>
      </div>

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
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
  },
};
</script>

<style></style>
