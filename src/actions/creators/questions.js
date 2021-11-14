import types from '../types';

export const getQuestionListAction = (payload) => ({
  type: types.GET_QUESTION_LIST,
  payload,
});
