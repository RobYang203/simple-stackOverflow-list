import { call, put } from '@redux-saga/core/effects';
import { getQuestionListResult } from 'apis/question';
import types from 'actions/types';

const OkGetList = (payload) => {
  return {
    type: types.GET_QUESTION_LIST_SUCCESS,
    payload,
  };
};

const ErrorGetList = (message) => {
  return {
    type: types.GET_QUESTION_LIST_ERROR,
    globalMessage: {
      status: 'error',
      message,
    },
  };
};

export function* getQuestionListSaga({ payload }) {
  try {
    const res = yield call(getQuestionListResult, payload);
    put(OkGetList(res));
  } catch (error) {
    put(ErrorGetList(error.response.data.data.message))
  }
}
