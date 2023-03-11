import classNames from 'classnames';
import { ArticleView } from 'entities/Article';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ListIcon from 'shared/assets/list-view-icon.svg';
import TileIcon from 'shared/assets/tile-view-icon.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack } from 'shared/ui/Stack';
import { getFiltersView } from '../../model/selectors/getArticlesPageFiltersSelector';
import { ArticlesPageFiltersActions } from '../../model/slices/ArticlesPageFiltersSlice';
import styles from './ViewFilter.module.scss';

interface ArticlesListViewProps {
  className?: string;
}

export const ViewFilter = ({ className }: ArticlesListViewProps) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

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
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('view', viewType);
    setSearchParams(newSearchParams);
  };

  const currentView = useSelector(getFiltersView);

  return (
    <HStack w100={false} gap="16" className={classNames(className)}>
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
    </HStack>
  );
};
