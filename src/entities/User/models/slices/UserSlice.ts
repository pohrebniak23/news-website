import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {};

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {},
});

export const { reducer: UserReducer, actions: UserActions } = UserSlice;
