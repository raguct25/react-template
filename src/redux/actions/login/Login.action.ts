import {
  ADD_LOGIN_DATA,
  DELETE_LOGIN_DATA,
  JWT_TOKEN,
} from '../../action-types/Login.types';

export const addLoginData = (data: any) => ({
  payload: data,
  type: ADD_LOGIN_DATA,
});

export const jwtToken = (data: any) => ({
  payload: data,
  type: JWT_TOKEN,
});

export const logoutAction = () => ({
  type: DELETE_LOGIN_DATA,
});
