import { StateSchema } from 'app/providers/StoreProvider';

export const LoginSelector = (state: StateSchema) => {
  return state?.login;
};
