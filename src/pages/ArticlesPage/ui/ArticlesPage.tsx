import {
  ArticlesPageFilters,
  ArticlesPageFiltersReducer,
  fetchNextArticlesList,
} from 'features/ArticlesPageFilters';
import { ArticlesPageInfiniteList } from 'features/ArticlesPageInfiniteList';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { VStack } from 'shared/ui/Stack';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  useDynamicReducerLoader(
    {
      articlesPageFilters: ArticlesPageFiltersReducer,
    },
    false,
  );

  const endOfPageCallback = useCallback(() => {
    dispatch(fetchNextArticlesList());
  }, [dispatch]);

  return (
    <PageWrapper endOfPageCallback={endOfPageCallback}>
      <VStack>
        <ArticlesPageFilters className={styles.filters} />

        <ArticlesPageInfiniteList />
      </VStack>
    </PageWrapper>
  );
};

export default memo(ArticlesPage);
