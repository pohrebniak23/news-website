import { EntityState } from '@reduxjs/toolkit';
import { Article } from './article';

export interface ArticleListSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;

  // paginate
  limit?: number;
  page: number;
  hasMore: boolean;

  _inited: boolean;
}
