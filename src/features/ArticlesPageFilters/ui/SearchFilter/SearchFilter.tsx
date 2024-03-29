import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Input } from 'shared/ui/Input/Input';
import { VStack } from 'shared/ui/Stack';
import { getFiltersTitle } from '../../model/selectors/getArticlesPageFiltersSelector';
import { fetchArticlesPageWithFilters } from '../../model/services/fetchArticlesPageWithFilters/fetchArticlesPageWithFilters';
import { ArticlesPageFiltersActions } from '../../model/slices/ArticlesPageFiltersSlice';
import styles from './SearchFilter.module.scss';

interface ArticleSearchProps {
  className?: string;
}

export const SearchFilter = ({ className }: ArticleSearchProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articleSearchTitle = useSelector(getFiltersTitle);
  const [searchParams, setSearchParams] = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());

  const fetchDebouncedData = useDebounce(() => {
    dispatch(ArticlesPageFiltersActions.setPage(1));
    dispatch(fetchArticlesPageWithFilters({ replace: true }));
  }, 500);

  const articleSearchHandler = (value: string) => {
    dispatch(ArticlesPageFiltersActions.setSearch(value));
    newSearchParams.set('search', value);
    setSearchParams(newSearchParams);
    fetchDebouncedData();
  };

  return (
    <VStack className={classNames(className)}>
      <Input
        className={styles.input}
        type="text"
        value={articleSearchTitle}
        onChange={articleSearchHandler}
        placeholder={t('Search by title')!}
      />
    </VStack>
  );
};
