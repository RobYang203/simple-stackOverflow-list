import axios from 'axios';

const server = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  'Content-Type': 'application/json',
});

server.interceptors.request.use((config) => {

  if (config.method === 'get') {
    console.log(
      '🚀 ~ file: index.js ~ line 9 ~ server.interceptors.request.use ~ config',
      config
    );
    config.params = {
      ...config.params,
      site: 'stackoverflow',
    };
  }
  return config;
});

export const getServer = () => server;
export default server;
