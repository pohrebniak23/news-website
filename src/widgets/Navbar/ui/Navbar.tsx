import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { RoutePath } from 'shared/config/routes/routes';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { FC, useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

export const Navbar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  return (
    <nav data-testid="navbar" className={styles.navbar}>
      <AppLink to={RoutePath.home} className={styles.logo}>
        {t('Logo')}
      </AppLink>

      <div className={styles.rightContent}>
        <LangSwitcher className={styles.langSwitcher} />
        <ThemeSwitcher className={styles.themeSwitcher} />
      </div>

      <Button onClick={onToggleModal}>{t('Войти')}</Button>

      <Modal isOpen={isModalOpen} onClose={onToggleModal}>
        {t(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa reprehenderit nobis consequatur beatae nihil rem eveniet corrupti labore, cupiditate sed neque quisquam dicta ipsum sequi sunt odit. Consequuntur, voluptatem.',
        )}
      </Modal>
    </nav>
  );
};
