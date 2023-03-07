import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortingActions } from 'features/ArticleSorting';
import { ArticleSortingBy } from 'features/ArticleSorting/model/types/articleSortingSchema';
import { SortingOrder } from 'shared/types/Sorting';
import { getArticleListInited } from '../../selectors/getArticleListSelectors';
import { ArticleListActions } from '../../slices/articleListSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticleList = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('article/initArticleList', (urlSearchParams, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const inited = getArticleListInited(getState());

  if (!inited) {
    const sortParams = urlSearchParams.get('sort') as ArticleSortingBy;
    const orderParams = urlSearchParams.get('order') as SortingOrder;
    const searchParams = urlSearchParams.get('search');

    if (sortParams) {
      dispatch(ArticleSortingActions.setSort(sortParams));
    }

    if (orderParams) {
      dispatch(ArticleSortingActions.setOrder(orderParams));
    }

    if (searchParams) {
      dispatch(ArticleSortingActions.setSearch(searchParams));
    }

    dispatch(ArticleListActions.initialView());
    dispatch(fetchArticlesList({}));
  }
});
