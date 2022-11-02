import { getUserAuthData, UserActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Navbar.module.scss';

export const Navbar: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);

  useEffect(() => {
    if (authData) {
      onCloseModal();
    }
  }, [authData, onCloseModal]);

  const authUser = () => {
    return (
      <nav data-testid="navbar" className={styles.navbar}>
        <AppLink to={RoutePath.home} className={styles.logo}>
          {t('Logo')}
        </AppLink>
        <div className={styles.rightContent}>
          <LangSwitcher className={styles.langSwitcher} />
          <ThemeSwitcher className={styles.themeSwitcher} />

          <Button onClick={onLogout}>{t('Выйти')}</Button>
        </div>
      </nav>
    );
  };

  const notAuthUser = () => {
    return (
      <nav data-testid="navbar" className={styles.navbar}>
        <AppLink to={RoutePath.home} className={styles.logo}>
          {t('Logo')}
        </AppLink>
        <div className={styles.rightContent}>
          <LangSwitcher className={styles.langSwitcher} />
          <ThemeSwitcher className={styles.themeSwitcher} />

          <Button onClick={onOpenModal}>{t('Войти')}</Button>

          <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
        </div>
      </nav>
    );
  };

  return authData ? authUser() : notAuthUser();
};
