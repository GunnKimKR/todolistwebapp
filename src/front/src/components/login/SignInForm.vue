<template>
  <section class="sign-form sign-in-form" :class="activeClass">
    <form id="loginForm" @submit.prevent="loginFormSubmit">
      <h2 class="blind">Sign in</h2>
      <div class="sign-form__row">
        <div class="input-box">
          <label for="input-email" class="input-placeholder">Email</label>
          <input
            type="text"
            id="input-email"
            name="email"
            @focus="focusInput"
            @blur="blurInput"
            v-model="email"
            ref="email"
          />
        </div>
      </div>
      <div class="sign-form__row">
        <div class="input-box">
          <label for="input-password" class="input-placeholder">Password</label>
          <input
            type="password"
            id="input-password"
            name="password"
            @focus="focusInput"
            @blur="blurInput"
            v-model="password"
            ref="password"
          />
        </div>
      </div>
      <div class="sign-form__row">
        <button type="submit" class="btn-primary">
          Sign in
        </button>
      </div>
      <div class="sign-form__row hyperlink-area">
        <button type="button" @click="resetPasswordPopup" class="btn-ps-find">
          Forgot your password?
        </button>
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
    resetPasswordPopup() {
      this.$store.commit('openPopup', {
        name: 'resetPassword',
      });
    },
  },
};
</script>

<style scoped>
#loginForm {
  width: 100%;
}
</style>
