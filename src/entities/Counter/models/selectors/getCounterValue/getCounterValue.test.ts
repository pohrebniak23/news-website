import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounter', () => {
  test('Test for counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 30,
      },
    };

    expect(getCounterValue(state as StateSchema)).toEqual(30);
  });
});
