import { todoApi } from '@/api/api';
import store from '@/store/store';
import bus from '@/scripts/bus';
import { msg_add_success } from '@/scripts/message';

async function fetchList(param) {
  return await todoApi.get(`/user/${param.userId}`, {
    params: param,
  });
}

async function addTodo(todoForm) {
  let success;
  bus.$emit('startSpinner');
  await todoApi
    .post('', todoForm)
    .then(() => {
      success = true;
      bus.$emit('endSpinner');
      bus.$emit('addTodo');
      store.commit('openPopup', {
        name: 'message',
        success: true,
        message: msg_add_success,
      });
    })
    .catch(error => {
      success = false;
      bus.$emit('endSpinner');
      store.commit('openPopup', {
        name: 'message',
        message: error.response.data.error.errorMessage || msg_server_error,
      });
    });
  return success;
}

export { fetchList, addTodo };
