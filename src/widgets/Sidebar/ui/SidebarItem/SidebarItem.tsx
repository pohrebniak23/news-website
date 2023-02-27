import classNames from 'classnames';
import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/Icon/Icon';
import { SidebarItemType } from '../../models/types/SidebarItemType';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      className={classNames(styles.link, {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.icon}>
        <Icon Svg={item.icon} />
      </div>

      <span className={styles.linkText}>{t(item.text)}</span>
    </AppLink>
  );
});
