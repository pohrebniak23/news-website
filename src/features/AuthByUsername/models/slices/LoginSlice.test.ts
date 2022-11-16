import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { LoginActions, LoginReducer } from './LoginSlice';

describe('LoginSlice.test', () => {
  test('Test for username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'user',
    };

    expect(
      LoginReducer(state as LoginSchema, LoginActions.setUsername('user123')),
    ).toEqual({
      username: 'user123',
    });
  });

  test('Test for password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '',
    };

    expect(
      LoginReducer(state as LoginSchema, LoginActions.setPassword('123')),
    ).toEqual({
      password: '123',
    });
  });
});
