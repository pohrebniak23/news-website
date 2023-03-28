import classNames from 'classnames';
import { UserActions, getUserAuthData } from 'entities/User';
import {
  isUserAdmin,
  isUserManager,
} from 'entities/User/models/selectors/getUserRole';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ExitIcon from 'shared/assets/exit-icon.svg';
import ProfileIcon from 'shared/assets/profile-icon.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Dropdown, DropdownItem } from 'shared/ui/Dropdown';
import styles from './UserMenu.module.scss';

export const UserMenu = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogout = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  const menuItems: DropdownItem[] = [
    ...(isAdminPanelAvailable
      ? [
          {
            href: '/admin',
            content: <div className={styles.menuItem}>{t('Admin')}</div>,
          },
        ]
      : []),
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
