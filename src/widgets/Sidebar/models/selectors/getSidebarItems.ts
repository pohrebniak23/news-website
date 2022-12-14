import { createSelector } from '@reduxjs/toolkit';
import HomeIcon from 'shared/assets/home-icon.svg';
import { RoutePath } from 'shared/config/routes/routes';
import AboutIcon from 'shared/assets/about-icon.svg';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../types/SidebarItemType';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: SidebarItemType[] = [
    {
      path: RoutePath.home,
      text: 'Home',
      Icon: HomeIcon,
    },
    {
      path: RoutePath.about,
      text: 'About',
      Icon: AboutIcon,
    },
  ];

  if (userData?.id) {
    sidebarItems.push(
      {
        path: `${RoutePath.profile}${userData?.id}`,
        text: 'Profile',
        Icon: AboutIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: AboutIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItems;
});
