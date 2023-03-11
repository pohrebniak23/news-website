import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import styles from './ArticlesPageFilters.module.scss';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { SortingFilter } from './SortingFilter/SortingFilter';
import { TabsFilter } from './TabsFilter/TabsFilter';
import { ViewFilter } from './ViewFilter/ViewFilter';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = ({
  className,
}: ArticlesPageFiltersProps) => {
  const { t } = useTranslation();

  return (
    <VStack className={classNames(styles.filters, className)}>
      <HStack justify="between" className={styles.nav}>
        <Text className={styles.title} size="medium">
          {t('Articles')}
        </Text>

        <HStack
          justify="end"
          align="center"
          gap="32"
          className={styles.sortingNav}
        >
          <SortingFilter />

          <ViewFilter />
        </HStack>
      </HStack>

      <HStack className={styles.search}>
        <SearchFilter />
      </HStack>

      <TabsFilter className={styles.tabs} />
    </VStack>
  );
};
