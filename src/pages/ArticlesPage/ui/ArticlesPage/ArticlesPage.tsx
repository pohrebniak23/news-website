import {
  ArticleList,
  ArticleListReducer,
  fetchNextArticlesList,
  getArticleList,
  getArticleListError,
  getArticleListLoading,
  initArticleList,
} from 'entities/Article';
import {
  ArticleSearch,
  ArticleSorting,
  ArticleSortingReducer,
} from 'features/ArticleSorting';
import {
  ArticleListViewReducer,
  ArticlesListView,
} from 'features/ArticlesListView';
import { getArticleListView } from 'features/ArticlesListView/model/selectors/getArticlePageSelectors';
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
  const articles = useSelector(getArticleList.selectAll);
  const view = useSelector(getArticleListView);
  const error = useSelector(getArticleListError);
  const isLoading = useSelector(getArticleListLoading);

  useDynamicReducerLoader(
    {
      articleList: ArticleListReducer,
      articleSorting: ArticleSortingReducer,
      articleView: ArticleListViewReducer,
    },
    false,
  );

  const endOfPageCallback = useCallback(() => {
    dispatch(fetchNextArticlesList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticleList);
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
          <div className={styles.nav}>
            <Text className={styles.title} size="medium">
              {t('Articles')}
            </Text>

            <div className={styles.sortingNav}>
              <ArticleSorting />

              <ArticlesListView />
            </div>
          </div>

          <div className={styles.search}>
            <ArticleSearch />
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
