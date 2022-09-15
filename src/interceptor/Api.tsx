import axios from 'axios';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';

// const state = useSelector((state: any) => state.login);

const Api = axios.create({
  baseURL: 'http://192.168.1.239:3001',
  // headers: {
  //   'content-type': 'application/json',
  // },
});

const state = store.getState();
console.log('state', state.login.authorization);

Api.interceptors.request.use(
  (request: any) => {
    // request.headers['authorization'] = state.login.authorization;
    if (state.login.authorization) {
      request.headers['authorization'] = state.login.authorization;
    }

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
      console.log('Not Found');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default Api;
