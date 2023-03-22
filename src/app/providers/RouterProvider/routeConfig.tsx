import { UserRole } from 'entities/User';
import { AboutPage } from 'pages/AboutPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import ArticlesDetailsPage from 'pages/ArticlesDetailsPage/ui/ArticlesDetailsPage/ArticlesDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routes/routes';
import ForbiddenPage from 'pages/ForbiddenPage/ui/ForbiddenPage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
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
    path: `${RoutePath[AppRoutes.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: `${RoutePath[AppRoutes.ARTICLES_DETAILS]}:id`,
    element: <ArticlesDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePath[AppRoutes.ADMIN_PANEL],
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath[AppRoutes.FORBIDDEN],
    element: <ForbiddenPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
