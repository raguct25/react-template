import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import environment from './environment';
// import { store } from '../redux/store';

interface ErrorData {
  errors: string[];
}

const http = axios.create({
  baseURL: environment.baseURL,
});

function onRequestSuccess(config: AxiosRequestConfig): AxiosRequestConfig {
  config.headers = { ...config.headers };
  //if use authenticate token you will get token from store
  // config.headers = { ...config.headers, ...getAuthHeaders() };
  return config;
}

function onResponseSuccess(response: AxiosResponse) {
  //if use authenticate token you will get token from store
  //   setAuthHeadersInLocalStorage(response.headers);
  const { data } = response;
  return data;
}

function onResponseError(error: AxiosError) {
  const message = parseErrorMessage(error.response as AxiosResponse<ErrorData>);

  if (message) {
    error.message = message;
  }
  //error logic here
  return Promise.reject(error);
}

function parseErrorMessage(errResponse: AxiosResponse<ErrorData>): string {
  return errResponse && errResponse.data ? errResponse.data.errors[0] : '';
}

//if use authenticate token you will get token from store and you should refactor code

// function setAuthHeadersInLocalStorage(headers: any): void {
//   const authToken: any = {};
//   AUTH_HEADER_KEYS.forEach((key) => {
//     authToken[key] = headers[key];
//   });
//   store.dispatch(storeAuthToken(authToken));
// }

http.interceptors.request.use(onRequestSuccess);
http.interceptors.response.use(onResponseSuccess, onResponseError);

export { http };
