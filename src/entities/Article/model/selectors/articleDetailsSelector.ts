import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsLoading = (state: StateSchema) =>
  state?.articleDetails?.isLoading || false;

export const getArticleDetailsError = (state: StateSchema) =>
  state?.articleDetails?.error;

export const getArticleDetailsData = (state: StateSchema) =>
  state?.articleDetails?.data;
