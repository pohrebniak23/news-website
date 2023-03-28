import { useGetNotifications } from './api/notificationsApi';
import { Notifications } from './model/types/notifications';
import { NotificationsList } from './ui/NotificationsList/NotificationsList';

export type { Notifications };

export { NotificationsList, useGetNotifications };
