import classNames from 'classnames';
import { UserActions, getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ExitIcon from 'shared/assets/exit-icon.svg';
import ProfileIcon from 'shared/assets/profile-icon.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Dropdown, DropdownItem } from 'shared/ui/Dropdown';
import styles from './NavbarMenu.module.scss';

export const NavbarMenu = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);

  const menuItems: DropdownItem[] = [
    {
      href: `/profile/${authData?.id}`,
      content: (
        <div className={styles.menuItem}>
          <ProfileIcon className={styles.menuIcon} />
          {t('Profile')}
        </div>
      ),
    },
    {
      onClick: onLogout,
      content: (
        <div className={styles.menuItem}>
          <ExitIcon className={styles.menuIcon} />
          {t('Log out')}
        </div>
      ),
    },
  ];

  return (
    <div className={classNames(styles.NavbarMenu)}>
      <Dropdown
        triggerContent={
          <img
            src={authData?.avatar}
            className={styles.menuAvatar}
            alt="logo"
          />
        }
        listItems={menuItems}
        direction="bottom-right"
        className={styles.menu}
      />
    </div>
  );
};
