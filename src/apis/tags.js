import server from './';

export const getTagsListResult = async (payload) => {
  const res = await server.get('/tags', {
    params: payload,
  });

  return res;
};
