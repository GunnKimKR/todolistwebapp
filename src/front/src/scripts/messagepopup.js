import PopupContainer from '@/components/common/PopupContainer.vue';
import store from '@/store/store';

let vm;

export default {
  created() {
    vm = this;
  },
  components: {
    PopupContainer,
  },
  computed: {
    popup,
  },
  methods: {
    fnConfirm,
    closePopup,
  },
};

function popup() {
  return store.state.popup;
}

function fnConfirm() {
  store.commit('popupConfirm', vm.popup.popupName);
  vm.closePopup();
}

function closePopup() {
  store.commit('closePopup');
}
