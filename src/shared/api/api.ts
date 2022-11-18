import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../const/locaclStorage';

const baseURL = IS_DEV ? 'http://localhost:8000' : '';

export const $api = axios.create({
  baseURL,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
