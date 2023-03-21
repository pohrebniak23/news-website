import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, UserActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
  const { dispatch, extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.post<User>('/login', authData);

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(UserActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    return rejectWithValue('Error');
  }
});
