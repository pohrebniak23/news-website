import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:10000',
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (token) {
        headers.set('authorization', token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
