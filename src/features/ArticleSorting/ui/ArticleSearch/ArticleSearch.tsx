import classNames from 'classnames';
import { ArticleListActions, fetchArticlesList } from 'entities/Article';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getArticleSearchTitle } from '../../model/selectors/getArticleSortingSelectors';
import { ArticleSortingActions } from '../../model/slices/ArticleSortingSlice';
import styles from './ArticleSearch.module.scss';

interface ArticleSearchProps {
  className?: string;
}

export const ArticleSearch = ({ className }: ArticleSearchProps) => {
  const dispatch = useAppDispatch();
  const articleSearchTitle = useSelector(getArticleSearchTitle);
  const [searchParams, setSearchParams] = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());

  const fetchDebouncedData = useDebounce(() => {
    dispatch(ArticleListActions.setPage(1));
    dispatch(fetchArticlesList({ replace: true }));
  }, 500);

  const articleSearchHandler = (value: string) => {
    dispatch(ArticleSortingActions.setSearch(value));
    newSearchParams.set('search', value);
    setSearchParams(newSearchParams);
    fetchDebouncedData();
  };

  return (
    <div className={classNames(className, styles.articleSearch)}>
      <Text>{t('Search by title')}:</Text>

      <Input
        type="text"
        className={styles.input}
        value={articleSearchTitle}
        onChange={articleSearchHandler}
      />
    </div>
  );
};
