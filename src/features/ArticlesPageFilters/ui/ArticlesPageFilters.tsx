import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
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
    <div className={classNames(styles.filters, className)}>
      <div className={styles.nav}>
        <Text className={styles.title} size="medium">
          {t('Articles')}
        </Text>

        <div className={styles.sortingNav}>
          <SortingFilter />

          <ViewFilter />
        </div>
      </div>

      <div className={styles.search}>
        <SearchFilter />
      </div>

      <TabsFilter className={styles.tabs} />
    </div>
  );
};
