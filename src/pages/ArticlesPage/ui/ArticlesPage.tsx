import { ArticlePageMostPopular } from 'features/ArticlePageMostPopular';
import {
  ArticlesPageFilters,
  fetchNextArticlesList,
} from 'features/ArticlesPageFilters';
import { ArticlesPageInfiniteList } from 'features/ArticlesPageInfiniteList';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack, VStack } from 'shared/ui/Stack';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const endOfPageCallback = useCallback(() => {
    dispatch(fetchNextArticlesList());
  }, [dispatch]);

  return (
    <PageWrapper endOfPageCallback={endOfPageCallback} className={styles.page}>
      <HStack justify="between">
        <VStack className={styles.content}>
          <ArticlePageMostPopular className={styles.popular} />

          <ArticlesPageInfiniteList />
        </VStack>

        <ArticlesPageFilters className={styles.filters} />
      </HStack>
    </PageWrapper>
  );
};

export default memo(ArticlesPage);
