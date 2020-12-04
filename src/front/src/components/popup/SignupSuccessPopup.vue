<template>
  <div id="signupSuccessPopup" class="pop-container">
    <ModalPopup>
      <template slot="title">Signup Completed</template>
      <template slot="btn">
        <button
          type="button"
          class="btn-primary pop-btn-close"
          @click="slideToLogin"
        >
          Go to Sign in
        </button>
      </template>
    </ModalPopup>
  </div>
</template>

<script>
import ModalPopup from '@/components/popup/common/ModalPopup.vue';
export default {
  components: {
    ModalPopup,
  },
  methods: {
    slideToLogin() {
      location.href = '#';
      this.$emit('slideToLogin');
    },
  },
};
</script>

<style scoped>
#signupSuccessPopup:target {
  display: flex;
}

#signupSuccessPopup .button-area .btn-primary {
  width: 60%;
  margin: 0 0.5rem;
}
</style>
