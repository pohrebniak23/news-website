import { ArticleType } from 'entities/Article';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Tabs } from 'shared/ui/Tabs/Tabs';
import { getFiltersType } from '../../model/selectors/getArticlesPageFiltersSelector';
import { fetchArticlesPageWithFilters } from '../../model/services/fetchArticlesPageWithFilters/fetchArticlesPageWithFilters';
import { ArticlesPageFiltersActions } from '../../model/slices/ArticlesPageFiltersSlice';

interface TabsFiltersProps {
  className?: string;
}

export const TabsFilter = ({ className }: TabsFiltersProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const typeValue = useSelector(getFiltersType);
  const [searchParams, setSearchParams] = useSearchParams();

  const TabsList = useMemo(
    () => [
      {
        value: ArticleType.ALL,
        content: t('All'),
      },
      {
        value: ArticleType.IT,
        content: t('IT'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('SCIENCE'),
      },
      {
        value: ArticleType.BUSINESS,
        content: t('BUSINESS'),
      },
    ],
    [t],
  );

  const onTabsChangeHandler = useCallback(
    (value: ArticleType) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      dispatch(ArticlesPageFiltersActions.setType(value));
      newSearchParams.set('type', value);
      setSearchParams(newSearchParams);
      dispatch(fetchArticlesPageWithFilters({ replace: true }));
    },
    [dispatch, setSearchParams, searchParams],
  );

  return (
    <Tabs<ArticleType>
      className={className}
      tabsList={TabsList}
      onTabClick={onTabsChangeHandler}
      value={typeValue}
    />
  );
};
