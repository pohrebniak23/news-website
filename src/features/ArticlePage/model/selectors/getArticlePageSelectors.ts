import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article/model/types/article';

export const getArticlePageView = (state: StateSchema) =>
  state.articlePage?.view || ArticleView.TILE;

export const getArticlePageError = (state: StateSchema) =>
  state.articlePage?.error || '';

export const getArticlePageLoading = (state: StateSchema) =>
  state.articlePage?.isLoading || false;
