<template>
  <PopupContainer>
    <strong slot="header" class="recurring">
      Select Recurring Options
    </strong>

    <div slot="body" class="task-popup-form__row select-box">
      <a href="#popup" class="input-box" @click="showOptionList">
        <label for="input-verify-email" class="input-placeholder">
          {{ showingOption }}
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
          <input type="text" maxlength="3" v-model="dayValue" />
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
            :class="{ selected: isDateOptionSelected }"
            @click="selectMonthOption(0)"
          >
            {{ dateOfMonth }}
          </a>
          |
          <a
            href="#popup"
            :class="{ selected: !isDateOptionSelected }"
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

export default {
  data() {
    return {
      optionList: ['Every Day', 'Every Week', 'Every Month', 'Every Year'],
      isOptionListOpen: false,
      selectedOption: '',
      dayValue: 1,
      isDateOptionSelected: true,
    };
  },
  components: {
    PopupContainer,
  },
  computed: {
    showingOption() {
      return this.selectedOption ? this.selectedOption : this.optionList[0];
    },
    optionIndex() {
      return this.optionList.indexOf(this.showingOption);
    },
    isOptionValid() {
      if (this.optionIndex == 0 && this.dayValue == '') {
        return false;
      }
      return true;
    },
    dayOfWeek() {
      return this.$store.state.date.day;
    },
    resultOfMonth() {
      return this.isDateOptionSelected ? this.dateOfMonth : this.dayOfMonth;
    },
    valueOfMonth() {
      return this.isDateOptionSelected
        ? { subIndex: 0, value: this.$store.state.date.date }
        : {
            subIndex: 1,
            value: this.$store.state.date.day,
            indexOfDay: Math.ceil(this.$store.state.date.date / 7),
          };
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
    resultValue() {
      return this.optionIndex == 0
        ? { value: this.dayValue }
        : this.optionIndex == 2
        ? this.valueOfMonth
        : '';
    },
    resultString() {
      let result;
      if (this.optionIndex == 0) {
        result =
          this.dayValue == 1 ? 'Every Day' : `Every ${this.dayValue} Days`;
      } else if (this.optionIndex == 1) {
        result = `Every ${this.dayOfWeek}`;
      } else if (this.optionIndex == 2) {
        result = `Every ${this.resultOfMonth} of the Month`;
      } else if (this.optionIndex == 3) {
        result = `${this.dateOfYear} of Every Year`;
      }
      return result;
    },
  },
  watch: {
    dayValue(nval) {
      if (isNaN(nval) || nval < 1) this.dayValue = '';
    },
  },
  methods: {
    closePopup() {
      this.initRecurringForm();
      this.$store.commit('closePopup');
    },
    initRecurringForm() {
      this.selectedOption =
        this.optionList[this.$store.state.recurringForm.optionIndex] || '';
      this.dayValue = this.$store.state.recurringForm.subOption.value || 1;
      if (this.$store.state.recurringForm.optionIndex == 2) {
        this.isDateOptionSelected =
          this.$store.state.recurringForm.subOption.subIndex == 0;
      } else {
        this.isDateOptionSelected = true;
      }
    },
    getRecurringForm() {
      return {
        optionIndex: this.optionList.indexOf(this.showingOption),
        subOption: this.resultValue,
        resultString: this.resultString,
      };
    },
    showOptionList() {
      this.isOptionListOpen = !this.isOptionListOpen;
    },
    selectOption(index) {
      this.selectedOption = this.optionList[index];
      this.isOptionListOpen = false;
    },
    selectMonthOption(index) {
      this.isDateOptionSelected = index == 0 ? true : false;
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
