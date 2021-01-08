import store from '@/store/store';

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
  }
}

function checkLabel_taskform(nval) {
  if (!nval) {
    document.querySelectorAll('.task-detail .label-square').forEach(node => {
      node.classList.remove('selected');
    });
  }
}

export {
  registerTaskFormModel,
  timePopup,
  selectRecurringPopup,
  selectLabel_taskform,
  checkLabel_taskform,
};
