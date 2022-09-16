import { type } from 'os';

export interface LoginState {
  email: string;
  password: any;
  authorization: string;
}

interface LoginAction {
  type: string;
  payload: any;
}

export interface LoginReducerState {
  login: LoginState;
}

export type LoginTypes = LoginAction;
