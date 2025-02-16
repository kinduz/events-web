import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MKRF_APP_ORIGIN,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const apiKey = process.env.REACT_APP_MKRF_API_KEY;

    if (apiKey) {
      // eslint-disable-next-line no-param-reassign
      config.headers['X-API-KEY'] = `${apiKey}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
