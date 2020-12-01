<template>
  <ModalPopup>
    <template slot="title">Reset Password</template>
    <template slot="inputBox">
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
    </template>
    <template slot="btnArea">
      <button type="submit" class="btn-primary btn-link">
        Send Reset Link
      </button>
      <a href="#" class="pop-btn-close">Back to sign in</a>
    </template>
  </ModalPopup>
</template>

<script>
import ModalPopup from '@/components/popup/common/ModalPopup.vue';
import { focusInputEffect, blurInputEffect } from '@/scripts/common.js';

export default {
  components: {
    ModalPopup,
  },
  props: ['formActive'],
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

<style></style>
