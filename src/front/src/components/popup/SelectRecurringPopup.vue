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
import PopupContainer from '@/components/common/PopupContainer.vue';
import { day_names, getDateWithSuf } from '@/scripts/date';
import bus from '@/scripts/bus';

const optionList = ['Every Day', 'Every Week', 'Every Month', 'Every Year'];

export default {
  data() {
    return {
      optionList,
      isOptionListOpen: false,
      selectedOption:
        this.$store.state.recurringForm.selectedOption || optionList[0],
      optionIndex: this.$store.state.recurringForm.optionIndex || 0,
      subIndex: this.$store.state.recurringForm.subIndex || '',
      subValue: this.$store.state.recurringForm.subValue || '',
      subDayIndex: this.$store.state.recurringForm.subDayIndex || '',
      subValueOfDays:
        this.$store.state.recurringForm.optionIndex == 0
          ? this.$store.state.recurringForm.subValue
          : '',
    };
  },
  components: {
    PopupContainer,
  },
  computed: {
    isOptionValid() {
      if (this.optionIndex == 0 && this.subValue == '') {
        return false;
      }
      return true;
    },
    dayOfWeek() {
      return this.$store.state.date.day;
    },
    resultOfMonth() {
      return this.subIndex == 0 ? this.dateOfMonth : this.dayOfMonth;
    },
    dateOfMonth() {
      return `${getDateWithSuf(this.$store.state.date.date)} Date`;
    },
    dayOfMonth() {
      return `${getDateWithSuf(Math.ceil(this.$store.state.date.date / 7))} ${
        this.$store.state.date.day
      }`;
    },
    dateOfYear() {
      return `${this.$store.state.date.monthName} ${getDateWithSuf(
        this.$store.state.date.date,
      )}`;
    },
  },
  watch: {
    subValueOfDays(nval) {
      if (isNaN(nval) || nval < 1) {
        this.subValueOfDays = '';
      } else {
        this.subValue = nval;
      }
    },
  },
  methods: {
    closePopup() {
      this.initRecurringForm();
      this.$store.commit('closePopup');
    },
    initRecurringForm() {
      this.optionIndex = this.$store.state.recurringForm.optionIndex || 0;
      this.selectedOption = this.optionList[this.optionIndex];
      this.subValue = this.$store.state.recurringForm.subValue || '';
      if (this.$store.state.recurringForm.optionIndex == 2) {
        this.subIndex = this.$store.state.recurringForm.subIndex;
      } else {
        this.subIndex = '';
      }
    },
    getRecurringForm() {
      return {
        optionIndex: this.optionIndex,
        selectedOption: this.selectedOption,
        subIndex: this.optionIndex == 2 ? this.subIndex : '',
        subDayIndex:
          this.optionIndex == 2 && this.subIndex == 1
            ? Math.ceil(this.$store.state.date.date / 7)
            : '',
        subValue: this.getSubValue(),
        resultString: this.getResultString(),
      };
    },
    getSubValue() {
      let result;
      if (this.optionIndex == 0) {
        result = this.subValue;
      } else if (this.optionIndex == 1) {
        result = this.$store.state.date.dayNumber;
      } else if (this.optionIndex == 2) {
        result =
          this.subIndex == 0
            ? this.$store.state.date.date
            : this.$store.state.date.dayNumber;
      } else if (this.optionIndex == 3) {
        result = this.$store.state.date.yyyymmdd.substring(4, 8);
      } else {
        result = '';
      }
      return result;
    },
    getResultString() {
      let result;
      if (this.optionIndex == 0) {
        result =
          this.subValue == 1 ? 'Every Day' : `Every ${this.subValue} Days`;
      } else if (this.optionIndex == 1) {
        result = `Every ${this.dayOfWeek}`;
      } else if (this.optionIndex == 2) {
        result = `Every ${this.resultOfMonth} of the Month`;
      } else if (this.optionIndex == 3) {
        result = `${this.dateOfYear} of Every Year`;
      }
      return result;
    },
    showOptionList() {
      this.isOptionListOpen = !this.isOptionListOpen;
    },
    selectOption(index) {
      this.optionIndex = index;
      this.selectedOption = this.optionList[index];
      this.isOptionListOpen = false;
    },
    selectMonthOption(index) {
      this.subIndex = index;
    },
    decideOption() {
      bus.$emit('decideRecurringOption', this.getRecurringForm());
      this.$store.commit('saveRecurringForm', this.getRecurringForm());
      this.$store.commit('closePopup');
    },
  },
};
</script>

<style scoped>
@import '~styles/taskformpopup.css';
</style>
