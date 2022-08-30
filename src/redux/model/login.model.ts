import { type } from 'os';

export interface LoginState {
  email: string;
  password: any;
}

interface LoginAction {
  type: string;
  payload: any;
}

export type LoginTypes = LoginAction;
