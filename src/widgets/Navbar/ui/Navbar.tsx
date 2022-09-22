import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Link } from "react-router-dom";
import { RoutePath } from "shared/config/routes/routes";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(styles.navbar)}>
      <Link to={RoutePath.home} className={styles.logo}>
        Logo
      </Link>

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
