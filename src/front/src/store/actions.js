import { deleteAccount, getOauthUser } from '@/api/user';
import { fetchList } from '@/api/todo';

export default {
  fnDeleteAccount() {
    deleteAccount(this.state.user.userId);
  },
  fnGetOauthUser(state, userId) {
    getOauthUser(userId);
  },
  async fnFetchList({ commit }, param) {
    const dataList = await fetchList(param);
    return dataList;
  },
};
