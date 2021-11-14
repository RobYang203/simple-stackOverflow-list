import { combineReducers } from 'redux';
import setting from './settingReducer';
import message from './messageReducer';

const appReducer = combineReducers({
  setting,
  message
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
