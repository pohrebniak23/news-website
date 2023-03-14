import classNames from 'classnames';
import { ArticleListItem, ArticleView } from 'entities/Article';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text';
import { getArticleRecomendations } from '../model/selectors/getArticlePageRecomendationsSelector';
import { fetchArticlesPageRecomendation } from '../model/services/fetchArticlePageRecomendations';
import styles from './ArticlePageRecomendations.module.scss';

interface ArticlePageRecomendationsProps {
  className?: string;
}

export const ArticlePageRecomendations = ({
  className,
}: ArticlePageRecomendationsProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const recomendations = useSelector(getArticleRecomendations);

  useEffect(() => {
    dispatch(fetchArticlesPageRecomendation());
  }, [dispatch]);

  return (
    <div className={classNames(styles.recomendations, className)}>
      <Text size="medium">{t('Recomendation')}</Text>

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
