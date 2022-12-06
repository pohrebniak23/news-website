/* eslint-disable import/no-cycle */
import classNames from 'classnames';
import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import AboutIcon from 'shared/assets/about-icon.svg';
import ArrowIcon from 'shared/assets/arrow-icon.svg';
import HomeIcon from 'shared/assets/home-icon.svg';
import { RoutePath } from 'shared/config/routes/routes';
import { useLocalStorage } from 'shared/lib/hooks/useLocalStorage/useLocalStorage';
import { Button } from 'shared/ui/Button/Button';
import { SidebarItemType } from '../../models/types/SidebarItemType';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useLocalStorage('sidebar-collapsed', false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  const userData = useSelector(getUserAuthData);

  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.home,
      text: 'Home',
      Icon: HomeIcon,
    },
    {
      path: RoutePath.about,
      text: 'About',
      Icon: AboutIcon,
    },
    {
      path: `${RoutePath.profile}${userData?.id}`,
      text: 'Profile',
      Icon: AboutIcon,
      authOnly: true,
    },
    {
      path: RoutePath.articles,
      text: 'Articles',
      Icon: AboutIcon,
      authOnly: true,
    },
  ];

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.sidebar,
        { [styles.collapsed]: collapsed },
        className,
      )}
    >
      <div className={styles.linksList}>
        {sidebarItemsList.map((item: SidebarItemType) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>

      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        theme="square"
        size="medium"
        className={styles.toggle}
      >
        <ArrowIcon
          className={classNames('arrow-icon', {
            [styles.rotate]: !collapsed,
          })}
        />
      </Button>
    </div>
  );
});
