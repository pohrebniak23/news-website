import { Article } from 'entities/Article';

export interface ArticlePageRecomendationsSchema {
  isLoading?: boolean;
  error?: string;
  recomendations: Article[];
}
