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
      text: message,
    },
  };
};

export function* getQuestionListSaga({ payload }) {
  try {
    const { data } = yield call(getQuestionListResult, payload);
    yield put(OkGetList(data));
  } catch (error) {
    yield put(ErrorGetList(error.response?.data.data.message || error.message));
  }
}
