import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { RoutePath } from 'shared/config/routes/routes';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import styles from './Navbar.module.scss';

export const Navbar: FC = () => {
  const { t } = useTranslation();

  return (
    <nav data-testid="navbar" className={styles.navbar}>
      <AppLink to={RoutePath.home} className={styles.logo}>
        {t('Logo')}
      </AppLink>

      <div className={styles.rightContent}>
        <LangSwitcher className={styles.langSwitcher} />
        <ThemeSwitcher className={styles.themeSwitcher} />
      </div>
    </nav>
  );
};
