<template>
  <PopupContainer>
    <strong slot="header">
      Input Begin / End Time
    </strong>

    <div slot="body" class="task-popup-form__row time">
      <div class="input-box-wrap">
        <div class="input-box active">
          <p ref="time1UpBtn"><i class="fas fa-chevron-up"></i></p>
          <input
            type="text"
            onkeydown="return false"
            readonly
            v-model="time1"
          />
          <p ref="time1DownBtn"><i class="fas fa-chevron-down"></i></p>
        </div>
        :
        <div class="input-box active">
          <p ref="time2UpBtn"><i class="fas fa-chevron-up"></i></p>
          <input
            type="text"
            onkeydown="return false"
            readonly
            v-model="time2"
          />
          <p ref="time2DownBtn"><i class="fas fa-chevron-down"></i></p>
        </div>
      </div>
      ~
      <div class="input-box-wrap">
        <div class="input-box active">
          <p ref="time3UpBtn"><i class="fas fa-chevron-up"></i></p>
          <input
            type="text"
            onkeydown="return false"
            readonly
            v-model="time3"
          />
          <p ref="time3DownBtn"><i class="fas fa-chevron-down"></i></p>
        </div>
        :
        <div class="input-box active">
          <p ref="time4UpBtn"><i class="fas fa-chevron-up"></i></p>
          <input
            type="text"
            onkeydown="return false"
            readonly
            v-model="time4"
          />
          <p ref="time4DownBtn"><i class="fas fa-chevron-down"></i></p>
        </div>
      </div>
    </div>

    <div slot="footer" class="task-popup-form__row footer">
      <button
        type="button"
        class="btn-primary"
        :disabled="!isTimeValid"
        @click="clickOk"
      >
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
import timeformpopup from '@/scripts/timeformpopup';
export default timeformpopup;
</script>

<style scoped>
@import '~styles/taskformpopup.css';
</style>
