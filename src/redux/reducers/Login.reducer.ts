import { LoginState, LoginTypes } from '../model/login.model';
import { ADD_LOGIN_DATA, DELETE_LOGIN_DATA } from '../action-types/Login.types';

const INITIAL_STATE: LoginState = {
  email: '',
  password: '',
  isAuth: false,
};

function loginReducer(state = INITIAL_STATE, action: LoginTypes): LoginState {
  let myPayload = { ...action.payload };

  switch (action.type) {
    case ADD_LOGIN_DATA: {
      return {
        ...state,
        email: myPayload.email,
        password: myPayload.password,
        isAuth: true,
      };
    }

    case DELETE_LOGIN_DATA: {
      return {
        ...state,
        email: INITIAL_STATE.email,
        password: INITIAL_STATE.password,
        isAuth: INITIAL_STATE.isAuth,
      };
    }
    default:
      return state;
  }
}
export default loginReducer;
