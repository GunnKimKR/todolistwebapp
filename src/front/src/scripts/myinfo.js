import { msg_confirm_delete_account } from '@/scripts/message';

function deleteAccountPopup(vm) {
  vm.$store.commit('openPopup', {
    name: 'message',
    popupName: 'deleteAccount',
    confirm: true,
    message: msg_confirm_delete_account,
  });
}

export { deleteAccountPopup };
