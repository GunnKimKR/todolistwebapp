import store from '@/store/store';
import { addTodo } from '@/api/todo';
import {
  msg_write_title,
  msg_select_recur,
  msg_select_label,
} from '@/scripts/message';
import { dateInfo_2 } from '@/scripts/date';
import bus from '@/scripts/bus';

let vm;

export default {
  data() {
    return {
      isActive: false,
      date: store.state.date || '',
      time: {
        ...store.state.timeForm,
        beginTime: store.state.timeForm.beginTime || '',
        endTime: store.state.timeForm.endTime || '',
        resultString: store.state.timeForm.resultString || '00:00 ~ 00:00',
      },
      recurring: {
        ...store.state.recurringForm,
        resultString: store.state.recurringForm.resultString || 'Not Selected',
      },
      checkDate: false,
      checkRecurring: false,
      checkPin: false,
      checkLabel: false,
      title: '',
      labelCd: '',
      todoForm: {},
    };
  },
  created() {
    vm = this;

    bus.$on('showCalendar', () => {
      this.isActive = false;
    });

    bus.$on('changeDate', () => {
      this.checkRecurring = false;
      this.recurring.resultString = 'Not Selected';
    });

    bus.$on('inputTime', time => {
      this.time = time;
    });

    bus.$on('decideRecurringOption', recurring => {
      this.recurring = recurring;
    });
  },
  beforeDestroy() {
    bus.$off('showCalendar');
    bus.$off('changeDate');
    bus.$off('inputTime');
    bus.$off('decideRecurringOption');
  },
  watch: {
    checkDate,
    checkLabel,
  },
  methods: {
    isDateChecked,
    isRecurringChecked,
    isPinChecked,
    isLabelChecked,
    dateInfo,
    showTaskForm,
    clickDateInfo,
    clickRecurringInfo,
    selectLabel,
    submitTaskForm,
  },
};

function checkDate(nval) {
  if (!nval) vm.checkRecurring = false;
}

function checkLabel(nval) {
  if (!nval) {
    document.querySelectorAll('.task-detail .label-square').forEach(node => {
      node.classList.remove('selected');
    });
    vm.labelCd = '';
  }
}

function isDateChecked() {
  return vm.checkDate;
}

function isRecurringChecked() {
  return vm.checkRecurring;
}

function isPinChecked() {
  return vm.checkPin;
}

function isLabelChecked() {
  return vm.checkLabel;
}

function dateInfo() {
  return dateInfo_2(store.state.date);
}

function showTaskForm() {
  vm.isActive = !vm.isActive;
  if (vm.isActive) {
    bus.$emit('showTaskForm');
  }
}

function clickDateInfo() {
  store.commit('openPopup', {
    name: 'timeForm',
  });
}

function clickRecurringInfo() {
  store.commit('openPopup', {
    name: 'selectRecurring',
  });
}

function selectLabel(index) {
  if (vm.checkLabel) {
    document
      .querySelectorAll('.task-detail .label-square')
      .forEach((node, nodeIdx) => {
        node.classList.remove('selected');
        if (index == nodeIdx) {
          node.classList.add('selected');
        }
      });
    vm.labelCd = index;
  }
}

function submitTaskForm() {
  setTodoForm();
  submitTodo();
}

function setTodoForm() {
  vm.todoForm = {
    userId: store.state.user.userId,
    title: vm.title,
    beginDate: vm.isDateChecked() ? store.state.date.yyyymmdd : '',
    beginTime: vm.isDateChecked() ? vm.time.beginTime : '',
    endTime: vm.isDateChecked() ? vm.time.endTime : '',
    recurYn: vm.isRecurringChecked() ? 1 : 0,
    recurOption: vm.isRecurringChecked() ? vm.recurring.optionIndex : '',
    recurContents: vm.isRecurringChecked() ? vm.recurring.resultString : '',
    recurSubIndex: vm.isRecurringChecked() ? vm.recurring.subIndex : '',
    recurSubDayIndex: vm.isRecurringChecked() ? vm.recurring.subDayIndex : '',
    recurSubValue: vm.isRecurringChecked() ? vm.recurring.subValue : '',
    clipYn: vm.isPinChecked() ? 1 : 0,
    labelCd: vm.isLabelChecked() ? vm.labelCd : '',
  };
}

function submitTodo() {
  if (validateTodoForm()) {
    if (addTodo(vm.todoForm)) {
      vm.title = '';
      vm.isActive = false;
    }
  }
}

function validateTodoForm() {
  let message;
  if (vm.todoForm.title.trim() === '') {
    message = msg_write_title;
  } else if (vm.isRecurringChecked && !vm.todoForm.recurSubValue) {
    message = msg_select_recur;
  } else if (vm.isLabelChecked() && vm.todoForm.labelCd === '') {
    message = msg_select_label;
  }

  if (message) {
    store.commit('openPopup', {
      name: 'message',
      message,
    });
    return false;
  }

  return true;
}
