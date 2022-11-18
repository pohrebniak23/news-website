import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api/api';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export const createReduxStore = (
  inititalState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: CounterReducer,
    user: UserReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: inititalState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
    // middleware(getDefaultMiddlewares) => [
    //   ...getDefaultMiddlewares(),
    //   thunk.withExtraArgument({
    //     api: $api,
    //     navigate,
    //   }),
    // ],
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk: {
    //   extraArgument: {
    //     api: $api,
    //   },
    // }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
