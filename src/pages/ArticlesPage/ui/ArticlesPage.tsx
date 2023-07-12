import { ArticlesWithFilters } from 'features/ArticlesWithFilters';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  // const [page, setPage] = useState<number>(1);

  // const endOfPageCallback = () => {
  //   setPage((prev: number) => prev + 1);
  //   console.log(page);
  // };

  return (
    <PageWrapper className={styles.page}>
      <HStack justify="between">
        <VStack className={styles.content}>
          {/* <ArticlePageMostPopular className={styles.popular} /> */}
        </VStack>
      </HStack>
      <ArticlesWithFilters />
    </PageWrapper>
  );
};

export default memo(ArticlesPage);
