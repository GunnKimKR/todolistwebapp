<template>
  <div id="popup" class="pop-wrap">
    <MessagePopup
      v-if="popup.name == 'message'"
      @closePopup="closePopup"
    ></MessagePopup>
    <ResetPasswordPopup
      v-if="popup.name == 'resetPassword'"
      slot="pop-notice-content"
      @closePopup="closePopup"
    ></ResetPasswordPopup>
  </div>
</template>

<script>
import MessagePopup from '@/components/popup/MessagePopup.vue';
import ResetPasswordPopup from '@/components/popup/ResetPasswordPopup.vue';
export default {
  computed: {
    popup() {
      return this.$store.state.popup;
    },
  },
  components: {
    MessagePopup,
    ResetPasswordPopup,
  },
  methods: {
    closePopup() {
      this.$store.commit('closePopup');
    },
  },
};
</script>

<style></style>
