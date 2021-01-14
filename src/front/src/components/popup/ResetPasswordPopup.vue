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
          maxlength="10"
          v-model="verifyCodeInput"
          @focus="inputFocus"
          @blur="inputBlur"
        />
      </div>
      <div v-if="!isCodeValid" class="error-message">
        <p>Invalid verification code.</p>
      </div>
    </div>
    <div v-show="resetOrder == 3" slot="body" class="sign-form__row">
      <div
        class="input-box"
        :class="[passwordStatus.activeClass, passwordStatus.className]"
      >
        <label for="input-reset-password" class="input-placeholder"
          >Reset password</label
        >
        <input
          type="password"
          id="input-reset-password"
          maxlength="20"
          v-model="password"
          @focus="inputFocus"
          @blur="inputBlur"
        />
      </div>
      <div v-if="!passwordStatus.isValid" class="error-message">
        <p>Password must be at least 4 digits.</p>
      </div>
    </div>
    <div v-show="resetOrder == 3" slot="body" class="sign-form__row">
      <div
        class="input-box"
        :class="[password2Status.activeClass, password2Status.className]"
      >
        <label for="input-retype-password" class="input-placeholder"
          >Re-type password</label
        >
        <input
          type="password"
          id="input-retype-password"
          maxlength="20"
          v-model="password2"
          @focus="inputFocus"
          @blur="inputBlur"
        />
      </div>
      <div v-if="!password2Status.isValid" class="error-message">
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
      <button
        v-show="resetOrder == 3"
        type="submit"
        class="btn-primary"
        :disabled="!isPasswordAllValid"
        @click="resetAndSignIn"
      >
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
import resetpassword from '@/scripts/resetpassword';
export default resetpassword;
</script>
