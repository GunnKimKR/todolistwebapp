import { instance } from './index';

function signup(userForm) {
  console.log(userForm);
  return instance.post('/api/user', userForm);
}

export { signup };
