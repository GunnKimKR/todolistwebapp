<template>
  <section class="sign-form sign-in-form" :class="activeClass">
    <form id="loginForm" @submit.prevent="loginFormSubmit">
      <h2 class="blind">Sign in</h2>
      <div class="sign-form__row">
        <div class="input-box">
          <label for="input-email" class="placeholder-input">Email</label>
          <input
            type="text"
            id="input-email"
            name="email"
            class="input-sign-form"
            @focus="focusInput"
            @blur="blurInput"
            v-model="email"
          />
        </div>
      </div>
      <div class="sign-form__row">
        <div class="input-box">
          <label for="input-password" class="placeholder-input">Password</label>
          <input
            type="password"
            id="input-password"
            name="password"
            class="input-sign-form"
            @focus="focusInput"
            @blur="blurInput"
            v-model="password"
          />
        </div>
      </div>
      <div class="sign-form__row">
        <button type="submit" class="btn-primary">
          Sign in
        </button>
      </div>
      <div class="sign-form__row hyperlink-area">
        <a href="#forgotPasswordPopup" class="btn-ps-search">
          Forgot your password?
        </a>
      </div>
    </form>
  </section>
</template>

<script>
import { focusInputEffect, blurInputEffect } from '@/scripts/common.js';
import { registerSigninModel, loginUser } from '@/scripts/signin';

export default {
  created() {
    registerSigninModel(this);
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  props: ['activeClass'],
  computed: {
    loginForm() {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
  methods: {
    focusInput(event) {
      focusInputEffect(event);
    },
    blurInput(event) {
      blurInputEffect(event);
    },
    loginFormSubmit() {
      loginUser();
    },
  },
};
</script>

<style scoped>
#loginForm {
  width: 100%;
}
</style>
