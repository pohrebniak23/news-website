import { createSlice } from '@reduxjs/toolkit';
import { ArticlePageRecomendationsSchema } from '../types/ArticlePageRecomendationsSchema';
import { fetchArticlesPageRecomendation } from '../services/fetchArticlePageRecomendations';

const initialState: ArticlePageRecomendationsSchema = {
  recomendations: [],
};

const articlePageRecomendationsSlice = createSlice({
  name: 'article/ArticlePageRecomendations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesPageRecomendation.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesPageRecomendation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recomendations = action.payload;
      })
      .addCase(fetchArticlesPageRecomendation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: ArticlePageRecomendationsReducer,
  actions: ArticlePageRecomendationsActions,
} = articlePageRecomendationsSlice;
