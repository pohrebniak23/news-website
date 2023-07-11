import { ArticleList, ArticleView } from 'entities/Article';
import { ArticlePageMostPopular } from 'features/ArticlePageMostPopular';
import { ArticlesFilters } from 'features/ArticlesFilters';
import { useGetArticlesWithFiltersQuery } from 'features/ArticlesFilters/api/articlesFilters';
import { memo, useState } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const [pageLimit, setPageLimit] = useState(10);

  const { data: articles, isLoading } = useGetArticlesWithFiltersQuery({});

  const endOfPageCallback = () => {
    // setPageLimit((limit) => limit + 10);
    console.log(pageLimit);
  };

  return (
    <PageWrapper endOfPageCallback={endOfPageCallback} className={styles.page}>
      <HStack justify="between">
        <VStack className={styles.content}>
          <ArticlePageMostPopular className={styles.popular} />

          <ArticleList
            className={styles.list}
            isLoading={isLoading}
            articles={articles || []}
            view={ArticleView.LIST}
          />
        </VStack>

        <ArticlesFilters className={styles.filters} />
      </HStack>
    </PageWrapper>
  );
};

export default memo(ArticlesPage);
