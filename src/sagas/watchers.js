import { takeLatest } from "@redux-saga/core/effects";
import types from 'actions/types';
import { getTagsListResult } from "apis/tags";
import { getQuestionListSaga } from "./questions";

export function* watchGetQuestionListSaga(){
  yield takeLatest(types.GET_QUESTION_LIST , getQuestionListSaga);
}

export function* watchGetTagListSaga(){
  yield takeLatest(types.GET_TAG_LIST , getTagsListResult);
}