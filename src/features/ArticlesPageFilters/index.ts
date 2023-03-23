import {
  getFiltersError,
  getFiltersLoading,
  getFiltersView,
} from './model/selectors/getArticlesPageFiltersSelector';
import { fetchNextArticlesList } from './model/services/fetchNextArticlesList/fetchNextArticlesList';
import { initArticleList } from './model/services/initArticleList/initArticleList';
import {
  ArticlesPageFiltersActions,
  ArticlesPageFiltersReducer,
  getArticleList,
} from './model/slices/ArticlesPageFiltersSlice';
import { ArticlesPageFiltersSchema } from './model/types/articlePageFiltersSchema';
import { ArticlesPageFilters } from './ui/ArticlesPageFilters';

export {
  ArticlesPageFilters,
  ArticlesPageFiltersActions,
  ArticlesPageFiltersReducer,
  fetchNextArticlesList,
  getArticleList,
  getFiltersError as getArticlesPageFiltersError,
  getFiltersLoading as getArticlesPageFiltersLoading,
  getFiltersView as getArticlesPageFiltersView,
  initArticleList,
};

export type { ArticlesPageFiltersSchema };
