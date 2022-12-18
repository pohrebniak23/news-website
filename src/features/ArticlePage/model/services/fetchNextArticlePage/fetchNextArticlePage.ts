import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlePageHasMore,
  getArticlePageLimit,
  getArticlePageLoading,
  getArticlePagePageNum,
} from '../../selectors/getArticlePageSelectors';
import { ArticlePageActions } from '../../slices/ArticlePageSlice';
import { fetchArticlePage } from '../fetchArticlePage/fetchArticlePage';

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlePage/fetchNextArticlePage', (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const limit = getArticlePageLimit(getState());
  const page = getArticlePagePageNum(getState());
  const hasMore = getArticlePageHasMore(getState());
  const isLoading = getArticlePageLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(ArticlePageActions.setPage(page + 1));
    dispatch(fetchArticlePage({ page: page + 1, limit }));
  }
});
