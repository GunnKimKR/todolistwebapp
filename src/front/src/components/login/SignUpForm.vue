<template>
  <section class="sign-form sign-up-form" :class="formActive">
    <h2 class="blind">Sign up</h2>
    <div class="sign-form__row">
      <div class="input-box">
        <label for="user-name" class="placeholder-input">User name</label>
        <input
          type="text"
          id="user-name"
          class="input-sign-form"
          :class="usernameStatus.className"
          v-model="username"
          @focus="focusInput"
          @blur="blurInput"
        />
      </div>
      <div v-if="!usernameStatus.isValid" class="error-message">
        <p>
          {{ error.usernameMsg }}
        </p>
      </div>
    </div>
    <div class="sign-form__row">
      <div class="input-box">
        <label for="input-join-email" class="placeholder-input">Email</label>
        <input
          type="text"
          id="input-join-email"
          class="input-sign-form"
          :class="emailStatus.className"
          v-model="email"
          @focus="focusInput"
          @blur="blurInput"
        />
      </div>
      <div v-if="!emailStatus.isValid" class="error-message">
        <p>
          {{ error.emailMsg }}
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
          class="input-sign-form"
          :class="passwordStatus.className"
          v-model="password"
          @focus="focusInput"
          @blur="blurInput"
        />
      </div>
      <div v-if="!passwordStatus.isValid" class="error-message">
        <p>
          {{ error.passwordMsg }}
        </p>
      </div>
    </div>
    <div class="sign-form__row btn-area">
      <button type="submit" class="btn-primary">Sign up</button>
    </div>
  </section>
</template>

<script>
import {
  focusInputEffect,
  blurInputEffect,
  isEmailFormatValid,
  isPasswordFormatValid,
} from '@/scripts/common';

import {
  initStatus,
  validStatus,
  errorStatus,
  initMsg,
  emailFormatIncorrectMsg,
  passwordIncorrectMsg,
} from '@/scripts/signup';

export default {
  props: ['formActive'],
  data() {
    return {
      /* form data */
      username: '',
      email: '',
      password: '',
      /* form data */

      usernameStatus: { ...initStatus },
      emailStatus: { ...initStatus },
      passwordStatus: { ...initStatus },
      error: {
        usernameMsg: initMsg,
        emailMsg: initMsg,
        passwordMsg: initMsg,
      },
    };
  },
  watch: {
    username(value) {
      this.usernameStatus = this.isUsernameValid(value)
        ? validStatus
        : errorStatus;
    },
    email(value) {
      this.emailStatus = this.isEmailValid(value) ? validStatus : errorStatus;
      this.error.emailMsg =
        value && !isEmailFormatValid(value) ? emailFormatIncorrectMsg : initMsg;
    },
    password(value) {
      this.passwordStatus = this.isPasswordValid(this.password)
        ? validStatus
        : errorStatus;
      this.error.passwordMsg =
        value && !isPasswordFormatValid(value) ? passwordIncorrectMsg : initMsg;
    },
  },
  methods: {
    focusInputEffect,
    blurInputEffect,
    focusInput(event) {
      focusInputEffect(event);
    },
    blurInput(event) {
      blurInputEffect(event);
      if (!event.target.value) {
        const id = event.target.getAttribute('id');
        if (id == 'user-name') this.usernameStatus = errorStatus;
        else if (id == 'input-join-email') this.emailStatus = errorStatus;
        else if (id == 'input-join-password') this.passwordStatus = errorStatus;
      }
    },
    isUsernameValid(value) {
      return value;
    },
    isEmailValid(value) {
      return value && isEmailFormatValid(value);
    },
    isPasswordValid(value) {
      return value && isPasswordFormatValid(value);
    },
  },
};
</script>

<style scoped>
.sign-form__row {
  min-height: 5.2rem;
}

.sign-form__row + .sign-form__row {
  margin-top: 1rem;
}

.sign-form__row.btn-area {
  margin-top: 1.8rem;
  min-height: 0;
}
</style>
