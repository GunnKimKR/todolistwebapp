<template>
  <PopupContainer>
    <strong slot="header">
      Input Begin / End Time
    </strong>

    <div slot="body" class="task-popup-form__row time">
      <div class="input-box-wrap">
        <div class="input-box active">
          <label class="input-placeholder">hh</label>
          <input type="text" maxlength="2" v-model="time_1" />
        </div>
        :
        <div class="input-box active">
          <label class="input-placeholder">mm</label>
          <input type="text" maxlength="2" v-model="time_2" />
        </div>
      </div>
      -
      <div class="input-box-wrap">
        <div class="input-box active">
          <label class="input-placeholder">hh</label>
          <input type="text" maxlength="2" v-model="time_3" />
        </div>
        :
        <div class="input-box active">
          <label class="input-placeholder">mm</label>
          <input type="text" maxlength="2" v-model="time_4" />
        </div>
      </div>
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
  data() {
    return {
      time_1: '',
      time_2: '',
      time_3: '',
      time_4: '',
    };
  },
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
