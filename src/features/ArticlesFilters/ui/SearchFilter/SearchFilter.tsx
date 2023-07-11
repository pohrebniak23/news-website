import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Input } from 'shared/ui/Input/Input';
import { VStack } from 'shared/ui/Stack';
import { useGetArticlesWithFiltersQuery } from '../../api/articlesFilters';
import styles from './SearchFilter.module.scss';

interface ArticleSearchProps {
  className?: string;
}

export const SearchFilter = ({ className }: ArticleSearchProps) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());
  const { refetch } = useGetArticlesWithFiltersQuery({ search });

  const fetchDebouncedData = useDebounce(() => {
    refetch();
  }, 500);

  const articleSearchHandler = (value: string) => {
    // dispatch(ArticlesPageFiltersActions.setSearch(value));
    setSearch(value);
    newSearchParams.set('search', value);
    setSearchParams(newSearchParams);
    fetchDebouncedData();
  };

  return (
    <VStack className={classNames(className)}>
      <Input
        className={styles.input}
        type="text"
        value={search}
        onChange={articleSearchHandler}
        placeholder={t('Search by title')!}
      />
    </VStack>
  );
};
