import axios from 'axios';

const instance = createInstance();

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

export { instance };
