import { ArticlePageMostPopular } from 'features/ArticlePageMostPopular';
// import { ArticlesPageInfiniteList } from 'features/ArticlesPageInfiniteList';
import { HStack, VStack } from 'shared/ui/Stack';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <PageWrapper>
      <HStack justify="between" className={styles.page}>
        <VStack>
          <ArticlePageMostPopular className={styles.popular} />

          {/* <ArticlesPageInfiniteList /> */}
        </VStack>
      </HStack>
    </PageWrapper>
  );
};

export default HomePage;
