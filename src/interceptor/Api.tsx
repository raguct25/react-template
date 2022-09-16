import axios from 'axios';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';

const Api = axios.create({
  baseURL: 'http://localhost:3001',
  // headers: {
  //   'content-type': 'application/json',
  // },
});

const state = store.getState();
console.log('state', state.login.authorization);

Api.interceptors.request.use(
  (request: any) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Api.interceptors.response.use(
  (response: any) => {
    console.log('response', response);

    return response;
  },
  (error) => {
    if (error.response.status !== 200) {
      window.location.href = '/login';
      console.log('Not Found');
    }
    return Promise.reject(error);
  },
);

export default Api;
