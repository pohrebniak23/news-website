import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

interface FetchArticlesListViewProps {
  limit: number;
  page: number;
}

export const fetchArticlesListView = createAsyncThunk<
  Article[],
  FetchArticlesListViewProps,
  ThunkConfig<string>
>('articles/fetchArticlesListView', async (props, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  const { limit, page } = props;

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
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
