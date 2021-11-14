import { messageState } from './initialState';
import types from 'actions/types';
import getTime from 'date-fns/getTime';

const sendMessage = (status, text) => ({
  msgKey: getTime(new Date()),
  status,
  text,
});

export default function routeReducer(message = messageState, { type, payload }) {
  switch (type) {
    case types.SEND_MESSAGE:
      return sendMessage(payload.status, payload.text);
    default:
      return message;
  }
}
