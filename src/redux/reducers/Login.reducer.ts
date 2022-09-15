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
  isAuth: false,
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
        isAuth: true,
        authorization: myPayload.token,
      };
    }

    case DELETE_LOGIN_DATA: {
      return {
        ...state,
        email: INITIAL_STATE.email,
        password: INITIAL_STATE.password,
        isAuth: INITIAL_STATE.isAuth,
        authorization: INITIAL_STATE.authorization,
      };
    }

    // case JWT_TOKEN: {
    //   console.log('myPayload', myPayload);
    //   return {
    //     ...state,
    //     authorization: myPayload.authorization,
    //   };
    // }

    default:
      return state;
  }
}
export default loginReducer;
