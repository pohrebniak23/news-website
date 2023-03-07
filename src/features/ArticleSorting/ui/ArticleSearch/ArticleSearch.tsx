import classNames from 'classnames';
import { ArticleListActions, fetchArticlesList } from 'entities/Article';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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

  const articleSearchHandler = (value: string) => {
    dispatch(ArticleSortingActions.setSearch(value));
    dispatch(ArticleListActions.setPage(1));
    dispatch(fetchArticlesList({ replace: true }));
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
