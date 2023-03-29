import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { getFiltersError } from '../model/selectors/getArticlesPageFiltersSelector';
import { ArticlesPageFiltersReducer } from '../model/slices/ArticlesPageFiltersSlice';
import styles from './ArticlesPageFilters.module.scss';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { SortingFilter } from './SortingFilter/SortingFilter';
import { ViewFilter } from './ViewFilter/ViewFilter';
import { SearchWithTags } from './SerachWithTags/ui/SearchWithTags';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = ({
  className,
}: ArticlesPageFiltersProps) => {
  const { t } = useTranslation();
  const error = useSelector(getFiltersError);

  useDynamicReducerLoader(
    {
      articlesPageFilters: ArticlesPageFiltersReducer,
    },
    false,
  );

  if (error) {
    return (
      <HStack className={classNames(styles.filters, className)}>
        <Text size="m">{t('Filters not found')}</Text>
      </HStack>
    );
  }

  return (
    <VStack gap="16" className={classNames(styles.filters, className)}>
      <VStack justify="between" className={styles.nav}>
        <VStack
          justify="end"
          align="center"
          gap="32"
          className={styles.sortingNav}
        >
          <SortingFilter />

          <ViewFilter />
        </VStack>
      </VStack>

      <SearchFilter />

      <SearchWithTags />
    </VStack>
  );
};
