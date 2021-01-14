import PopupContainer from '@/components/common/PopupContainer.vue';
import { getDateWithSuf } from '@/scripts/date';
import bus from '@/scripts/bus';
import store from '@/store/store';

const optionList = ['Every Day', 'Every Week', 'Every Month', 'Every Year'];
let vm;

export default {
  data() {
    return {
      optionList,
      isOptionListOpen: false,
      selectedOption: store.state.recurringForm.selectedOption || optionList[0],
      optionIndex: store.state.recurringForm.optionIndex || 0,
      subIndex: store.state.recurringForm.subIndex || '',
      subValue: store.state.recurringForm.subValue || '',
      subDayIndex: store.state.recurringForm.subDayIndex || '',
      subValueOfDays:
        store.state.recurringForm.optionIndex == 0
          ? store.state.recurringForm.subValue
          : '',
    };
  },
  created() {
    vm = this;
  },
  components: {
    PopupContainer,
  },
  computed: {
    isOptionValid,
    dayOfWeek,
    resultOfMonth,
    dateOfMonth,
    dayOfMonth,
    dateOfYear,
  },
  watch: {
    subValueOfDays,
  },
  methods: {
    closePopup,
    initRecurringForm,
    getRecurringForm,
    getSubValue,
    getResultString,
    showOptionList,
    selectOption,
    selectMonthOption,
    decideOption,
  },
};

function isOptionValid() {
  if (vm.optionIndex == 0 && vm.subValue == '') {
    return false;
  }
  return true;
}

function dayOfWeek() {
  return store.state.date.day;
}

function resultOfMonth() {
  return vm.subIndex == 0 ? vm.dateOfMonth : vm.dayOfMonth;
}

function dateOfMonth() {
  return `${getDateWithSuf(store.state.date.date)} Date`;
}

function dayOfMonth() {
  return `${getDateWithSuf(Math.ceil(store.state.date.date / 7))} ${
    store.state.date.day
  }`;
}

function dateOfYear() {
  return `${store.state.date.monthName} ${getDateWithSuf(
    store.state.date.date,
  )}`;
}

function subValueOfDays(nval) {
  if (isNaN(nval) || nval < 1) {
    vm.subValueOfDays = '';
  } else {
    vm.subValue = nval;
  }
}

function closePopup() {
  vm.initRecurringForm();
  store.commit('closePopup');
}

function initRecurringForm() {
  vm.optionIndex = store.state.recurringForm.optionIndex || 0;
  vm.selectedOption = vm.optionList[vm.optionIndex];
  vm.subValue = store.state.recurringForm.subValue || '';
  if (store.state.recurringForm.optionIndex == 2) {
    vm.subIndex = store.state.recurringForm.subIndex;
  } else {
    vm.subIndex = '';
  }
}

function getRecurringForm() {
  return {
    optionIndex: vm.optionIndex,
    selectedOption: vm.selectedOption,
    subIndex: vm.optionIndex == 2 ? vm.subIndex : '',
    subDayIndex:
      vm.optionIndex == 2 && vm.subIndex == 1
        ? Math.ceil(store.state.date.date / 7)
        : '',
    subValue: vm.getSubValue(),
    resultString: vm.getResultString(),
  };
}

function getSubValue() {
  let result;
  if (vm.optionIndex == 0) {
    result = vm.subValue;
  } else if (vm.optionIndex == 1) {
    result = store.state.date.dayNumber;
  } else if (vm.optionIndex == 2) {
    result =
      vm.subIndex == 0 ? store.state.date.date : store.state.date.dayNumber;
  } else if (vm.optionIndex == 3) {
    result = store.state.date.yyyymmdd.substring(4, 8);
  } else {
    result = '';
  }
  return result;
}

function getResultString() {
  let result;
  if (vm.optionIndex == 0) {
    result = vm.subValue == 1 ? 'Every Day' : `Every ${vm.subValue} Days`;
  } else if (vm.optionIndex == 1) {
    result = `Every ${vm.dayOfWeek}`;
  } else if (vm.optionIndex == 2) {
    result = `Every ${vm.resultOfMonth} of the Month`;
  } else if (vm.optionIndex == 3) {
    result = `${vm.dateOfYear} of Every Year`;
  }
  return result;
}

function showOptionList() {
  vm.isOptionListOpen = !vm.isOptionListOpen;
}

function selectOption(index) {
  vm.optionIndex = index;
  vm.selectedOption = vm.optionList[index];
  vm.isOptionListOpen = false;
}

function selectMonthOption(index) {
  vm.subIndex = index;
}

function decideOption() {
  bus.$emit('decideRecurringOption', vm.getRecurringForm());
  store.commit('saveRecurringForm', vm.getRecurringForm());
  store.commit('closePopup');
}
