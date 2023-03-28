import { NotificationsList, useGetNotifications } from 'entities/Notifications';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import NotificationIcon from 'shared/assets/notification.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popover';
import { Flex } from 'shared/ui/Stack/Flex/Flex';
import styles from './NavbarNotifications.module.scss';

export const NavbarNotifications = () => {
  const userData = useSelector(getUserAuthData);
  const {
    data: notifications,
    isLoading,
    isUninitialized,
  } = useGetNotifications(userData?.id, {
    skip: !userData,
    pollingInterval: 30000,
  });

  const triggerButton = (
    <Flex className={styles.triggerButton}>
      <div className={styles.number}>{notifications?.length}</div>
      <Icon Svg={NotificationIcon} />
    </Flex>
  );

  return (
    <Popover
      triggerContentClassName={styles.button}
      popoverClassName={styles.popover}
      contentClassName={styles.content}
      triggerContent={triggerButton}
      direction="bottom-right"
    >
      <NotificationsList
        isLoading={isLoading}
        isUninitialized={isUninitialized}
        notifications={notifications}
      />
    </Popover>
  );
};
