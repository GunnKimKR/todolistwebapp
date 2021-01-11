import store from '@/store/store';
import { addTodo } from '@/api/todo';
import {
  msg_write_title,
  msg_select_recur,
  msg_select_label,
} from '@/scripts/message';

let vm;

function registerTaskFormModel(model) {
  vm = model;
}

function timePopup() {
  store.commit('openPopup', {
    name: 'timeForm',
  });
}

function selectRecurringPopup() {
  store.commit('openPopup', {
    name: 'selectRecurring',
  });
}

function selectLabel_taskform(index) {
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

function checkLabel_taskform(nval) {
  if (!nval) {
    document.querySelectorAll('.task-detail .label-square').forEach(node => {
      node.classList.remove('selected');
    });
    vm.labelCd = '';
  }
}

function setTodoForm() {
  vm.todoForm = {
    userId: store.state.user.userId,
    title: vm.title,
    beginDate: vm.isDateChecked ? store.state.date.yyyymmdd : '',
    beginTime: vm.isDateChecked ? vm.time.beginTime : '',
    endTime: vm.isDateChecked ? vm.time.endTime : '',
    recurYn: vm.isRecurringChecked ? 1 : 0,
    recurOption: vm.isRecurringChecked ? vm.recurring.optionIndex : '',
    recurContents: vm.isRecurringChecked ? vm.recurring.resultString : '',
    recurSubIndex: vm.isRecurringChecked ? vm.recurring.subIndex : '',
    recurSubDayIndex: vm.isRecurringChecked ? vm.recurring.subDayIndex : '',
    recurSubValue: vm.isRecurringChecked ? vm.recurring.subValue : '',
    clipYn: vm.isPinChecked ? 1 : 0,
    labelCd: vm.isLabelChecked ? vm.labelCd : '',
  };
}

function submitTodo() {
  if (validateTodoForm()) {
    return addTodo(vm.todoForm);
  }
}

function validateTodoForm() {
  let message;
  if (vm.todoForm.title.trim() === '') {
    message = msg_write_title;
  } else if (vm.isRecurringChecked && !vm.todoForm.recurSubValue) {
    message = msg_select_recur;
  } else if (vm.isLabelChecked && vm.todoForm.labelCd === '') {
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

export {
  registerTaskFormModel,
  timePopup,
  selectRecurringPopup,
  selectLabel_taskform,
  checkLabel_taskform,
  setTodoForm,
  submitTodo,
};
