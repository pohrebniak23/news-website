import { Article } from 'entities/Article';
import { newsApi } from 'shared/api/newsApi';

const articleRecomendationsApi = newsApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomendationsList: build.query<Article[], string>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _expand: 'user',
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useGetArticleRecomedations =
  articleRecomendationsApi.useGetArticleRecomendationsListQuery;
