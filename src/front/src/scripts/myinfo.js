import { msg_confirm_delete_account } from '@/scripts/message';
import store from '@/store/store';

let vm;

export default {
  data() {
    return {
      user: store.state.user,
    };
  },
  created() {
    vm = this;
  },
  methods: {
    isGuestUser,
    isSnsUser,
    isExistPicture,
    logout,
    deleteAccountPopup,
  },
};

function isGuestUser() {
  return vm.user.email == 'guest';
}

function isSnsUser() {
  return vm.user.snsType != null;
}

function isExistPicture() {
  return vm.user.picture != null;
}

function logout() {
  store.commit('deleteLoginUser');
}

function deleteAccountPopup(vm) {
  store.commit('openPopup', {
    name: 'message',
    popupName: 'deleteAccount',
    confirm: true,
    message: msg_confirm_delete_account,
  });
}
