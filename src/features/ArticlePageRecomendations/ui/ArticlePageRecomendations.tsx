import classNames from 'classnames';
import { ArticleListItem, ArticleView } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { useGetArticleRecomedations } from '../api/articleRecomendationsApi';
import styles from './ArticlePageRecomendations.module.scss';

interface ArticlePageRecomendationsProps {
  className?: string;
}

export const ArticlePageRecomendations = ({
  className,
}: ArticlePageRecomendationsProps) => {
  const { t } = useTranslation();
  const { data: recomendations } = useGetArticleRecomedations('3');

  return (
    <div className={classNames(styles.recomendations, className)}>
      <Text size="m">{t('Recomendation')}</Text>

      <div className={styles.list}>
        {recomendations?.map((article) => (
          <ArticleListItem
            key={article.id}
            article={article}
            view={ArticleView.TILE}
          />
        ))}
      </div>
    </div>
  );
};
