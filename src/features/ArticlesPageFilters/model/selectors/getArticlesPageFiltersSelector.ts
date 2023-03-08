import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType, ArticleView } from 'entities/Article';
import { ArticleSortingBy } from '../types/articlePageFiltersSchema';

export const getFiltersError = (state: StateSchema) =>
  state.articlesPageFilters?.error || '';

export const getFiltersLoading = (state: StateSchema) =>
  state.articlesPageFilters?.isLoading || false;

export const getFiltersLimit = (state: StateSchema) =>
  state.articlesPageFilters?.limit || 9;

export const getFiltersPageNum = (state: StateSchema) =>
  state.articlesPageFilters?.page || 1;

export const getFiltersHasMore = (state: StateSchema) =>
  state.articlesPageFilters?.hasMore;

export const getFiltersInited = (state: StateSchema) =>
  state.articlesPageFilters?._inited;

export const getFiltersOrder = (state: StateSchema) => {
  return state.articlesPageFilters?.order ?? 'asc';
};

export const getFiltersBy = (state: StateSchema) => {
  return state.articlesPageFilters?.sort ?? ArticleSortingBy.VIEWS;
};

export const getFiltersTitle = (state: StateSchema) => {
  return state.articlesPageFilters?.search ?? '';
};

export const getFiltersView = (state: StateSchema) => {
  return state.articlesPageFilters?.view ?? ArticleView.LIST;
};

export const getFiltersType = (state: StateSchema) => {
  return state.articlesPageFilters?.type ?? ArticleType.IT;
};
