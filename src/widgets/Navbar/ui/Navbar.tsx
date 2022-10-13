import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Navbar.module.scss';

export const Navbar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

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
