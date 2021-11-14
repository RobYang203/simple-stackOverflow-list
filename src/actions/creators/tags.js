import types from '../types';

export const getTagListAction = (payload) => ({
  type: types.GET_TAG_LIST,
  payload,
});

export const getTagListSuccessAction = (payload) => ({
  type: types.GET_TAG_LIST_SUCCESS,
  payload,
});

export const getTagListErrorAction = (payload) => ({
  type: types.GET_TAG_LIST_ERROR,
  payload,
});
