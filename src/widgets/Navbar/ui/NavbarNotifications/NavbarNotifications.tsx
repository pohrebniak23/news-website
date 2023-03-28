import { NotificationsList } from 'entities/Notifications';
import NotificationIcon from 'shared/assets/notification.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popover';
import styles from './NavbarNotifications.module.scss';

export const NavbarNotifications = () => {
  return (
    <Popover
      triggerContentClassName={styles.button}
      popoverClassName={styles.popover}
      contentClassName={styles.content}
      triggerContent={<Icon Svg={NotificationIcon} />}
      direction="bottom-right"
    >
      <NotificationsList />
    </Popover>
  );
};
