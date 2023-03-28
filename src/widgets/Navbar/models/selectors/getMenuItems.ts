import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import ArticleIcon from 'shared/assets/article-icon.svg';
import HomeIcon from 'shared/assets/home-icon.svg';
import AboutIcon from 'shared/assets/info-icon.svg';
import ProfileIcon from 'shared/assets/profile-icon.svg';
import { RoutePath } from 'shared/config/routes/routes';
import { MenuLinksListType } from '../types/menuLinksList';

export const getMenuItems = createSelector(getUserAuthData, (userData) => {
  const menuLinks: MenuLinksListType[] = [
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
    menuLinks.push(
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

  return menuLinks;
});
