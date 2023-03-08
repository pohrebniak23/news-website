import classNames from 'classnames';
import { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Text } from 'shared/ui/Text/Text';
import { SortingOrder } from '../../../../shared/types/Sorting';
import {
  getFiltersBy,
  getFiltersOrder,
} from '../../model/selectors/getArticlesPageFiltersSelector';
import { fetchArticlesPageWithFilters } from '../../model/services/fetchArticlesPageWithFilters/fetchArticlesPageWithFilters';
import { ArticlesPageFiltersActions } from '../../model/slices/ArticlesPageFiltersSlice';
import { ArticleSortingBy } from '../../model/types/articlePageFiltersSchema';
import styles from './SortingFilter.module.scss';

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

  const sortOptions = useMemo<SelectOptions<ArticleSortingBy>[]>(
    () => [
      { value: ArticleSortingBy.VIEWS, label: t('views') },
      { value: ArticleSortingBy.TITLE, label: t('alphabet') },
      { value: ArticleSortingBy.CREATED, label: t('created') },
    ],
    [t],
  );

  const orderOptions = useMemo<SelectOptions<SortingOrder>[]>(
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
    <div className={classNames(styles.sorting)}>
      <div className={styles.item}>
        <Text>{t('Sort by:')}</Text>
        <Select<ArticleSortingBy>
          value={initialSortValue}
          options={sortOptions}
          onChange={onChangeSortHandler}
        />
      </div>

      <div className={styles.item}>
        <Text>{t('Order by:')}</Text>
        <Select<SortingOrder>
          value={initialOrderValue}
          options={orderOptions}
          onChange={onChangeOrderHandler}
        />
      </div>
    </div>
  );
};
