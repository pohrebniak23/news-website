import { ArticleList } from 'entities/Article';
import { ArticlePageView, initArticlePage } from 'features/ArticlePage';
import {
  getArticlePageError,
  getArticlePageLoading,
  getArticlePageView,
} from 'features/ArticlePage/model/selectors/getArticlePageSelectors';
import { fetchNextArticlePage } from 'features/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import {
  ArticlePageReducer,
  getArticlePageData,
} from 'features/ArticlePage/model/slices/ArticlePageSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { Text } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticlePageData.selectAll);
  const view = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);
  const isLoading = useSelector(getArticlePageLoading);

  useDynamicReducerLoader({ articlePage: ArticlePageReducer }, false);

  const endOfPageCallback = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticlePage);
  }, [dispatch]);

  if (error) {
    return (
      <PageWrapper>
        <div className={styles.articlesPage}>
          <Text className={styles.error} theme="error" size="medium">
            {t(error)}
          </Text>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper endOfPageCallback={endOfPageCallback}>
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
    </PageWrapper>
  );
};

export default memo(ArticlesPage);
