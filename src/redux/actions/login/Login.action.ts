import { ADD_LOGIN_DATA } from '../../action-types/Login.types';

export const addLoginData = (data: any) => ({
  payload: data,
  type: ADD_LOGIN_DATA,
});
