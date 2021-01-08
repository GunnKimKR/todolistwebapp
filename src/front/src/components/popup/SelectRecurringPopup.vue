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
    <div slot="body" class="task-popup-form__row recurring-details">
      <template v-if="showingOption == optionList[0]">
        Every
        <div class="input-box input-inline input-inline-4">
          <input type="text" maxlength="2" placeholder="1" />
        </div>
        Day(s)
      </template>
      <template v-if="showingOption == optionList[1]">
        Every
        <div class="input-box input-inline input-inline-8">
          <input type="text" maxlength="2" placeholder="Monday" />
        </div>
      </template>
      <template v-if="showingOption == optionList[2]">
        Every
        <div class="input-box input-inline input-inline-8">
          <input type="text" maxlength="2" placeholder="1st date" />
        </div>
        of the Month
      </template>
      <template v-if="showingOption == optionList[3]">
        <div class="input-box input-inline input-inline-8">
          <input type="text" maxlength="2" placeholder="Jan 1st" />
        </div>
        of Every Year
      </template>
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
      optionList: ['Every Day', 'Every Week', 'Every Month', 'Every Year'],
      isOptionListOpen: false,
      selectedOption: '',
    };
  },
  components: {
    PopupContainer,
  },
  computed: {
    showingOption() {
      return this.selectedOption ? this.selectedOption : this.optionList[0];
    },
  },
  methods: {
    closePopup() {
      this.$store.commit('closePopup');
    },
    showOptionList() {
      this.isOptionListOpen = !this.isOptionListOpen;
    },
    selectOption(index) {
      this.selectedOption = this.optionList[index];
      this.isOptionListOpen = false;
    },
  },
};
</script>

<style scoped>
@import '~styles/taskformpopup.css';
</style>
