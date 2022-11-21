import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';
import { UserSchema } from '../types/UserSchema';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/const/locaclStorage';

const initialState: UserSchema = {};

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { reducer: UserReducer, actions: UserActions } = UserSlice;
