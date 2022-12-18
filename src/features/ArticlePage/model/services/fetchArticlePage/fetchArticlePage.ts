import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

interface FetchArticlePageProps {
  limit: number;
  page: number;
}

export const fetchArticlePage = createAsyncThunk<
  Article[],
  FetchArticlePageProps,
  ThunkConfig<string>
>('articlePage/fetchArticlePage', async (props, thunkAPI) => {
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
