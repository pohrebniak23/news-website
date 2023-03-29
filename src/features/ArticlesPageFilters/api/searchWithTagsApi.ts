import { Article, ArticleTag } from 'entities/Article';
import { newsApi } from 'shared/api/newsApi';

const searchWithTagsApi = newsApi.injectEndpoints({
  endpoints: (build) => ({
    getArticlesByTag: build.query<Article[], ArticleTag>({
      query: (tag) => ({
        url: '/articles',
        params: {
          _type: tag,
        },
      }),
    }),
  }),
});

export const useGetArticlesByTag = searchWithTagsApi.useGetArticlesByTagQuery;
