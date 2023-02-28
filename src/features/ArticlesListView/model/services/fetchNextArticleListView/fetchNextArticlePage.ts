import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlePageHasMore,
  getArticlePageLimit,
  getArticlePageLoading,
  getArticlePagePageNum,
} from '../../selectors/getArticlePageSelectors';
import { ArticlePageActions } from '../../slices/articlesListViewSlice';
import { fetchArticlesListView } from '../fetchArticlesListView/fetchArticlesListView';

export const fetchNextArticleListView = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articles/fetchNextArticleListView', (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const limit = getArticlePageLimit(getState());
  const page = getArticlePagePageNum(getState());
  const hasMore = getArticlePageHasMore(getState());
  const isLoading = getArticlePageLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(ArticlePageActions.setPage(page + 1));
    dispatch(fetchArticlesListView({ page: page + 1, limit }));
  }
});
