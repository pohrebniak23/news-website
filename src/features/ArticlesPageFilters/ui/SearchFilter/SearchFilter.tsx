import classNames from 'classnames';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Input } from 'shared/ui/Input/Input';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { getFiltersTitle } from '../../model/selectors/getArticlesPageFiltersSelector';
import { fetchArticlesPageWithFilters } from '../../model/services/fetchArticlesPageWithFilters/fetchArticlesPageWithFilters';
import { ArticlesPageFiltersActions } from '../../model/slices/ArticlesPageFiltersSlice';

interface ArticleSearchProps {
  className?: string;
}

export const SearchFilter = ({ className }: ArticleSearchProps) => {
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
      <Text>{t('Search by title')}:</Text>

      <Input
        type="text"
        value={articleSearchTitle}
        onChange={articleSearchHandler}
      />
    </VStack>
  );
};
