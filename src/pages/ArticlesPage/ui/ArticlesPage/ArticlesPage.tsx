import { ArticleList } from 'entities/Article';
import { ArticleSorting, ArticleSortingReducer } from 'features/ArticleSorting';
import {
  ArticlesListView,
  fetchNextArticleListView,
} from 'features/ArticlesListView';
import {
  getArticlePageError,
  getArticlePageLoading,
  getArticlePageView,
} from 'features/ArticlesListView/model/selectors/getArticlePageSelectors';
import {
  ArticlePageReducer,
  getArticlePageData,
} from 'features/ArticlesListView/model/slices/articlesListViewSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { Text } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { initArticleListView } from '../../../../features/ArticlesListView/model/services/initArticleListView/initArticleListView';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticlePageData.selectAll);
  const view = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);
  const isLoading = useSelector(getArticlePageLoading);

  useDynamicReducerLoader(
    { articlePage: ArticlePageReducer, articleSorting: ArticleSortingReducer },
    false,
  );

  const endOfPageCallback = useCallback(() => {
    dispatch(fetchNextArticleListView());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticleListView);
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
            <ArticlesListView />

            <ArticleSorting />
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
