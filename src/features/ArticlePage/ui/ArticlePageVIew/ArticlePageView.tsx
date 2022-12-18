import classNames from 'classnames';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticlePageActions } from 'features/ArticlePage/model/slices/ArticlePageSlice';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ListIcon from 'shared/assets/list-view-icon.svg';
import TileIcon from 'shared/assets/tile-view-icon.svg';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticlePageView } from '../../model/selectors/getArticlePageSelectors';
import styles from './ArticlePageView.module.scss';

interface ArticlePageViewProps {
  className?: string;
}

export const ArticlePageView = ({ className }: ArticlePageViewProps) => {
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
    dispatch(ArticlePageActions.setView(viewType));
  };

  const currentView = useSelector(getArticlePageView);

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
