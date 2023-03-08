import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecomendations = (state: StateSchema) => {
  return state.articlePageRecomendations?.recomendations;
};
