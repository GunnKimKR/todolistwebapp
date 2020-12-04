<template>
  <div id="forgotPasswordPopup" class="pop-container">
    <ModalPopup>
      <template slot="title">Reset Password</template>
      <template slot="input">
        <div class="input-box">
          <label for="input-reset-password" class="placeholder-input">
            Email
          </label>
          <input
            type="text"
            autocomplete="off"
            id="input-reset-password"
            class="input-sign-form"
            @focus="focusInput"
            @blur="blurInput"
          />
        </div>
      </template>
      <template slot="btn">
        <button type="submit" class="btn-primary btn-link">
          Send Reset Link
        </button>
      </template>
      <template slot="link">
        <a href="#" class="pop-btn-close">Back to sign in</a>
      </template>
    </ModalPopup>
  </div>
</template>

<script>
import ModalPopup from '@/components/popup/common/ModalPopup.vue';
import { focusInputEffect, blurInputEffect } from '@/scripts/common.js';

export default {
  components: {
    ModalPopup,
  },
  methods: {
    focusInput(event) {
      focusInputEffect(event);
    },
    blurInput(event) {
      blurInputEffect(event);
    },
  },
};
</script>

<style scoped>
#forgotPasswordPopup:target {
  display: flex;
}
</style>
