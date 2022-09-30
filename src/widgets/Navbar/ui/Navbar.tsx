import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { RoutePath } from 'shared/config/routes/routes';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav data-testid="navbar" className={styles.navbar}>
      <AppLink to={RoutePath.home} className={styles.logo}>
        {t('Logo')}
      </AppLink>

      <div className={styles.rightContent}>
        <div className={styles.links}>
          <AppLink to={RoutePath.home} className={styles.navBarLink}>
            {t('Home')}
          </AppLink>
          <AppLink to={RoutePath.about} className={styles.navBarLink}>
            {t('About')}
          </AppLink>
        </div>

        <LangSwitcher className={styles.langSwitcher} />
        <ThemeSwitcher className={styles.themeSwitcher} />
      </div>
    </nav>
  );
};
