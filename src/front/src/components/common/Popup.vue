<template>
  <div id="popup" class="pop-wrap">
    <MessagePopup v-if="popup.name == 'message'"></MessagePopup>
    <ResetPasswordPopup
      v-if="popup.name == 'resetPassword'"
    ></ResetPasswordPopup>
    <ClipPlanDetailPopup
      v-if="popup.name == 'clipPlanDetail'"
    ></ClipPlanDetailPopup>
  </div>
</template>

<script>
import MessagePopup from '@/components/popup/MessagePopup.vue';
import ResetPasswordPopup from '@/components/popup/ResetPasswordPopup.vue';
import ClipPlanDetailPopup from '@/components/popup/ClipPlanDetailPopup.vue';
export default {
  components: {
    MessagePopup,
    ResetPasswordPopup,
    ClipPlanDetailPopup,
  },
  computed: {
    popup() {
      return this.$store.state.popup;
    },
  },
};
</script>

<style></style>
