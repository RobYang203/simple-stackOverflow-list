import { combineReducers } from 'redux';
import setting from './settingReducer';
import message from './messageReducer';
import questions from './questionsReducer';
import tags from './tagsReducer';

const appReducer = combineReducers({
  setting,
  message,
  questions,
  tags
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
