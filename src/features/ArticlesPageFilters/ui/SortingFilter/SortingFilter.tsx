import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Select, SelectOption } from 'shared/ui/Select';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { SortingOrder } from '../../../../shared/types/Sorting';
import {
  getFiltersBy,
  getFiltersOrder,
} from '../../model/selectors/getArticlesPageFiltersSelector';
import { fetchArticlesPageWithFilters } from '../../model/services/fetchArticlesPageWithFilters/fetchArticlesPageWithFilters';
import { ArticlesPageFiltersActions } from '../../model/slices/ArticlesPageFiltersSlice';
import { ArticleSortingBy } from '../../model/types/articlePageFiltersSchema';

export const SortingFilter = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const initialSortValue = useSelector(getFiltersBy);
  const initialOrderValue = useSelector(getFiltersOrder);
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeSortHandler = useCallback(
    (value: ArticleSortingBy) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      dispatch(ArticlesPageFiltersActions.setSort(value));
      dispatch(ArticlesPageFiltersActions.setPage(1));
      newSearchParams.set('sort', value);
      setSearchParams(newSearchParams);
      dispatch(fetchArticlesPageWithFilters({ replace: true }));
    },
    [dispatch, setSearchParams, searchParams],
  );

  const onChangeOrderHandler = useCallback(
    (value: SortingOrder) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      dispatch(ArticlesPageFiltersActions.setOrder(value));
      dispatch(ArticlesPageFiltersActions.setPage(1));
      newSearchParams.set('order', value);
      setSearchParams(newSearchParams);
      dispatch(fetchArticlesPageWithFilters({ replace: true }));
    },
    [dispatch, setSearchParams, searchParams],
  );

  const sortOptions = useMemo<SelectOption<ArticleSortingBy>[]>(
    () => [
      { value: ArticleSortingBy.VIEWS, label: t('views') },
      { value: ArticleSortingBy.TITLE, label: t('alphabet') },
      { value: ArticleSortingBy.CREATED, label: t('created') },
    ],
    [t],
  );

  const orderOptions = useMemo<SelectOption<SortingOrder>[]>(
    () => [
      {
        value: 'asc',
        label: t('ascending'),
      },
      {
        value: 'desc',
        label: t('descending'),
      },
    ],
    [t],
  );

  return (
    <VStack w100={false} gap="32" align="start">
      <HStack w100={false} gap="4">
        <Text>{t('Sort by:')}</Text>
        <Select<ArticleSortingBy>
          value={initialSortValue}
          label={initialSortValue}
          options={sortOptions}
          onChange={onChangeSortHandler}
        />
      </HStack>

      <HStack w100={false} gap="4">
        <Text>{t('Order by:')}</Text>
        <Select<SortingOrder>
          value={initialOrderValue}
          label={initialOrderValue}
          options={orderOptions}
          onChange={onChangeOrderHandler}
        />
      </HStack>
    </VStack>
  );
};
