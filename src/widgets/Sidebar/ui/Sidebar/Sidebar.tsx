import classNames from 'classnames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowIcon from 'shared/assets/arrow-icon.svg';
import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import HomeIcon from 'shared/assets/home-icon.svg';
import AboutIcon from 'shared/assets/about-icon.svg';
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
      <div className={styles.linksList}>
        <AppLink to={RoutePath.home} className={styles.link}>
          <HomeIcon />
          <span className={styles.linkText}>{t('Home')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={styles.link}>
          <AboutIcon />
          <span className={styles.linkText}>{t('About')}</span>
        </AppLink>
      </div>

      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        theme={ButtonTheme.SQUARE}
        size={ButtonSize.MEDIUM}
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
};
