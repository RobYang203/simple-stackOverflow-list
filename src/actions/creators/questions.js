import types from '../types';

export const getQuestionListAction = (payload) => ({
  type: types.GET_QUESTION_LIST,
  payload: {
    ...payload,
    pagesize: 20,
  },
});

export const initialGetQuestionListAction = (payload) => ({
  type: types.INIT_GET_QUESTION_LIST,
  payload: {
    ...payload,
    pagesize: 20,
    page: 1
  },
});