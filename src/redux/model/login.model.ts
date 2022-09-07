import { type } from 'os';

export interface LoginState {
  email: string;
  password: any;
  isAuth: boolean;
}

interface LoginAction {
  type: string;
  payload: any;
}

export type LoginTypes = LoginAction;
