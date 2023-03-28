import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Notifications } from '../../model/types/notifications';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';
import styles from './NotificationsList.module.scss';

interface NotificationsListProps {
  className?: string;
  isLoading: boolean;
  isUninitialized: boolean;
  notifications?: Notifications[];
}

export const NotificationsList = ({
  className,
  isLoading,
  isUninitialized,
  notifications,
}: NotificationsListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack className={classNames(styles.list, styles.loader, className)}>
        <Loader />
      </VStack>
    );
  }

  if (isUninitialized || !notifications) {
    return (
      <VStack className={classNames(styles.list, className)}>
        <Text size="xs">{t('Notifications list is empty')}</Text>
      </VStack>
    );
  }

  return (
    <VStack gap="16" className={classNames(styles.list, className)}>
      {notifications?.map((notification: Notifications) => (
        <NotificationsItem key={notification.id} notification={notification} />
      ))}
    </VStack>
  );
};
