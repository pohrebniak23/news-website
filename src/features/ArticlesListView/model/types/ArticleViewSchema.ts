import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article/model/types/article';

export interface ArticleViewSchema extends EntityState<Article> {
  view: ArticleView;
}
