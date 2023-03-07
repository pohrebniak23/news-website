import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleListError = (state: StateSchema) =>
  state.articleList?.error || '';

export const getArticleListLoading = (state: StateSchema) =>
  state.articleList?.isLoading || false;

export const getArticleListLimit = (state: StateSchema) =>
  state.articleList?.limit || 9;

export const getArticleListPageNum = (state: StateSchema) =>
  state.articleList?.page || 1;

export const getArticleListHasMore = (state: StateSchema) =>
  state.articleList?.hasMore;

export const getArticleListInited = (state: StateSchema) =>
  state.articleList?._inited;
