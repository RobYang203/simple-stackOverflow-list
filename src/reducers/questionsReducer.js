import { questionsState } from './initialState';
import types from 'actions/types';

const geQuestionList = (questions, payload) => {
  const items = [...questions.items, ...payload.items];
  return {
    ...questions,
    hasMore: payload.has_more,
    items,
  };
};

export default function routeReducer(
  questions = questionsState,
  { type, payload }
) {
  switch (type) {
    case types.GET_QUESTION_LIST_SUCCESS:
      return geQuestionList(questions, payload);
    case types.INIT_GET_QUESTION_LIST_SUCCESS:
      return geQuestionList(questionsState, payload);
    case types.GET_QUESTION_LIST_ERROR:
    case types.GET_QUESTION_LIST:
    default:
      return questions;
  }
}
