import {combineReducers} from 'redux';
import authReducer from 'reducers/authReducer';
import userReducer from 'reducers/userReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
});

export default rootReducer;
