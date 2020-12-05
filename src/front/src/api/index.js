import axios from 'axios';

const userApi = createInstance('/api/user');

function createInstance(url) {
  return axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
}

export { userApi };
