import { tagsState } from './initialState';
import types from 'actions/types';

export default function routeReducer(tags = tagsState, { type, payload }) {
  switch (type) {
    case types.GET_TAG_LIST_SUCCESS:
      return { ...tags, items: [...payload] };
    case types.GET_TAG_LIST_ERROR:
    case types.GET_TAG_LIST:
    default:
      return tags;
  }
}
