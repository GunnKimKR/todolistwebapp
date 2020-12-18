<template>
  <div id="wrap">
    <main id="main" class="sign-form-container">
      <div class="sign-form-group">
        <div class="toggle-btn-box" @click="slideForm">
          <div class="toggle-btn-bg" :class="activeClass[1]"></div>
          <strong class="btn-primary btn-toggle" :class="activeClass[0]">
            Sign in
          </strong>
          <strong class="btn-primary btn-toggle" :class="activeClass[1]">
            Sign up
          </strong>
        </div>

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
      </div>
    </main>
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
