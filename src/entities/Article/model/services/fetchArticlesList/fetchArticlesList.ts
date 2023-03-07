import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
  getArticleSearchTitle,
  getArticleSortingBy,
  getArticleSortingOrder,
} from 'features/ArticleSorting';
import {
  getArticleListLimit,
  getArticleListPageNum,
} from '../../selectors/getArticleListSelectors';

interface FetchArticleListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>('articles/fetchArticlesList', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const limit = getArticleListLimit(getState());
  const page = getArticleListPageNum(getState());
  const sort = getArticleSortingBy(getState());
  const order = getArticleSortingOrder(getState());
  const search = getArticleSearchTitle(getState());

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('Error');
  }
});
