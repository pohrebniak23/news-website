import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../const/localStorage';

const baseURL = IS_DEV ? 'http://localhost:8000' : '';

const getToken = () => {
  let token = null;
  const localStorage = window.localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (localStorage) {
    token = JSON.parse(localStorage);
  }

  return token;
};

export const $api = axios.create({
  baseURL,
});

$api.interceptors.request.use((config) => {
  if (config && config.headers) {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = getToken();
  }

  return config;
});
