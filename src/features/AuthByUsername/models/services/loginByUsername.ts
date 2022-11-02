import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserActions } from 'entities/User';
import { LoginActions } from 'features/AuthByUsername/models/slices/LoginSlice';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/const/locaclStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      authData,
    );

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(UserActions.setAuthData(response.data));
    thunkAPI.dispatch(LoginActions.setUsername(''));
    thunkAPI.dispatch(LoginActions.setPassword(''));

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
