<template>
  <section
    id="sign-up-form-component"
    class="sign-form sign-up-form"
    :class="activeClass"
  >
    <form id="userForm" @submit.prevent="userFormSubmit">
      <h2 class="blind">Sign up</h2>
      <div class="sign-form__row">
        <div
          class="input-box"
          :class="[usernameStatus.className, usernameStatus.activeClass]"
        >
          <label for="user-name" class="input-placeholder">User name</label>
          <input
            type="text"
            id="user-name"
            name="username"
            maxlength="20"
            v-model="username"
            @focus="inputFocus"
            @blur="inputBlur"
            ref="username"
          />
        </div>
        <div v-if="!usernameStatus.isValid" class="error-message">
          <p>
            {{ error.usernameMsg }}
          </p>
        </div>
      </div>
      <div class="sign-form__row">
        <div
          class="input-box"
          :class="[emailStatus.className, emailStatus.activeClass]"
        >
          <label for="input-join-email" class="input-placeholder">Email</label>
          <input
            type="text"
            id="input-join-email"
            name="email"
            maxlength="30"
            v-model="email"
            @focus="inputFocus"
            @blur="inputBlur"
            ref="email"
          />
        </div>
        <div v-if="!emailStatus.isValid" class="error-message">
          <p>
            {{ error.emailMsg }}
          </p>
        </div>
      </div>
      <div class="sign-form__row">
        <div
          class="input-box"
          :class="[passwordStatus.className, passwordStatus.activeClass]"
        >
          <label for="input-join-password" class="input-placeholder">
            Password
          </label>
          <input
            type="password"
            id="input-join-password"
            name="password"
            maxlength="20"
            v-model="password"
            @focus="inputFocus"
            @blur="inputBlur"
            ref="password"
          />
        </div>
        <div v-if="!passwordStatus.isValid" class="error-message">
          <p>
            {{ error.passwordMsg }}
          </p>
        </div>
      </div>
      <div class="sign-form__row btn-area">
        <button type="submit" class="btn-primary">Sign up &amp; Sign in</button>
      </div>
    </form>
  </section>
</template>

<script>
import {
  initStatus,
  changeUsername,
  changeEmail,
  changePassword,
  inputFocusEvent,
  inputBlurEvent,
  registerUser,
  registerSignupModel,
} from '@/scripts/signup';

import { msg_mandatory_field } from '@/scripts/message';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',

      usernameStatus: initStatus,
      emailStatus: initStatus,
      passwordStatus: initStatus,

      error: {
        usernameMsg: msg_mandatory_field,
        emailMsg: msg_mandatory_field,
        passwordMsg: msg_mandatory_field,
      },
    };
  },
  created() {
    registerSignupModel(this);
  },
  props: ['activeClass'],
  computed: {
    userForm() {
      return {
        username: this.username,
        email: this.email,
        password: this.password,
      };
    },
  },
  watch: {
    username() {
      changeUsername();
    },
    email() {
      changeEmail();
    },
    password() {
      changePassword();
    },
  },
  methods: {
    inputFocus(event) {
      inputFocusEvent(event);
    },
    inputBlur(event) {
      inputBlurEvent(event);
    },
    userFormSubmit() {
      registerUser();
    },
  },
};
</script>

<style scoped>
@import '~styles/custom/signupFormCustom.css';
</style>
