import { stackflowState } from './initialState';
import types from 'actions/types';

export default function routeReducer(
  stackflow = stackflowState,
  { type, payload }
) {
  switch (type) {
    case types.GET_QUESTION_LIST_SUCCESS:
    case types.GET_QUESTION_LIST_ERROR:
    case types.GET_QUESTION_LIST:
    case types.GET_TAG_LIST_SUCCESS:
    case types.GET_TAG_LIST_ERROR:
    case types.GET_TAG_LIST:
    default:
      return stackflow;
  }
}
