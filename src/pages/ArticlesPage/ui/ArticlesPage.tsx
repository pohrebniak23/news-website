import { ArticlePageMostPopular } from 'features/ArticlePageMostPopular';
import {
  ArticlesPageFilters,
  fetchNextArticlesList,
} from 'features/ArticlesPageFilters';
import { ArticlesPageInfiniteList } from 'features/ArticlesPageInfiniteList';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const endOfPageCallback = useCallback(() => {
    dispatch(fetchNextArticlesList());
  }, [dispatch]);

  return (
    <PageWrapper endOfPageCallback={endOfPageCallback} className={styles.page}>
      <VStack>
        <ArticlesPageFilters className={styles.filters} />

        <ArticlePageMostPopular className={styles.popular} />

        <ArticlesPageInfiniteList />
      </VStack>
    </PageWrapper>
  );
};

export default memo(ArticlesPage);
