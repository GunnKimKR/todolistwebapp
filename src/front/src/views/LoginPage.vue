<template>
  <div id="wrap">
    <div id="container" class="member-registration-container">
      <section class="member-registration">
        <h2 class="blind">Member Registration</h2>
        <header class="toggle-btn-group" @click="slideForm">
          <div class="toggle-btn-bg" :class="{ active: activeIdx == 1 }"></div>
          <strong
            class="btn-primary btn-toggle"
            :class="{ active: activeIdx == 0 }"
          >
            Sign in
          </strong>
          <strong
            class="btn-primary btn-toggle"
            :class="{ active: activeIdx == 1 }"
          >
            Sign up
          </strong>
        </header>

        <div class="sign-form-slider">
          <SignInForm :activeClass="{ active: activeIdx == 1 }"></SignInForm>
          <SignUpForm :activeClass="{ active: activeIdx == 1 }"></SignUpForm>
        </div>

        <div class="sns-btn-area">
          <a :href="googleLoginUrl" class="btn-primary google">
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
import loginpage from '@/scripts/loginpage';
export default loginpage;
</script>

<style scoped>
@import '~styles/login.css';
</style>
