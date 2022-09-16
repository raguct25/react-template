import { LoginState, LoginTypes } from '../model/login.model';
import {
  ADD_LOGIN_DATA,
  DELETE_LOGIN_DATA,
  JWT_TOKEN,
} from '../action-types/Login.types';
import Api from '../../interceptor/Api';

const INITIAL_STATE: LoginState = {
  email: '',
  password: '',
  authorization: '',
};

function loginReducer(state = INITIAL_STATE, action: LoginTypes): LoginState {
  let myPayload = { ...action.payload };
  console.log('myPayload', myPayload);

  switch (action.type) {
    case ADD_LOGIN_DATA: {
      return {
        ...state,
        email: myPayload.email,
        password: myPayload.password,
        authorization: myPayload.token,
      };
    }

    case DELETE_LOGIN_DATA: {
      return {
        ...state,
        email: INITIAL_STATE.email,
        password: INITIAL_STATE.password,
        authorization: INITIAL_STATE.authorization,
      };
    }

    default:
      return state;
  }
}
export default loginReducer;
