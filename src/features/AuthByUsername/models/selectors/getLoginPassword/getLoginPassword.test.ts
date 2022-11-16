import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test.ts', () => {
  test('state with password value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123456',
      },
    };

    expect(getLoginPassword(state as StateSchema)).toBe('123456');
  });

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
