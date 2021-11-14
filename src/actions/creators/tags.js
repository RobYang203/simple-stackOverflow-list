import types from '../types';

export const getTagListAction = (payload) => ({
  type: types.GET_TAG_LIST,
  payload:{
    pagesize: 10,
    ...payload
  },
});