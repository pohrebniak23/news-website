import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
  test('Test for success login', async () => {
    const loginFormData = {
      username: 'user',
      password: '123456',
    };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: loginFormData }));

    const result = await thunk.callThunk(loginFormData);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(5);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.meta.arg).toEqual(loginFormData);
    expect(result.payload).toEqual(loginFormData);
  });

  test('Test for error login', async () => {
    const loginFormData = {
      username: 'user',
      password: '123456',
    };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.reject());

    const result = await thunk.callThunk(loginFormData);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
