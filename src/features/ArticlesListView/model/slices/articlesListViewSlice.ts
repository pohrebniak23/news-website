import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleView } from 'entities/Article/model/types/article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const articlesListViewSlice = createSlice({
  name: 'article/articlesListViewSlice',
  initialState: {
    view: ArticleView.LIST,
  },
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initialView: (state) => {
      const view = localStorage.getItem(
        ARTICLE_VIEW_LOCALSTORAGE_KEY,
      ) as ArticleView;

      state.view = view;
    },
  },
});

export const {
  reducer: ArticleListViewReducer,
  actions: ArticleListViewActions,
} = articlesListViewSlice;
