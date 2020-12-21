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
          <a href="#;" class="btn-primary facebook">
            <i class="fab fa-facebook-f"></i>
            Sign in with Facebook
          </a>
          <a href="#;" class="btn-primary instagram">
            <i class="fab fa-instagram"></i>
            Sign in with Instagram
          </a>
        </div>

      </section>

    </div>
  </div>
</template>

<script>
import SignInForm from '@/components/login/SignInForm.vue';
import SignUpForm from '@/components/login/SignUpForm.vue';

export default {
  components: {
    SignInForm,
    SignUpForm,
  },
  data() {
    return {
      activeClass: ['active', null],
    };
  },
  methods: {
    slideForm(event) {
      this.activeClass =
        event.target == document.querySelectorAll('.btn-toggle')[0]
          ? ['active', null]
          : [null, 'active'];
    },
    slideToLogin() {
      this.activeClass = ['active', null];
    },
  },
};
</script>

<style scoped>
@import '~styles/login.css';
</style>
