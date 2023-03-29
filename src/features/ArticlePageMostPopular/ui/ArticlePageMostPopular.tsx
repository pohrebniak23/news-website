import { ArticleListItem, ArticleView } from 'entities/Article';
import { useMostPopularArticle } from '../api/articlePageMostPopular';

interface ArticlePageMostPopularProps {
  className?: string;
}

export const ArticlePageMostPopular = ({
  className,
}: ArticlePageMostPopularProps) => {
  const { data: article } = useMostPopularArticle();

  return article ? (
    <ArticleListItem
      className={className}
      article={article[0]}
      view={ArticleView.LIST}
    />
  ) : null;
};
