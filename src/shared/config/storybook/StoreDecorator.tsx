import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from '../../../app/providers/StoreProvider/config/StateSchema';

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject>,
  ) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider initialState={state} asyncReducers={asyncReducers}>
        <StoryComponent />
      </StoreProvider>
    );
  };
