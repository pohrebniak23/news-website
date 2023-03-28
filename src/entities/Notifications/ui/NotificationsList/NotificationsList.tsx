import classNames from 'classnames';
import { getUserAuthData } from 'entities/User/models/selectors/getUserAuthData';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { useGetNotifications } from '../../api/notificationsApi';
import { Notifications } from '../../model/types/notifications';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';
import styles from './NotificationsList.module.scss';

interface NotificationsListProps {
  className?: string;
}

export const NotificationsList = ({ className }: NotificationsListProps) => {
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const {
    data: notifications,
    isLoading,
    isUninitialized,
  } = useGetNotifications(userData?.id, {
    skip: !userData,
  });

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
