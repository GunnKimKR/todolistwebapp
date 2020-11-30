<template>
  <div id="wrap">
    <main id="main" class="sign-form-container">
      <div class="sign-form-group">
        <div class="toggle-btn-box" @click="slideForm">
          <div class="toggle-btn-bg" :class="signUpActive"></div>
          <strong class="btn-primary btn-toggle" :class="signInActive">
            Sign in
          </strong>
          <strong class="btn-primary btn-toggle" :class="signUpActive">
            Sign up
          </strong>
        </div>

        <div class="sign-form-slider-container">
          <SignInForm :formActive="signUpActive"></SignInForm>
          <SignUpForm :formActive="signUpActive"></SignUpForm>
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

    <ForgotPasswordPopup></ForgotPasswordPopup>
  </div>
</template>

<script>
import SignInForm from '@/components/login/SignInForm.vue';
import SignUpForm from '@/components/login/SignUpForm.vue';
import ForgotPasswordPopup from '@/components/popup/ForgotPasswordPopup.vue';

export default {
  components: {
    SignInForm,
    SignUpForm,
    ForgotPasswordPopup,
  },
  data() {
    return {
      formActiveArray: ['active', null],
    };
  },
  computed: {
    signInActive() {
      return this.formActiveArray[0];
    },
    signUpActive() {
      return this.formActiveArray[1];
    },
  },
  methods: {
    slideForm(event) {
      this.formActiveArray =
        event.target == document.querySelectorAll('.btn-toggle')[0]
          ? ['active', null]
          : [null, 'active'];
    },
  },
};
</script>

<style scoped>
@import '~styles/login.css';
</style>
