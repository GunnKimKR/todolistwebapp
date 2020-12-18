<template>
  <PopupContainer>
    <strong v-show="resetOrder < 3" slot="header">
      Reset Password
    </strong>
    <strong v-show="resetOrder == 3" slot="header">New Password</strong>

    <div v-show="resetOrder == 1" slot="body" class="sign-form__row">
      <div class="input-box">
        <label for="input-verify-email" class="input-placeholder">Email</label>
        <input
          type="text"
          id="input-verify-email"
          maxlength="30"
          v-model="email"
          @focus="inputFocus"
          @blur="inputBlur"
        />
      </div>
    </div>
    <div v-show="resetOrder == 2" slot="body" class="sign-form__row">
      <div class="input-box">
        <label for="input-verify-code" class="input-placeholder">
          Verification Code
        </label>
        <input
          type="text"
          id="input-verify-code"
          v-model="verifyCodeInput"
          @focus="inputFocus"
          @blur="inputBlur"
          ref="verifyCodeInput"
        />
      </div>
      <div class="error-message">
        <p>Invalid verification code.</p>
      </div>
    </div>
    <div v-show="resetOrder == 3" slot="body" class="sign-form__row">
      <div class="input-box">
        <label for="input-reset-password" class="input-placeholder"
          >Reset password</label
        >
        <input
          type="password"
          id="input-reset-password"
          v-model="password"
          @focus="inputFocus"
          @blur="inputBlur"
        />
      </div>
    </div>
    <div v-show="resetOrder == 3" slot="body" class="sign-form__row">
      <div class="input-box input-error">
        <label for="input-retype-password" class="input-placeholder"
          >Re-type password</label
        >
        <input
          type="password"
          id="input-retype-password"
          v-model="password2"
          @focus="inputFocus"
          @blur="inputBlur"
        />
      </div>
      <div class="error-message">
        <p>Passwords do not match.</p>
      </div>
    </div>

    <div slot="footer" class="sign-form__row">
      <button
        v-show="resetOrder == 1"
        type="button"
        class="btn-primary"
        :disabled="!isEmailValid"
        @click="clickSendButton"
      >
        Send Verification Code
      </button>
      <button
        v-show="resetOrder == 2"
        type="button"
        class="btn-primary"
        @click="clickCheckButton"
      >
        OK
      </button>
      <button v-show="resetOrder == 3" type="submit" class="btn-primary">
        Reset &amp; Sign in
      </button>

      <button
        type="button"
        class="btn-primary pop-btn-close"
        @click="closePopup"
      >
        CLOSE
      </button>
    </div>
  </PopupContainer>
</template>

<script>
import PopupContainer from '@/components/popup/PopupContainer.vue';
import {
  registerResetPasswordModel,
  inputFocusEvent,
  inputBlurEvent,
  changeEmail,
  changeVerifyCodeInput,
  sendEmail,
  checkVerifyCode,
  initAndClose,
} from '@/scripts/resetpassword';

export default {
  created() {
    registerResetPasswordModel(this);
  },
  data() {
    return {
      email: '',
      verifyCodeInput: '',
      verifyCode: '',
      password: '',
      password2: '',

      isEmailValid: false,
      resetOrder: 1,
    };
  },
  components: {
    PopupContainer,
  },
  watch: {
    email() {
      changeEmail();
    },
    verifyCodeInput() {
      changeVerifyCodeInput();
    },
  },
  methods: {
    closePopup() {
      initAndClose();
    },
    inputFocus(event) {
      inputFocusEvent(event);
    },
    inputBlur(event) {
      inputBlurEvent(event);
    },
    clickSendButton() {
      sendEmail();
    },
    clickCheckButton() {
      checkVerifyCode();
    },
  },
};
</script>

<style scoped>
.btn-primary {
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>
