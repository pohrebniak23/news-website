import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Select, SelectOption } from 'shared/ui/Select';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { SortingOrder } from '../../../../shared/types/Sorting';
import { ArticleSortingBy } from '../../api/articlesFilters';

interface SortingFilterProps {
  sort: ArticleSortingBy;
  setSort: (sort: ArticleSortingBy) => void;
  order: SortingOrder;
  setOrder: (order: SortingOrder) => void;
}

export const SortingFilter = ({
  sort,
  setSort,
  order,
  setOrder,
}: SortingFilterProps) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeSortHandler = useCallback(
    (value: ArticleSortingBy) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      setSort(value);
      newSearchParams.set('sort', value);
      setSearchParams(newSearchParams);
    },
    [setSearchParams, searchParams, setSort],
  );

  const onChangeOrderHandler = useCallback(
    (value: SortingOrder) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      setOrder(value);
      newSearchParams.set('order', value);
      setSearchParams(newSearchParams);
    },
    [setSearchParams, searchParams, setOrder],
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
