import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { MenuLinkList } from './MenuLinksList/MenuLinkList';
import styles from './Navbar.module.scss';
import { UserMenu } from './UserMenu/UserMenu';

export const Navbar = memo(() => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const authUser = () => {
    return (
      <HStack
        justify="between"
        align="center"
        data-testid="navbar"
        className={styles.navbar}
      >
        <AppLink to={RoutePath.home} className={styles.logo}>
          <Text size="s">{t('Logo')}</Text>
        </AppLink>

        <MenuLinkList />

        <HStack
          w100={false}
          align="center"
          gap="16"
          className={styles.rightContent}
        >
          <LangSwitcher className={styles.langSwitcher} />
          <ThemeSwitcher className={styles.themeSwitcher} />

          <UserMenu />
        </HStack>
      </HStack>
    );
  };

  const notAuthUser = () => {
    return (
      <HStack
        justify="between"
        align="center"
        data-testid="navbar"
        className={styles.navbar}
      >
        <AppLink to={RoutePath.home} className={styles.logo}>
          <Text size="s">{t('Logo')}</Text>
        </AppLink>

        <MenuLinkList />

        <HStack
          w100={false}
          align="center"
          gap="16"
          className={styles.rightContent}
        >
          <LangSwitcher className={styles.langSwitcher} />
          <ThemeSwitcher className={styles.themeSwitcher} />

          <Button size="s" onClick={onOpenModal}>
            {t('Log in')}
          </Button>

          <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
        </HStack>
      </HStack>
    );
  };

  return authData ? authUser() : notAuthUser();
});
