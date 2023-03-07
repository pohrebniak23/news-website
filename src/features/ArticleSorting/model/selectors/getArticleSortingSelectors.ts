import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortingBy } from '../types/articleSortingSchema';

export const getArticleSortingOrder = (state: StateSchema) => {
  return state.articleSorting?.order ?? 'asc';
};

export const getArticleSortingBy = (state: StateSchema) => {
  return state.articleSorting?.sort ?? ArticleSortingBy.VIEWS;
};

export const getArticleSearchTitle = (state: StateSchema) => {
  return state.articleSorting?.title ?? '';
};
