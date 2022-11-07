import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginPassworrd = (state: StateSchema) => {
  return state?.loginForm?.password || '';
};
