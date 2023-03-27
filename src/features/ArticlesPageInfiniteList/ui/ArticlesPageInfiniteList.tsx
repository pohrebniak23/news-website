import classNames from 'classnames';
import { ArticleList } from 'entities/Article';
import {
  getArticleList,
  getArticlesPageFiltersLoading,
  getArticlesPageFiltersView,
  initArticleList,
} from 'features/ArticlesPageFilters';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { HStack } from 'shared/ui/Stack';
import styles from './ArticlesPageInfiniteList.module.scss';

export const ArticlesPageInfiniteList = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const articles = useSelector(getArticleList.selectAll);
  const view = useSelector(getArticlesPageFiltersView);
  const isLoading = useSelector(getArticlesPageFiltersLoading);

  useEffect(() => {
    dispatch(initArticleList(searchParams));
  }, [dispatch, searchParams]);

  return (
    <HStack className={classNames(styles.infiniteList)}>
      <ArticleList
        className={styles.list}
        isLoading={isLoading}
        articles={articles}
        view={view}
      />
    </HStack>
  );
};
