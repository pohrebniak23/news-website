import AboutIcon from 'shared/assets/about-icon.svg';
import HomeIcon from 'shared/assets/home-icon.svg';
import { RoutePath } from 'shared/config/routes/routes';

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
};

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
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
];
