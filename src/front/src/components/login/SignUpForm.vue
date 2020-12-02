<template>
  <section class="sign-form sign-up-form" :class="formActive">
    <form id="userForm" @submit.prevent="userFormSubmit">
      <h2 class="blind">Sign up</h2>
      <div class="sign-form__row">
        <div class="input-box">
          <label for="user-name" class="placeholder-input">User name</label>
          <input
            type="text"
            id="user-name"
            name="username"
            class="input-sign-form"
            :class="usernameStatus.className"
            v-model="username"
            @focus="focusInput"
            @blur="blurInput"
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
        <div class="input-box">
          <label for="input-join-email" class="placeholder-input">Email</label>
          <input
            type="text"
            id="input-join-email"
            name="email"
            class="input-sign-form"
            :class="emailStatus.className"
            v-model="email"
            @focus="focusInput"
            @blur="blurInput"
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
        <div class="input-box">
          <label for="input-join-password" class="placeholder-input">
            Password
          </label>
          <input
            type="password"
            id="input-join-password"
            name="password"
            class="input-sign-form"
            :class="passwordStatus.className"
            v-model="password"
            @focus="focusInput"
            @blur="blurInput"
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
        <button type="submit" class="btn-primary">Sign up</button>
      </div>
    </form>
  </section>
</template>

<script>
import { focusInputEffect, blurInputEffect } from '@/scripts/common';

import {
  initStatus,
  initMsg,
  changeUsername,
  changeEmail,
  changePassword,
  changeInputStatus,
  validateUserForm,
} from '@/scripts/signup';

import { signup } from '@/api/user';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',

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
  props: ['formActive'],
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
      changeUsername(this);
    },
    email(value) {
      changeEmail(this);
    },
    password(value) {
      changePassword(this);
    },
  },
  methods: {
    focusInput(event) {
      focusInputEffect(event);
    },
    blurInput(event) {
      blurInputEffect(event);
      changeInputStatus(this, event);
    },
    async userFormSubmit() {
      try {
        if (validateUserForm(this)) {
          console.log('validate success');
        } else {
          console.log('validate fail');
        }
        const data = (await signup(this.userForm)).data.data;
        console.log(data);
      } catch (error) {
        //TODO 에러처리
        console.log(error);
      }
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

#userForm {
  width: 100%;
}
</style>
