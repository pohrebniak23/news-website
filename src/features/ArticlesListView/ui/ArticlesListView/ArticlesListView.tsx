import classNames from 'classnames';
import { ArticleView } from 'entities/Article/model/types/article';
import { getArticleListView } from 'features/ArticlesListView/model/selectors/getArticlePageSelectors';
import { ArticleListViewActions } from 'features/ArticlesListView/model/slices/articlesListViewSlice';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ListIcon from 'shared/assets/list-view-icon.svg';
import TileIcon from 'shared/assets/tile-view-icon.svg';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './ArticlesListView.module.scss';

interface ArticlesListViewProps {
  className?: string;
}

export const ArticlesListView = ({ className }: ArticlesListViewProps) => {
  const dispatch = useAppDispatch();

  const viewItems = useMemo(
    () => [
      {
        icon: TileIcon,
        view: ArticleView.TILE,
      },
      {
        icon: ListIcon,
        view: ArticleView.LIST,
      },
    ],
    [],
  );

  const viewHandler = (viewType: ArticleView) => () => {
    dispatch(ArticleListViewActions.setView(viewType));
  };

  const currentView = useSelector(getArticleListView);

  return (
    <div className={classNames(className, styles.articlePageView)}>
      {viewItems.map((item) => (
        <Button
          theme="clear"
          key={item.view}
          className={classNames(styles.button, {
            [styles.active]: currentView === item.view,
          })}
          onClick={viewHandler(item.view)}
        >
          <Icon Svg={item.icon} />
        </Button>
      ))}
    </div>
  );
};
