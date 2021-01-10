import store from '@/store/store';
import { addTodo } from '@/api/todo';

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
    vm.selectedLabelIndex = index;
  }
}

function checkLabel_taskform(nval) {
  if (!nval) {
    document.querySelectorAll('.task-detail .label-square').forEach(node => {
      node.classList.remove('selected');
    });
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
    labelCd: vm.isLabelChecked ? vm.selectedLabelIndex : '',
  };
}

function submitTodo() {
  addTodo(vm.todoForm);
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
