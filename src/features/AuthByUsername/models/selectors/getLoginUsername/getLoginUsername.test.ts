import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test.ts', () => {
  test('state with password value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user1',
      },
    };

    expect(getLoginUsername(state as StateSchema)).toBe('user1');
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
