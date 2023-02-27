import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/info-icon.svg';
import ArticleIcon from 'shared/assets/article-icon.svg';
import HomeIcon from 'shared/assets/home-icon.svg';
import ProfileIcon from 'shared/assets/profile-icon.svg';
import { RoutePath } from 'shared/config/routes/routes';
import { SidebarItemType } from '../types/SidebarItemType';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: SidebarItemType[] = [
    {
      path: RoutePath.home,
      text: 'Home',
      icon: HomeIcon,
    },
    {
      path: RoutePath.about,
      text: 'About',
      icon: AboutIcon,
    },
  ];

  if (userData?.id) {
    sidebarItems.push(
      {
        path: `${RoutePath.profile}${userData?.id}`,
        text: 'Profile',
        icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Articles',
        icon: ArticleIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItems;
});
