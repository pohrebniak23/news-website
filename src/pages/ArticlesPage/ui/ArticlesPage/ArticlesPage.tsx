import { ArticleList } from 'entities/Article';
import { ArticlePageView } from 'features/ArticlePage';
import {
  getArticlePageError,
  getArticlePageLoading,
  getArticlePageView,
} from 'features/ArticlePage/model/selectors/getArticlePageSelectors';
import { fetchArticlePage } from 'features/ArticlePage/model/services/fetchArticlePage';
import {
  ArticlePageActions,
  ArticlePageReducer,
  getArticlePageData,
} from 'features/ArticlePage/model/slices/ArticlePageSlice';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { Text } from 'shared/ui/Text/Text';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticlePageData.selectAll);
  const view = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);
  const isLoading = useSelector(getArticlePageLoading);

  useDynamicReducerLoader({ articlePage: ArticlePageReducer });

  useEffect(() => {
    dispatch(fetchArticlePage());
    dispatch(ArticlePageActions.initialView());
  }, [dispatch]);

  if (error) {
    return (
      <div className={styles.articlesPage}>
        <Text className={styles.error} theme="error" size="medium">
          {t(error)}
        </Text>
      </div>
    );
  }

  return (
    <div className={styles.articlesPage}>
      <div className={styles.header}>
        <Text className={styles.title} size="medium">
          {t('Articles')}
        </Text>

        <div className={styles.view}>
          <ArticlePageView />
        </div>
      </div>

      <ArticleList
        className={styles.list}
        isLoading={isLoading}
        articles={articles}
        view={view}
      />
    </div>
  );
};

export default memo(ArticlesPage);
