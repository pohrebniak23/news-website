import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Select, SelectOption } from 'shared/ui/Select';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { SortingOrder } from '../../../../shared/types/Sorting';
import {
  ArticleSortingBy,
  useGetArticlesWithFiltersQuery,
} from '../../api/articlesFilters';

export const SortingFilter = () => {
  const { t } = useTranslation();
  // const dispatch = useAppDispatch();
  // const initialOrderValue = useSelector(getFiltersOrder);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState<ArticleSortingBy>(ArticleSortingBy.VIEWS);
  const [order, setOrder] = useState<SortingOrder>('desc');
  const { refetch } = useGetArticlesWithFiltersQuery({ sort });

  const onChangeSortHandler = useCallback(
    (value: ArticleSortingBy) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      // dispatch(ArticlesPageFiltersActions.setSort(value));
      // dispatch(ArticlesPageFiltersActions.setPage(1));
      setSort(value);
      newSearchParams.set('sort', value);
      setSearchParams(newSearchParams);
      // dispatch(fetchArticlesPageWithFilters({ replace: true }));
      refetch();
    },
    [setSearchParams, searchParams, refetch],
  );

  const onChangeOrderHandler = useCallback(
    (value: SortingOrder) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      // dispatch(ArticlesPageFiltersActions.setOrder(value));
      // dispatch(ArticlesPageFiltersActions.setPage(1));
      setOrder(value);
      newSearchParams.set('order', value);
      setSearchParams(newSearchParams);
      refetch();
      // dispatch(fetchArticlesPageWithFilters({ replace: true }));
    },
    [setSearchParams, searchParams, refetch],
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
    <VStack gap="16" align="start">
      <VStack gap="4">
        <Text>{t('Sort by:')}</Text>
        <Select<ArticleSortingBy>
          value={sort}
          label={sort}
          options={sortOptions}
          onChange={onChangeSortHandler}
        />
      </VStack>

      <VStack gap="4">
        <Text>{t('Order by:')}</Text>
        <Select<SortingOrder>
          value={order}
          label={order}
          options={orderOptions}
          onChange={onChangeOrderHandler}
        />
      </VStack>
    </VStack>
  );
};
