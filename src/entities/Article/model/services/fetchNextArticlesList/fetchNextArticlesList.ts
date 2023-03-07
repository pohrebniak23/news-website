import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import {
  getArticleListHasMore,
  getArticleListLoading,
  getArticleListPageNum,
} from '../../selectors/getArticleListSelectors';
import { ArticleListActions } from '../../slices/articleListSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesList = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articles/fetchNextArticlesList', (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const page = getArticleListPageNum(getState());
  const hasMore = getArticleListHasMore(getState());
  const isLoading = getArticleListLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(ArticleListActions.setPage(page + 1));
    dispatch(fetchArticlesList({}));
  }
});
