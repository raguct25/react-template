import loginReducer from './Login.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
