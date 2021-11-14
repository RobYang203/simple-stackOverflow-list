import { takeLatest } from '@redux-saga/core/effects';
import types from 'actions/types';
import { getTagListSaga } from './tags';
import { getQuestionListSaga, getInitialQuestionListSaga } from './questions';

export function* watchGetQuestionListSaga() {
  yield takeLatest(types.GET_QUESTION_LIST, getQuestionListSaga);
}

export function* watchInitialGetQuestionListSaga() {
  yield takeLatest(types.INIT_GET_QUESTION_LIST, getInitialQuestionListSaga);
}

export function* watchGetTagListSaga() {
  yield takeLatest(types.GET_TAG_LIST, getTagListSaga);
}
