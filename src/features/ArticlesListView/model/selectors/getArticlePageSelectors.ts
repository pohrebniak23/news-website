import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article/model/types/article';

export const getArticleListView = (state: StateSchema) =>
  state.articleView?.view || ArticleView.TILE;
