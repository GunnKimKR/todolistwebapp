import { todoApi } from '@/api/api';

async function fetchList(param) {
  await todoApi
    .get(`/user/${param.userId}`, {
      params: param,
    })
    .then(res => {
      //
    })
    .catch(() => {
      //
    });
}

export { fetchList };
