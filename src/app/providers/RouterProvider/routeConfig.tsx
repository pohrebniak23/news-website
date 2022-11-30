import { AboutPage } from 'pages/AboutPage';
import ArticlesDetailsPage from 'pages/ArticlesDetailsPage/ui/ArticlesDetailsPage/ArticlesDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routes/routes';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath[AppRoutes.HOME],
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath[AppRoutes.PROFILE],
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: RoutePath[AppRoutes.ARTICLES_DETAILS],
    element: <ArticlesDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
