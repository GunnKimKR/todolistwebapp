<template>
  <PopupContainer>
    <div slot="header" class="icon-message" :class="{ success: popup.success }">
      <i
        class="fas"
        :class="{ 'fa-check': popup.success, 'fa-exclamation': !popup.success }"
      ></i>
    </div>

    <p slot="body" class="pop-message">
      {{ popup.message }}
    </p>

    <div slot="footer" v-if="popup.confirm" class="sign-form__row">
      <button
        type="button"
        class="btn-primary pop-btn-close"
        @click="fnConfirm"
      >
        OK
      </button>
      <button
        type="button"
        class="btn-primary pop-btn-close"
        @click="closePopup"
      >
        CANCEL
      </button>
    </div>
    <div slot="footer" v-else class="sign-form__row">
      <button
        type="button"
        class="btn-primary pop-btn-close"
        @click="closePopup"
      >
        OK
      </button>
    </div>
  </PopupContainer>
</template>

<script>
import messagepopup from '@/scripts/messagepopup';
export default messagepopup;
</script>
