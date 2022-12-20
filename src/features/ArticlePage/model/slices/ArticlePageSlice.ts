import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticlePage } from '../services/fetchArticlePage/fetchArticlePage';
import { ArticlePageSchema } from '../types/ArticlePageSchema';

const articlePageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticlePageData = articlePageAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlePageAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlePageAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.TILE,
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initialView: (state) => {
      const view = localStorage.getItem(
        ARTICLE_VIEW_LOCALSTORAGE_KEY,
      ) as ArticleView;

      state.view = view;
      state.limit = view === ArticleView.LIST ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlePage.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticlePage.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlePageAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
        },
      )
      .addCase(fetchArticlePage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: ArticlePageReducer, actions: ArticlePageActions } =
  articlePageSlice;
