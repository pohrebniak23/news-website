import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import styles from './ArticleList.module.scss';
import { ArticleListSkeleton } from './ArticleListSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view: ArticleView;
}

export const ArticleList = memo(
  ({ className, articles, isLoading, view }: ArticleListProps) => {
    const { t } = useTranslation('articles');

    const renderItems = (article: Article) => (
      <ArticleListItem key={article.id} article={article} view={view} />
    );

    return (
      <div className={classNames(className, styles.articleList, styles[view])}>
        {articles.length > 0 && articles.map(renderItems)}

        {isLoading &&
          new Array(view === ArticleView.LIST ? 3 : 6)
            .fill(0)
            .map((item, index) => (
              <ArticleListSkeleton key={index} view={view} />
            ))}

        {!isLoading && articles.length === 0 && (
          <Text>{t('There are currently no articles available')}</Text>
        )}
      </div>
    );
  },
);
