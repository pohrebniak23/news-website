/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewCommentForArticle } from '../services/addNewCommentForArticle';
import { AddNewCommentSchema } from '../types/AddNewCommentSchema';

const initialState: AddNewCommentSchema = {
  postId: '',
  text: '',
  userId: '',
  error: undefined,
  isLoading: false,
};

const addNewCommentSlice = createSlice({
  name: 'addNewCommentsSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewCommentForArticle.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(addNewCommentForArticle.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addNewCommentForArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: AddNewCommentReducer, actions: AddNewCommentActions } =
  addNewCommentSlice;
