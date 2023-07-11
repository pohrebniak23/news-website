import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticlesPageFiltersSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;

  // paginate

  _inited: boolean;
}
