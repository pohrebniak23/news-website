import classNames from 'classnames';
import { ArticleView } from 'entities/Article';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ListIcon from 'shared/assets/list-view-icon.svg';
import TileIcon from 'shared/assets/tile-view-icon.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticlesPageFiltersActions } from '../../model/slices/ArticlesPageFiltersSlice';
import styles from './ViewFilter.module.scss';
import { getFiltersView } from '../../model/selectors/getArticlesPageFiltersSelector';

interface ArticlesListViewProps {
  className?: string;
}

export const ViewFilter = ({ className }: ArticlesListViewProps) => {
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
    dispatch(ArticlesPageFiltersActions.setView(viewType));
  };

  const currentView = useSelector(getFiltersView);

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
