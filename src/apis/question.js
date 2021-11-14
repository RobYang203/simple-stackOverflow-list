import server from './';

export const getQuestionListResult = async (payload) => {
  const res = await server.get('/questions', {
    params: payload,
  });

  return res;
};
