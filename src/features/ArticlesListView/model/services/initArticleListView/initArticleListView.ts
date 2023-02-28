import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlePageInited,
  getArticlePageLimit,
  getArticlePagePageNum,
} from '../../selectors/getArticlePageSelectors';
import { ArticlePageActions } from '../../slices/articlesListViewSlice';
import { fetchArticlesListView } from '../fetchArticlesListView/fetchArticlesListView';

export const initArticleListView = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articles/initArticleListView', (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const limit = getArticlePageLimit(getState());
  const page = getArticlePagePageNum(getState());
  const inited = getArticlePageInited(getState());

  if (!inited) {
    dispatch(ArticlePageActions.initialView());
    dispatch(fetchArticlesListView({ limit, page }));
  }
});
