/* eslint-disable import/no-cycle */
import classNames from 'classnames';
import { memo } from 'react';
import ArrowIcon from 'shared/assets/arrow-icon.svg';

import { useLocalStorage } from 'shared/lib/hooks/useLocalStorage/useLocalStorage';
import { Button } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useLocalStorage('sidebar-collapsed', false);

  const onToggleSidebarCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.sidebar,
        { [styles.collapsed]: collapsed },
        className,
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggleSidebarCollapsed}
        theme="square"
        size="m"
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
