/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { CommentType } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { AddNewCommentActions } from '../slices/addNewCommentSlice';
import { ArticleDetailsCommentsActions } from '../slices/articleDetailsCommentsSlice';

export const addNewCommentForArticle = createAsyncThunk<
  CommentType,
  string,
  ThunkConfig<string>
>(
  'articleDetailsComments/addNewCommentForArticle',
  async (commentText, thunkAPI) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !commentText || !article) {
      rejectWithValue('Error with initial data');
    }

    try {
      const response = await extra.api.post<CommentType>('/comments', {
        userId: userData?.id,
        articleId: article?.id,
        text: commentText,
      });

      if (!response.data) {
        rejectWithValue('Erorr with respone');
      }

      const newComment = {
        id: response.data.id,
        text: response.data.text,
        user: userData,
      };

      dispatch(ArticleDetailsCommentsActions.addNewComment(newComment));
      dispatch(AddNewCommentActions.setText(''));

      return response.data;
    } catch (e: any) {
      return rejectWithValue(`Error ${e.message}`);
    }
  },
);
