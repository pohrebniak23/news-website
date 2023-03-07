import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleListInited } from '../../selectors/getArticleListSelectors';
import { ArticleListActions } from '../../slices/articleListSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticleList = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('article/initArticleList', (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const inited = getArticleListInited(getState());

  if (!inited) {
    dispatch(ArticleListActions.initialView());
    dispatch(fetchArticlesList({}));
  }
});
