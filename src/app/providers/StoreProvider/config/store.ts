import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUsername/models';
import { StateSchema } from './StateSchema';

export const createReduxStore = (inititalState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    user: UserReducer,
    login: LoginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: inititalState,
  });
};
