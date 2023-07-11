import classNames from 'classnames';
import { ArticleView } from 'entities/Article';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import ListIcon from 'shared/assets/list-view-icon.svg';
import TileIcon from 'shared/assets/tile-view-icon.svg';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import styles from './ViewFilter.module.scss';

interface ArticlesListViewProps {
  className?: string;
  view: ArticleView;
  setView: (view: ArticleView) => void;
}

export const ViewFilter = ({
  className,
  view,
  setView,
}: ArticlesListViewProps) => {
  const { t } = useTranslation();
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
    setView(viewType);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('view', viewType);
    setSearchParams(newSearchParams);
  };

  return (
    <HStack gap="16" className={classNames(className)}>
      <Text>{t('View')}:</Text>

      <HStack gap="16">
        {viewItems.map((item) => (
          <Button
            theme="clear"
            key={item.view}
            className={classNames(styles.button, {
              [styles.active]: view === item.view,
            })}
            onClick={viewHandler(item.view)}
          >
            <Icon Svg={item.icon} />
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};
