import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { AppRouteProps, routeConfig } from '../routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
  const renderWithAuth = useCallback(
    ({ path, authOnly, element, roles = [] }: AppRouteProps) => {
      const resultElement = (
        <Suspense fallback={<PageLoader />}>{element}</Suspense>
      );

      return (
        <Route
          key={path}
          path={path}
          element={
            authOnly ? (
              <RequireAuth roles={roles}>{resultElement}</RequireAuth>
            ) : (
              element
            )
          }
        />
      );
    },
    [],
  );

  return <Routes>{Object.values(routeConfig).map(renderWithAuth)}</Routes>;
};
