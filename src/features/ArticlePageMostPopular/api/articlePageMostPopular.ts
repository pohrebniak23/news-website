import { Article } from 'entities/Article';
import { newsApi } from 'shared/api/newsApi';

export const articlePageMostPopularApi = newsApi.injectEndpoints({
  endpoints: (build) => ({
    getMostPopularArticle: build.query<Article[], void>({
      query: () => ({
        url: '/articles',
        params: {
          _limit: 1,
          _order: 'desc',
          _sort: 'views',
          _expand: 'user',
        },
      }),
    }),
  }),
});

export const useMostPopularArticle =
  articlePageMostPopularApi.useGetMostPopularArticleQuery;
