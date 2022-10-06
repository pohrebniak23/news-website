import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('Test for counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 30,
      },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 30 });
  });
});
