import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from '../../../app/providers/StoreProvider/config/StateSchema';

export const StoreDecorator =
  (
    store: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  ) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider initialState={store} asyncReducers={asyncReducers}>
        <StoryComponent />
      </StoreProvider>
    );
  };
