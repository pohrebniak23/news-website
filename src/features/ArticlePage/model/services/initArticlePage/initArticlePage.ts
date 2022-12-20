import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlePageInited,
  getArticlePageLimit,
  getArticlePagePageNum,
} from '../../selectors/getArticlePageSelectors';
import { ArticlePageActions } from '../../slices/ArticlePageSlice';
import { fetchArticlePage } from '../fetchArticlePage/fetchArticlePage';

export const initArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlePage/initArticlePage', (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const limit = getArticlePageLimit(getState());
  const page = getArticlePagePageNum(getState());
  const inited = getArticlePageInited(getState());

  if (!inited) {
    dispatch(ArticlePageActions.initialView());
    dispatch(fetchArticlePage({ limit, page }));
  }
});
