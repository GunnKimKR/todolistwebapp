<template>
  <section class="sign-form sign-in-form" :class="activeClass">
    <h2 class="blind">Sign in</h2>
    <div class="sign-form__row">
      <div class="input-box">
        <label for="input-email" class="placeholder-input">Email</label>
        <input
          type="text"
          id="input-email"
          class="input-sign-form"
          @focus="focusInput"
          @blur="blurInput"
        />
      </div>
    </div>
    <div class="sign-form__row">
      <div class="input-box">
        <label for="input-password" class="placeholder-input">Password</label>
        <input
          type="password"
          id="input-password"
          class="input-sign-form"
          @focus="focusInput"
          @blur="blurInput"
        />
      </div>
    </div>
    <div class="sign-form__row">
      <router-link to="/main" class="btn-primary">
        Sign in
      </router-link>
    </div>
    <div class="sign-form__row hyperlink-area">
      <a href="#forgotPasswordPopup" class="btn-ps-search">
        Forgot your password?
      </a>
    </div>
  </section>
</template>

<script>
import { focusInputEffect, blurInputEffect } from '@/scripts/common.js';

export default {
  props: ['activeClass'],
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
