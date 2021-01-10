import { todoApi } from '@/api/api';
import store from '@/store/store';
import router from '@/router/router';

async function fetchList(param) {
  await todoApi
    .get(`/user/${param.userId}`, {
      params: param,
    })
    .then(res => {
      router.push('/main');
    })
    .catch(() => {
      //
    });
}

async function addTodo(todoForm) {
  await todoApi
    .post('', todoForm)
    .then(() => {
      // store.commit('openPopup', {
      //   name: 'message',
      //   message: 'Your Schedule is Registered Successfully',
      // });
    })
    .catch(error => {
      store.commit('openPopup', {
        name: 'message',
        message: error.response.data.error.errorMessage || msg_server_error,
      });
    });
}

export { fetchList, addTodo };
