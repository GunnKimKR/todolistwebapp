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
        <button type="submit" class="btn-primary">Sign in</button>
      </div>
      <div class="sign-form__row btn-area">
        <button type="button" @click="resetPasswordPopup" class="btn-ps-find">
          Forgot your password?
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import signin from '@/scripts/signin';
export default signin;
</script>

<style scoped></style>
