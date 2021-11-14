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

export const getTagListAction = (payload) => ({
  type: types.GET_TAG_LIST,
  payload,
});

export const getTagListSuccessAction = (payload) => ({
  type: types.GET_TAG_LIST_SUCCESS,
  payload,
});

export const getTagListErrorAction = (payload) => ({
  type: types.GET_TAG_LIST_ERROR,
  payload,
});
