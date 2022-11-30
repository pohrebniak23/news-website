import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { AppRouteProps, routeConfig } from '../routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
  const renderWithAuth = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithAuth)}</Routes>;
};
