import constants from 'flux-constants';

export const syncActionTypes = [
  'START_FETCHING',
  'STOP_FETCHING',
  'SEND_MESSAGE',
  'INIT_QUESTION_LIST'
];

export const basicAsyncActionTypes = ['GET_QUESTION_LIST', 'GET_TAG_LIST', 'INIT_GET_QUESTION_LIST'];

const asyncActionTypes = basicAsyncActionTypes.reduce((result, actionType) => {
  return [
    ...result,
    actionType,
    `${actionType}_SUCCESS`,
    `${actionType}_ERROR`,
  ];
}, []);

export default constants([...syncActionTypes, ...asyncActionTypes]);
