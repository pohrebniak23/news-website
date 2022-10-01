import classNames from 'classnames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
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
      <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        {t('toggle')}
      </button>
    </div>
  );
};
