import { ADD_LOGIN_DATA } from '../action-types/Login.types';
import { LoginState, LoginTypes } from '../model/login.model';

const INITIAL_STATE: LoginState = {
  email: '',
  password: '',
};

function loginReducer(state = INITIAL_STATE, action: LoginTypes): LoginState {
  let myPayload = { ...action.payload };

  switch (action.type) {
    case ADD_LOGIN_DATA: {
      return { ...state, email: myPayload.email, password: myPayload.password };
    }
    default:
      return state;
  }
}
export default loginReducer;
