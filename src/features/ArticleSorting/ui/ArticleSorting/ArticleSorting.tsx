import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Select } from 'shared/ui/Select/Select';
import { Text } from 'shared/ui/Text/Text';
import { ArticleSortingBy } from '../../model/types/articleSortingSchema';
import styles from './ArticleSorting.module.scss';
import { ArticleSortingActions } from '../../model/slices/ArticleSortingSlice';

export const ArticleSorting = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onChangeHandler = (value: ArticleSortingBy) => {
    dispatch(ArticleSortingActions.setSort(value));
  };

  return (
    <div className={classNames(styles.sorting)}>
      <Text>{t('Sort by:')}</Text>
      <Select<ArticleSortingBy>
        options={[
          { value: ArticleSortingBy.VIEWS, label: 'views' },
          { value: ArticleSortingBy.TITLE, label: 'alphabet' },
          { value: ArticleSortingBy.CREATED, label: 'created' },
        ]}
        onChange={onChangeHandler}
      />
    </div>
  );
};
