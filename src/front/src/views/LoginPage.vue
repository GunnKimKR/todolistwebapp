<template>
  <div id="wrap">
    <div id="container" class="member-registration-container">
      <section class="member-registration">
        <h2 class="blind">Member Registration</h2>
        <header class="toggle-btn-group" @click="slideForm">
          <div class="toggle-btn-bg" :class="activeClass[1]"></div>
          <strong class="btn-primary btn-toggle" :class="activeClass[0]">
            Sign in
          </strong>
          <strong class="btn-primary btn-toggle" :class="activeClass[1]">
            Sign up
          </strong>
        </header>

        <div class="sign-form-slider">
          <SignInForm :activeClass="activeClass[1]"></SignInForm>
          <SignUpForm :activeClass="activeClass[1]"></SignUpForm>
        </div>

        <div class="sns-btn-area">
          <a href="#;" class="btn-primary google">
            <i class="fab fa-google"></i>
            Sign in with Google
          </a>
          <a href="#;" class="btn-primary guest" @click="fnGuestLogin">
            <i class="fas fa-glasses"></i>
            Guest Sign in
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SignInForm from '@/components/login/SignInForm.vue';
import SignUpForm from '@/components/login/SignUpForm.vue';
import { guestUserLogin } from '@/scripts/signin.js';

export default {
  components: {
    SignInForm,
    SignUpForm,
  },
  data() {
    return {
      activeClass: ['active', ''],
    };
  },
  methods: {
    slideForm(event) {
      this.activeClass =
        event.target == document.querySelectorAll('.btn-toggle')[0]
          ? ['active', '']
          : ['', 'active'];
    },
    fnGuestLogin() {
      guestUserLogin();
    },
  },
};
</script>

<style scoped>
@import '~styles/login.css';
</style>
