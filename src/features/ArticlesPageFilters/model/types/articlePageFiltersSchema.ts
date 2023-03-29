import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleTag, ArticleView } from 'entities/Article';
import { SortingOrder } from 'shared/types/Sorting';

export enum ArticleSortingBy {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created',
}

export interface ArticlesPageFiltersSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;

  // paginate
  limit: number;
  page: number;
  hasMore: boolean;
  sort: ArticleSortingBy;
  search: string;
  order: SortingOrder;
  view: ArticleView;
  type: ArticleTag;

  _inited: boolean;
}
