import {
  startFetchingAction,
  stopFetchingAction,
} from 'actions/creators/global';
import { basicAsyncActionTypes } from 'actions/types';

const responseRegExp = /_SUCCESS|_ERROR/;

export const startFetchingMiddleware = (store) => (next) => (action) => {
  const isBasicAsyncAction = basicAsyncActionTypes.includes(action.type);
  if (isBasicAsyncAction) {
    store.dispatch(startFetchingAction(action.type));
  }
  return next(action);
};

export const stopFetchingMiddleware = (store) => (next) => (action) => {
  const isResponseAction = responseRegExp.test(action.type);

  const basicType = action.type.replace(responseRegExp, '');
  const isBasicAsyncAction = basicAsyncActionTypes.includes(basicType);

  if (isBasicAsyncAction && isResponseAction) {
    store.dispatch(stopFetchingAction(basicType));
  }
  return next(action);
};
