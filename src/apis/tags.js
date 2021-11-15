import server from './';

export const getTagListResult = async (payload) => {
  const res = await server.get('/tags', {
    params: payload,
  });

  return res;
};
