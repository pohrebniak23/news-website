import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StateSchemaKey } from '../../../../app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export function useDynamicReducerLoader(
  reducers: ReducersList,
  removeAfterUnmount: boolean = true,
) {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;
  const mountedReducers = store.reducerManager.getReducerMap();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
}
