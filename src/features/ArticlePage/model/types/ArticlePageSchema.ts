import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article/model/types/article';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
  view: ArticleView;

  // paginate
  limit?: number;
  page: number;
  hasMore: boolean;

  _inited: boolean;
}
