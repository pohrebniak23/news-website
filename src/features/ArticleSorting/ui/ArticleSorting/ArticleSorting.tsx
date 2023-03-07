import classNames from 'classnames';
import { ArticleListActions, fetchArticlesList } from 'entities/Article';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Text } from 'shared/ui/Text/Text';
import { SortingOrder } from '../../../../shared/types/Sorting';
import {
  getArticleSortingBy,
  getArticleSortingOrder,
} from '../../model/selectors/getArticleSortingSelectors';
import { ArticleSortingActions } from '../../model/slices/ArticleSortingSlice';
import { ArticleSortingBy } from '../../model/types/articleSortingSchema';
import styles from './ArticleSorting.module.scss';

export const ArticleSorting = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const initialSortValue = useSelector(getArticleSortingBy);
  const initialOrderValue = useSelector(getArticleSortingOrder);

  const onChangeSortHandler = (value: ArticleSortingBy) => {
    dispatch(ArticleSortingActions.setSort(value));
    dispatch(ArticleListActions.setPage(1));
    dispatch(fetchArticlesList({ replace: true }));
  };

  const onChangeOrderHandler = (value: SortingOrder) => {
    dispatch(ArticleSortingActions.setOrder(value));
    dispatch(ArticleListActions.setPage(1));
    dispatch(fetchArticlesList({ replace: true }));
  };

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
