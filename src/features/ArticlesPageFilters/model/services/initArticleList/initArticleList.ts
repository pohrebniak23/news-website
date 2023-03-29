import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleTag, ArticleView } from 'entities/Article';
import { SortingOrder } from 'shared/types/Sorting';
import { getFiltersInited } from '../../selectors/getArticlesPageFiltersSelector';
import { ArticlesPageFiltersActions } from '../../slices/ArticlesPageFiltersSlice';
import { ArticleSortingBy } from '../../types/articlePageFiltersSchema';
import { fetchArticlesPageWithFilters } from '../fetchArticlesPageWithFilters/fetchArticlesPageWithFilters';

export const initArticleList = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('article/initArticleList', (urlSearchParams, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const inited = getFiltersInited(getState());

  if (!inited) {
    const sortParams = urlSearchParams.get('sort') as ArticleSortingBy;
    const orderParams = urlSearchParams.get('order') as SortingOrder;
    const searchParams = urlSearchParams.get('search');
    const typeParams = urlSearchParams.get('type') as ArticleTag;
    const viewParams = urlSearchParams.get('view') as ArticleView;

    if (sortParams) {
      dispatch(ArticlesPageFiltersActions.setSort(sortParams));
    }

    if (orderParams) {
      dispatch(ArticlesPageFiltersActions.setOrder(orderParams));
    }

    if (searchParams) {
      dispatch(ArticlesPageFiltersActions.setSearch(searchParams));
    }

    if (typeParams) {
      dispatch(ArticlesPageFiltersActions.setType(typeParams));
    }

    if (viewParams) {
      dispatch(ArticlesPageFiltersActions.setView(viewParams));
    }

    dispatch(ArticlesPageFiltersActions.initialView());
    dispatch(fetchArticlesPageWithFilters({}));
  }
});
