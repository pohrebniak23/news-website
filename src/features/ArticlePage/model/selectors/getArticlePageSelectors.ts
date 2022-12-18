import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article/model/types/article';

export const getArticlePageView = (state: StateSchema) =>
  state.articlePage?.view || ArticleView.TILE;

export const getArticlePageError = (state: StateSchema) =>
  state.articlePage?.error || '';

export const getArticlePageLoading = (state: StateSchema) =>
  state.articlePage?.isLoading || false;

export const getArticlePageLimit = (state: StateSchema) =>
  state.articlePage?.limit || 9;

export const getArticlePagePageNum = (state: StateSchema) =>
  state.articlePage?.page || 1;

export const getArticlePageHasMore = (state: StateSchema) =>
  state.articlePage?.hasMore;
