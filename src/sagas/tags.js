import { call, put } from '@redux-saga/core/effects';
import types from 'actions/types';
import { getTagsListResult } from 'apis/tags';

const OkGetList = (payload) => {
  return {
    type: types.GET_TAG_LIST_SUCCESS,
    payload,
  };
};

const ErrorGetList = (message) => {
  return {
    type: types.GET_TAG_LIST_ERROR,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* getTagListSaga({ payload }) {
  try {
    const { data } = yield call(getTagsListResult, payload);
    yield put(OkGetList(data));
  } catch (error) {
    yield put(ErrorGetList(error.response?.data.data.message || error.message));
  }
}
