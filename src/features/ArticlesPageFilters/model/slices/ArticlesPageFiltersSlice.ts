import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleType, ArticleView } from 'entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { SortingOrder } from 'shared/types/Sorting';
import { fetchArticlesPageWithFilters } from '../services/fetchArticlesPageWithFilters/fetchArticlesPageWithFilters';
import {
  ArticleSortingBy,
  ArticlesPageFiltersSchema,
} from '../types/articlePageFiltersSchema';

const ArticlesPageFiltersAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleList =
  ArticlesPageFiltersAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articlesPageFilters || ArticlesPageFiltersAdapter.getInitialState(),
  );

const ArticlesPageFiltersSlice = createSlice({
  name: 'article/articleListSlice',
  initialState:
    ArticlesPageFiltersAdapter.getInitialState<ArticlesPageFiltersSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
      page: 1,
      limit: 10,
      hasMore: true,
      order: 'desc',
      search: '',
      sort: ArticleSortingBy.VIEWS,
      view: ArticleView.TILE,
      type: ArticleType.ALL,
      _inited: false,
    }),
  reducers: {
    setOrder: (state, { payload }: PayloadAction<SortingOrder>) => {
      state.order = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setSort: (state, { payload }: PayloadAction<ArticleSortingBy>) => {
      state.sort = payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initialView: (state) => {
      const view = localStorage.getItem(
        ARTICLE_VIEW_LOCALSTORAGE_KEY,
      ) as ArticleView;

      state.limit = view === ArticleView.LIST ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesPageWithFilters.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          ArticlesPageFiltersAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesPageWithFilters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state?.limit;

        if (action.meta.arg.replace) {
          ArticlesPageFiltersAdapter.setAll(state, action.payload);
        } else {
          ArticlesPageFiltersAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesPageWithFilters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: ArticlesPageFiltersReducer,
  actions: ArticlesPageFiltersActions,
} = ArticlesPageFiltersSlice;
