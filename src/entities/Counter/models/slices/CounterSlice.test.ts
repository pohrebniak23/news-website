import { CounterSchema } from '../types/CounterSchema';
import { CounterActions, CounterSlice } from './CounterSlice';

describe('counterSlice', () => {
  test('Succes test for increment', () => {
    const state: CounterSchema = { value: 6 };

    expect(CounterSlice.reducer(state, CounterActions.increment())).toEqual({
      value: 7,
    });
  });

  test('Success test for decrement', () => {
    const state: CounterSchema = { value: 2 };

    expect(CounterSlice.reducer(state, CounterActions.decrement())).toEqual({
      value: 1,
    });
  });

  test('Success test with empty state', () => {
    expect(CounterSlice.reducer(undefined, CounterActions.decrement())).toEqual(
      {
        value: -1,
      },
    );
  });
});
