import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StateSchemaKey } from '../../../../app/providers/StoreProvider/config/StateSchema';

export function useDynamicReducerLoader(
  reducerName: StateSchemaKey,
  reducer: Reducer,
  removeAfterUnmount: boolean = true,
) {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add(reducerName, reducer);
    dispatch({ type: `@INIT ${reducerName} reducer` });

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(reducerName);
        dispatch({ type: `@DESTROY ${reducerName} reducer` });
      }
    };
    // eslint-disable-next-line
  }, []);
}
