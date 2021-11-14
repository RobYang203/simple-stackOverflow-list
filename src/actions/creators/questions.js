import types from '../types';

export const getQuestionListAction = (payload) => ({
  type: types.GET_QUESTION_LIST,
  payload,
});

export const getQuestionListSuccessAction = (payload) => ({
  type: types.GET_QUESTION_LIST_SUCCESS,
  payload,
});

export const getQuestionListErrorAction = (payload) => ({
  type: types.GET_QUESTION_LIST_ERROR,
  payload,
});

