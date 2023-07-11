import { Article, ArticleTag, ArticleView } from 'entities/Article';
import { newsApi } from 'shared/api/newsApi';
import { SortingOrder } from 'shared/types/Sorting';

export enum ArticleSortingBy {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created',
}

interface ArticlesFiltersProps {
  tag?: ArticleTag;
  limit?: number;
  page?: number;
  hasMore?: boolean;
  sort?: ArticleSortingBy;
  search?: string;
  order?: SortingOrder;
  view?: ArticleView;
  type?: ArticleTag;
}

const articlesFiltersApi = newsApi.injectEndpoints({
  endpoints: (build) => ({
    getArticlesWithFilters: build.query<Article[], ArticlesFiltersProps>({
      query: ({
        tag = ArticleTag.ALL,
        page = 1,
        limit = 20,
        sort = ArticleSortingBy.CREATED,
        order = 'desc',
        search = '',
      }: ArticlesFiltersProps) => ({
        url: '/articles',
        params: {
          type: tag === ArticleTag.ALL ? undefined : tag,
          _page: page,
          _limit: limit,
          _sort: sort,
          order,
          q: search,
          _expand: 'user',
        },
      }),
    }),
  }),
});

export const {
  useGetArticlesWithFiltersQuery,
  useLazyGetArticlesWithFiltersQuery,
} = articlesFiltersApi;
