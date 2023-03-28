import { newsApi } from 'shared/api/newsApi';
import { Notifications } from '../model/types/notifications';

const notificationApi = newsApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notifications[], string | undefined>({
      query: (userId) => ({
        url: `/notifications?userId=${userId}`,
      }),
    }),
  }),
});

export const useGetNotifications = notificationApi.useGetNotificationsQuery;
