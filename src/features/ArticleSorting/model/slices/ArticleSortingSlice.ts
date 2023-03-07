import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortingOrder } from 'shared/types/Sorting';
import {
  ArticleSortingBy,
  ArticleSortingSchema,
} from '../types/articleSortingSchema';

const initialState: ArticleSortingSchema = {
  order: 'desc',
  title: '',
  sort: ArticleSortingBy.CREATED,
};

const articleSortingSlice = createSlice({
  name: 'article/articleSortingSlice',
  initialState,
  reducers: {
    setOrder: (state, { payload }: PayloadAction<SortingOrder>) => {
      state.order = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.title = payload;
    },
    setSort: (state, { payload }: PayloadAction<ArticleSortingBy>) => {
      state.sort = payload;
    },
  },
});

export const {
  reducer: ArticleSortingReducer,
  actions: ArticleSortingActions,
} = articleSortingSlice;
