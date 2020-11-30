<template>
  <section class="sign-form sign-up-form" :class="formActive">
    <h2 class="blind">Sign up</h2>
    <div class="sign-form__row">
      <div class="input-box">
        <label for="user-name" class="placeholder-input">User name</label>
        <input
          type="text"
          id="user-name"
          class="input-sign-form input-success"
          @focus="focusInput"
          @blur="blurInput"
        />
      </div>
    </div>
    <div class="sign-form__row">
      <div class="input-box">
        <label for="input-join-email" class="placeholder-input">Email</label>
        <input
          type="text"
          id="input-join-email"
          class="input-sign-form input-error"
          @focus="focusInput"
          @blur="blurInput"
        />
      </div>
      <div class="error-message">
        <p>
          Mandatory field
        </p>
      </div>
    </div>
    <div class="sign-form__row">
      <div class="input-box">
        <label for="input-join-password" class="placeholder-input">
          Password
        </label>
        <input
          type="password"
          id="input-join-password"
          class="input-sign-form input-error"
          @focus="focusInput"
          @blur="blurInput"
        />
      </div>
      <div class="error-message">
        <p>
          The format is incorrect.
        </p>
      </div>
    </div>
    <div class="sign-form__row btn-area">
      <button type="submit" class="btn-primary">Sign up</button>
    </div>
  </section>
</template>

<script>
import { focusInput, blurInput } from '@/scripts/common.js';

export default {
  props: ['formActive'],
  methods: {
    focusInput,
    blurInput,
  },
};
</script>

<style></style>
