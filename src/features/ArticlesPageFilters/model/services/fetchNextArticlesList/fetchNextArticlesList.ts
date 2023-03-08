import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getFiltersHasMore,
  getFiltersLoading,
  getFiltersPageNum,
} from '../../selectors/getArticlesPageFiltersSelector';
import { ArticlesPageFiltersActions } from '../../slices/ArticlesPageFiltersSlice';
import { fetchArticlesPageWithFilters } from '../fetchArticlesPageWithFilters/fetchArticlesPageWithFilters';

export const fetchNextArticlesList = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articles/fetchNextArticlesList', (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const page = getFiltersPageNum(getState());
  const hasMore = getFiltersHasMore(getState());
  const isLoading = getFiltersLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(ArticlesPageFiltersActions.setPage(page + 1));
    dispatch(fetchArticlesPageWithFilters({}));
  }
});
