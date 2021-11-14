import { stackflowState } from './initialState';
import types from 'actions/types';


export default function routeReducer(
  stackflow = stackflowState,
  { type, payload }
) {
  switch (type) {
    default:
      return setting;
  }
}
