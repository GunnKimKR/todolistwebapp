<template>
  <PopupContainer>
    <strong slot="header" class="recurring">
      Select Recurring Options
    </strong>

    <div slot="body" class="task-popup-form__row select-box">
      <a href="#popup" class="input-box">
        <label for="input-verify-email" class="input-placeholder">
          Every Day
        </label>
      </a>
      <button type="button" class="btn-select-drop"></button>
    </div>
    <div slot="body" class="task-popup-form__row">
      Every
      <div class="input-box input-inline">
        <input type="text" maxlength="2" />
      </div>
      Days
    </div>

    <div slot="footer" class="task-popup-form__row footer">
      <button type="button" class="btn-primary" disabled>
        OK
      </button>

      <button
        type="button"
        class="btn-primary pop-btn-close"
        @click="closePopup"
      >
        CLOSE
      </button>
    </div>
  </PopupContainer>
</template>

<script>
import PopupContainer from '@/components/common/PopupContainer.vue';

export default {
  components: {
    PopupContainer,
  },
  methods: {
    closePopup() {
      this.$store.commit('closePopup');
    },
  },
};
</script>

<style scoped>
@import '~styles/taskformpopup.css';
</style>
