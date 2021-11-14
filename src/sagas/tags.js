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
      message,
    },
  };
};

export function* getTagListSaga({ payload }) {
  try {
    const res = yield call(getTagsListResult, payload);
    put(OkGetList(res));
  } catch (error) {
    put(ErrorGetList(error.response.data.data.message))
  }
}
