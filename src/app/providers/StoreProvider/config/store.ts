import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export const createReduxStore = (inititalState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    user: UserReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: inititalState,
  });
};
