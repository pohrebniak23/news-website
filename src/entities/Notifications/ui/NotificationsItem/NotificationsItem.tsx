import classNames from 'classnames';
import ErrorIcon from 'shared/assets/error.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Title } from 'shared/ui/Title';
import { Notifications } from '../../model/types/notifications';
import styles from './NotificationsItem.module.scss';

interface NotificationsItemProps {
  className?: string;
  notification: Notifications;
}

export const NotificationsItem = ({
  className,
  notification,
}: NotificationsItemProps) => {
  const title = (
    <HStack gap="8" align="center">
      <Icon Svg={ErrorIcon} className={styles.icon} />
      <Title size="small">{notification.title}</Title>
    </HStack>
  );

  return (
    <VStack gap="4" className={classNames(styles.item, className)}>
      {notification.href ? (
        <AppLink to={notification.href}>{title}</AppLink>
      ) : (
        title
      )}

      <Text size="small">{notification.description}</Text>
    </VStack>
  );
};
