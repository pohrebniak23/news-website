import { ArticleList } from 'entities/Article';
import {
  ArticlesPageFilters,
  ArticlesPageFiltersReducer,
  fetchNextArticlesList,
  getArticleList,
  getArticlesPageFiltersError,
  getArticlesPageFiltersLoading,
  getArticlesPageFiltersView,
  initArticleList,
} from 'features/ArticlesPageFilters';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { Text } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const articles = useSelector(getArticleList.selectAll);
  const view = useSelector(getArticlesPageFiltersView);
  const error = useSelector(getArticlesPageFiltersError);
  const isLoading = useSelector(getArticlesPageFiltersLoading);

  useDynamicReducerLoader(
    {
      articlesPageFilters: ArticlesPageFiltersReducer,
    },
    false,
  );

  const endOfPageCallback = useCallback(() => {
    dispatch(fetchNextArticlesList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticleList(searchParams));
  }, [dispatch, searchParams]);

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
        <ArticlesPageFilters className={styles.filters} />

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
