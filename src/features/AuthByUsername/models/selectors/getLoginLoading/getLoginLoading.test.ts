import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading.test.ts', () => {
  test('state with loading value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoginLoading(state as StateSchema)).toBe(true);
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginLoading(state as StateSchema)).toBe(false);
  });
});
