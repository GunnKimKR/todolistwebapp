<template>
  <PopupContainer>
    <strong slot="header" class="recurring">
      Select Recurring Options
    </strong>

    <div slot="body" class="task-popup-form__row select-box">
      <a href="#popup" class="input-box" @click="showOptionList">
        <label for="input-verify-email" class="input-placeholder">
          {{ selectedOption }}
        </label>
      </a>
      <button
        type="button"
        class="btn-select-drop"
        :class="{ active: isOptionListOpen }"
        @click="showOptionList"
      ></button>
      <div v-if="isOptionListOpen" class="type-options">
        <ul>
          <li v-for="(item, index) in optionList" :key="item">
            <a href="#popup" @click="selectOption(index)">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>

    <template v-if="optionIndex == 0">
      <div slot="body" class="task-popup-form__row recurring-details">
        <p>
          Every
        </p>
        <div class="input-box input-inline-4">
          <input type="text" maxlength="3" v-model="subValueOfDays" />
        </div>
        <p>
          Day(s)
        </p>
      </div>
    </template>
    <template v-if="optionIndex == 1">
      <div slot="body" class="task-popup-form__row recurring-details">
        Every {{ dayOfWeek }}
      </div>
    </template>
    <template v-if="optionIndex == 2">
      <div
        slot="body"
        class="task-popup-form__row row-column recurring-details option-month"
      >
        Every
        <p>
          <a
            href="#popup"
            :class="{ selected: subIndex == 0 }"
            @click="selectMonthOption(0)"
          >
            {{ dateOfMonth }}
          </a>
          |
          <a
            href="#popup"
            :class="{ selected: subIndex != 0 }"
            @click="selectMonthOption(1)"
          >
            {{ dayOfMonth }}
          </a>
        </p>
        of the Month
      </div>
    </template>
    <template v-if="optionIndex == 3">
      <div slot="body" class="task-popup-form__row row-wrap recurring-details">
        {{ dateOfYear }}
        of Every Year
      </div>
    </template>

    <div slot="footer" class="task-popup-form__row footer">
      <button
        type="button"
        class="btn-primary"
        :disabled="!isOptionValid"
        @click="decideOption"
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
import selectrecurringpopup from '@/scripts/selectrecurringpopup';
export default selectrecurringpopup;
</script>

<style scoped>
@import '~styles/taskformpopup.css';
</style>
