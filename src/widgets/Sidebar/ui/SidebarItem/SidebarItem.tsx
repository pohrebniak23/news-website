import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../models/SidebarItemsList';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      to={item.path}
      className={classNames(styles.link, {
        [styles.collapsed]: collapsed,
      })}
    >
      <item.Icon />
      <span className={styles.linkText}>{t(item.text)}</span>
    </AppLink>
  );
});
