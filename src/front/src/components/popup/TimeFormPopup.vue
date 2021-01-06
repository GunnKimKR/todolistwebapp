<template>
  <PopupContainer>
    <strong slot="header">
      Input Begin / End Time
    </strong>

    <div slot="body" class="time-form__row">
      <div class="input-box-wrap">
        <div class="input-box active">
          <label class="input-placeholder">hh</label>
          <input type="text" maxlength="2" />
        </div>
        :
        <div class="input-box active">
          <label class="input-placeholder">mm</label>
          <input type="text" maxlength="2" />
        </div>
      </div>
      -
      <div class="input-box-wrap">
        <div class="input-box active">
          <label class="input-placeholder">hh</label>
          <input type="text" maxlength="2" />
        </div>
        :
        <div class="input-box active">
          <label class="input-placeholder">mm</label>
          <input type="text" maxlength="2" />
        </div>
      </div>
    </div>

    <div slot="footer" class="time-form__row footer">
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
@import '~styles/timeformpopup.css';
</style>
