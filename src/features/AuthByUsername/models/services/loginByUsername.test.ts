import axios from 'axios';
import { UserActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

describe('loginByUsername.test', () => {
  test('Test for success login', async () => {
    const userData = {
      id: '1',
      username: 'user',
    };

    const loginFormData = {
      username: 'user',
      password: '123456',
    };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(loginFormData);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(
      UserActions.setAuthData(userData),
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(5);
    expect(result.meta.arg).toEqual(loginFormData);
    expect(result.payload).toEqual(userData);
  });

  test('Test for error login', async () => {
    const loginFormData = {
      username: 'user',
      password: '123456',
    };

    mockedAxios.post.mockReturnValue(Promise.reject());

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(loginFormData);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
