import { deleteAccount, getOauthUser } from '@/api/user';
import { fetchList } from '@/api/todo';

export default {
  fnDeleteAccount() {
    deleteAccount(this.state.user.userId);
  },
  fnGetOauthUser(state, userId) {
    getOauthUser(userId);
  },
  fnFetchList(state, param) {
    fetchList(param);
  },
};
